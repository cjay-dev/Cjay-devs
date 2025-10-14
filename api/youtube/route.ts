import { NextResponse } from "next/server"

// 🎥 YouTube search API route - uses multiple fallback methods for reliability
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 })
  }

  try {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${encodeURIComponent(query + " official audio")}&part=snippet&type=video&maxResults=20&order=relevance`,
      {
        headers: {
          "X-RapidAPI-Key": "f0b8c3d4e5msh6a7b8c9d0e1f2g3h4i5",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      },
    )

    if (!response.ok) {
      return await fallbackYouTubeSearch(query)
    }

    const data = await response.json()

    // 🎬 Transform YouTube API data to our format
    const videos =
      data.items?.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
        publishedAt: item.snippet.publishedAt,
        duration: "PT0M0S", // Duration requires additional API call
        viewCount: "0",
        videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      })) || []

    return NextResponse.json({ items: videos })
  } catch (error) {
    console.error("YouTube search error:", error)
    return await fallbackYouTubeSearch(query)
  }
}

// 🔄 Fallback method using YouTube's public data
async function fallbackYouTubeSearch(query: string) {
  try {
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query + " official audio")}`

    const response = await fetch(searchUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    })

    const html = await response.text()

    const match = html.match(/var ytInitialData = ({.+?});/)

    if (!match) {
      throw new Error("Could not parse YouTube data")
    }

    const ytData = JSON.parse(match[1])
    const contents =
      ytData?.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.[0]
        ?.itemSectionRenderer?.contents || []

    // 🎬 Extract video information from search results
    const videos = contents
      .filter((item: any) => item.videoRenderer)
      .slice(0, 20)
      .map((item: any) => {
        const video = item.videoRenderer
        return {
          id: video.videoId,
          title: video.title?.runs?.[0]?.text || video.title?.simpleText || "",
          channelTitle: video.ownerText?.runs?.[0]?.text || "",
          thumbnail: video.thumbnail?.thumbnails?.[video.thumbnail.thumbnails.length - 1]?.url || "",
          publishedAt: video.publishedTimeText?.simpleText || "",
          duration: video.lengthText?.simpleText || "0:00",
          viewCount: video.viewCountText?.simpleText || "0",
          videoUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
        }
      })

    return NextResponse.json({ items: videos })
  } catch (error) {
    console.error("Fallback YouTube search error:", error)
    return NextResponse.json(
      {
        error: "Unable to search YouTube at this time. Please try again later.",
        items: [],
      },
      { status: 500 },
    )
  }
}
