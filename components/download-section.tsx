"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// ✨ Icon Components - Beautiful SVG graphics for the interface
const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const MusicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
)

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const LoaderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-spin"
  >
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
  </svg>
)

const MessageCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

// 🎵 YouTube Play Icon
const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

// 🍎 Apple Music Icon
const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

// 🎬 Eye Icon for views
const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

// 📊 Data Types for iTunes API
interface Track {
  trackId: number
  trackName: string
  artistName: string
  collectionName: string
  artworkUrl100: string
  previewUrl: string
  trackViewUrl: string
  collectionViewUrl: string
  trackPrice: number
  currency: string
  kind: string
  wrapperType: string
  trackTimeMillis: number
  primaryGenreName?: string
  releaseDate?: string
  trackNumber?: number
  trackCount?: number
  discNumber?: number
  discCount?: number
  trackExplicitness?: string
  country?: string
  collectionPrice?: number
}

// 🎥 Data Types for YouTube API
interface YouTubeVideo {
  id: string
  title: string
  channelTitle: string
  thumbnail: string
  publishedAt: string
  duration: string
  viewCount: string
  videoUrl: string
}

type SearchSource = "apple" | "youtube"

export function DownloadSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<Track[]>([])
  const [youtubeResults, setYoutubeResults] = useState<YouTubeVideo[]>([])
  const [error, setError] = useState("")
  const [searchSource, setSearchSource] = useState<SearchSource>("apple")

  const whatsappChannelUrl = "https://whatsapp.com/channel/0029VaogSY74IBhJWe8b472H"

  // ⏱️ Debounce mechanism - prevents excessive API calls while typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // 🍎 Apple Music Search Handler
  const handleAppleSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setError("Please enter a song title")
      return
    }

    setIsSearching(true)
    setError("")
    setResults([])
    setYoutubeResults([])

    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&attribute=songTerm&limit=50`,
      )
      const data = await response.json()

      if (data.results && data.results.length > 0) {
        // 🎵 Filter to ensure we only get full songs, not ringtones
        const fullSongs = data.results.filter(
          (track: Track) =>
            track.kind === "song" &&
            track.wrapperType === "track" &&
            !track.trackName.toLowerCase().includes("ringtone") &&
            !track.collectionName?.toLowerCase().includes("ringtone") &&
            track.trackTimeMillis &&
            track.trackTimeMillis > 30000,
        )
        if (fullSongs.length > 0) {
          setResults(fullSongs)
        } else {
          setError("No full songs found. Try a different search term.")
        }
      } else {
        setError("No results found. Try a different search term.")
      }
    } catch (err) {
      setError("Search failed. Please try again.")
      console.error("Search error:", err)
    } finally {
      setIsSearching(false)
    }
  }, [])

  // 🎥 YouTube Search Handler
  const handleYoutubeSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setError("Please enter a song title")
      return
    }

    setIsSearching(true)
    setError("")
    setResults([])
    setYoutubeResults([])

    try {
      const response = await fetch(`/api/youtube?q=${encodeURIComponent(query)}`)
      const data = await response.json()

      if (data.error) {
        setError(data.error)
        return
      }

      if (data.items && data.items.length > 0) {
        setYoutubeResults(data.items)
      } else {
        setError("No videos found. Try a different search term.")
      }
    } catch (err) {
      setError("YouTube search failed. Please try again.")
      console.error("YouTube search error:", err)
    } finally {
      setIsSearching(false)
    }
  }, [])

  // 🔄 Main search handler that routes to the appropriate service
  const handleSearch = useCallback(() => {
    if (searchSource === "apple") {
      handleAppleSearch(searchQuery)
    } else {
      handleYoutubeSearch(searchQuery)
    }
  }, [searchQuery, searchSource, handleAppleSearch, handleYoutubeSearch])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleDownload = (track: Track) => {
    window.open(track.trackViewUrl, "_blank")
  }

  const handleYoutubeDownload = (video: YouTubeVideo) => {
    window.open(video.videoUrl, "_blank")
  }

  // ⏱️ Format milliseconds to MM:SS
  const formatDuration = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  // 🎥 Parse YouTube ISO 8601 duration format (PT4M33S) to MM:SS
  const parseYouTubeDuration = (duration: string) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
    if (!match) return "0:00"

    const hours = Number.parseInt(match[1]) || 0
    const minutes = Number.parseInt(match[2]) || 0
    const seconds = Number.parseInt(match[3]) || 0

    const totalMinutes = hours * 60 + minutes
    return `${totalMinutes}:${seconds.toString().padStart(2, "0")}`
  }

  // 📊 Format view count with K, M, B suffixes
  const formatViewCount = (count: string) => {
    const num = Number.parseInt(count)
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  // 📅 Format date to readable format
  const formatReleaseDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl glow-effect">
          {/* ✨ Decorative top gradient line */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary via-secondary to-transparent" />

          <div className="space-y-8">
            {/* 🎯 Header Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full backdrop-blur-sm">
                <SearchIcon />
                <span className="text-sm font-semibold tracking-wide">MUSIC SEARCH</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Discover Your Sound
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Search millions of songs from Apple Music and YouTube
              </p>

              {/* 💬 WhatsApp Channel Button */}
              <div className="pt-4">
                <a
                  href={whatsappChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105 transform"
                >
                  <MessageCircleIcon />
                  Join Our Channel
                </a>
              </div>
            </div>

            {/* 🎛️ Source Selection Tabs */}
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setSearchSource("apple")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  searchSource === "apple"
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                    : "bg-card/50 border border-primary/20 hover:border-primary/40"
                }`}
              >
                <AppleIcon />
                Apple Music
              </button>
              <button
                onClick={() => setSearchSource("youtube")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  searchSource === "youtube"
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg scale-105"
                    : "bg-card/50 border border-primary/20 hover:border-primary/40"
                }`}
              >
                <YouTubeIcon />
                YouTube
              </button>
            </div>

            {/* 🔍 Search Input Section */}
            <div className="space-y-4">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-primary/80 flex items-center gap-2">
                  <MusicIcon />
                  Search by Title
                </label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter song title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-background/50 border-primary/30 focus:border-primary h-14 text-lg rounded-2xl transition-all duration-300"
                  />
                  <Button
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="h-14 px-4 md:px-6 font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-2xl transition-all duration-300 hover:scale-105 transform flex-shrink-0"
                  >
                    {isSearching ? (
                      <LoaderIcon />
                    ) : (
                      <>
                        <SearchIcon />
                        <span className="ml-2 hidden sm:inline">Search</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* ⚠️ Error Message Display */}
              {error && (
                <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-4 text-sm text-destructive">
                  {error}
                </div>
              )}
            </div>

            {/* ⏳ Loading Animation */}
            {isSearching && (
              <div className="flex flex-col items-center justify-center py-20 space-y-6">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary animate-spin" />
                  <div className="absolute inset-3 rounded-full border-4 border-accent/20" />
                  <div
                    className="absolute inset-3 rounded-full border-4 border-transparent border-b-accent animate-spin"
                    style={{ animationDirection: "reverse" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
                  </div>
                </div>
                <p className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
                  Searching {searchSource === "apple" ? "Apple Music" : "YouTube"}...
                </p>
              </div>
            )}

            {/* 🍎 Apple Music Results */}
            {!isSearching && searchSource === "apple" && results.length > 0 && (
              <div className="space-y-6 slide-up">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Found {results.length} Songs
                  </h3>
                </div>
                <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {results.map((track, index) => (
                    <div
                      key={track.trackId}
                      className="bg-card/60 backdrop-blur-sm border border-primary/10 rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] transform"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex gap-5">
                        <div className="relative flex-shrink-0">
                          <img
                            src={track.artworkUrl100 || "/placeholder.svg"}
                            alt={track.trackName}
                            className="w-24 h-24 rounded-xl object-cover shadow-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                        </div>
                        <div className="flex-1 min-w-0 space-y-3">
                          <div>
                            <h4 className="font-bold text-lg truncate group-hover:text-primary transition-colors">
                              {track.trackName}
                            </h4>
                            <p className="text-sm text-muted-foreground truncate">{track.artistName}</p>
                            <p className="text-xs text-muted-foreground/70 truncate">{track.collectionName}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                            {track.primaryGenreName && (
                              <div className="flex items-center gap-1.5">
                                <span className="text-muted-foreground/60">Genre:</span>
                                <span className="font-medium text-primary/80">{track.primaryGenreName}</span>
                              </div>
                            )}
                            {track.trackTimeMillis && (
                              <div className="flex items-center gap-1.5">
                                <span className="text-muted-foreground/60">Duration:</span>
                                <span className="font-medium text-secondary/80">
                                  {formatDuration(track.trackTimeMillis)}
                                </span>
                              </div>
                            )}
                            {track.releaseDate && (
                              <div className="flex items-center gap-1.5">
                                <span className="text-muted-foreground/60">Released:</span>
                                <span className="font-medium text-accent/80">
                                  {formatReleaseDate(track.releaseDate)}
                                </span>
                              </div>
                            )}
                            {track.trackNumber && (
                              <div className="flex items-center gap-1.5">
                                <span className="text-muted-foreground/60">Track:</span>
                                <span className="font-medium">
                                  {track.trackNumber}
                                  {track.trackCount && ` of ${track.trackCount}`}
                                </span>
                              </div>
                            )}
                            {track.trackExplicitness && track.trackExplicitness !== "notExplicit" && (
                              <div className="flex items-center gap-1.5">
                                <span className="px-2 py-0.5 bg-destructive/20 text-destructive rounded text-[10px] font-bold">
                                  EXPLICIT
                                </span>
                              </div>
                            )}
                            {track.country && (
                              <div className="flex items-center gap-1.5">
                                <span className="text-muted-foreground/60">Country:</span>
                                <span className="font-medium">{track.country}</span>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button
                              onClick={() => handleDownload(track)}
                              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:scale-105 transform"
                            >
                              <DownloadIcon />
                              Download
                            </Button>
                            {track.previewUrl && (
                              <a
                                href={track.previewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-xl text-sm font-medium transition-all hover:scale-105 transform"
                              >
                                <MusicIcon />
                                Preview
                              </a>
                            )}
                            <a
                              href={track.collectionViewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 hover:bg-secondary/30 border border-secondary/30 rounded-xl text-sm font-medium transition-all hover:scale-105 transform"
                            >
                              <ExternalLinkIcon />
                              Album
                            </a>
                          </div>

                          {(track.trackPrice !== undefined || track.collectionPrice !== undefined) && (
                            <div className="flex items-center gap-3 text-xs font-medium">
                              {track.trackPrice !== undefined && (
                                <span className="text-primary/70">
                                  Track: {track.currency} {track.trackPrice}
                                </span>
                              )}
                              {track.collectionPrice !== undefined && (
                                <span className="text-secondary/70">
                                  Album: {track.currency} {track.collectionPrice}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 🎥 YouTube Results */}
            {!isSearching && searchSource === "youtube" && youtubeResults.length > 0 && (
              <div className="space-y-6 slide-up">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    Found {youtubeResults.length} Videos
                  </h3>
                </div>
                <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {youtubeResults.map((video, index) => (
                    <div
                      key={video.id}
                      className="bg-card/60 backdrop-blur-sm border border-red-500/10 rounded-2xl p-5 hover:border-red-500/30 transition-all duration-300 group hover:shadow-xl hover:shadow-red-500/10 hover:scale-[1.02] transform"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex gap-5">
                        <div className="relative flex-shrink-0">
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-32 h-24 rounded-xl object-cover shadow-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                            <YouTubeIcon />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 space-y-3">
                          <div>
                            <h4 className="font-bold text-lg line-clamp-2 group-hover:text-red-500 transition-colors">
                              {video.title}
                            </h4>
                            <p className="text-sm text-muted-foreground truncate">{video.channelTitle}</p>
                          </div>

                          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                            <div className="flex items-center gap-1.5">
                              <span className="text-muted-foreground/60">Duration:</span>
                              <span className="font-medium text-red-500/80">
                                {parseYouTubeDuration(video.duration)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <EyeIcon />
                              <span className="font-medium">{formatViewCount(video.viewCount)} views</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-muted-foreground/60">Published:</span>
                              <span className="font-medium">{formatReleaseDate(video.publishedAt)}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button
                              onClick={() => handleYoutubeDownload(video)}
                              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:scale-105 transform"
                            >
                              <YouTubeIcon />
                              Watch on YouTube
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
