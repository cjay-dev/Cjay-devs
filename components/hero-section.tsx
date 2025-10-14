"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.65_0.25_295/0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        {!isLoaded ? (
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary animate-spin" />
              <div className="absolute inset-4 rounded-full border-4 border-accent/20" />
              <div
                className="absolute inset-4 rounded-full border-4 border-transparent border-b-accent border-l-secondary animate-spin"
                style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-pulse" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                Loading...
              </p>
              <p className="text-sm text-muted-foreground">Initiating your music experience</p>
            </div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-16 rounded-full bg-gradient-to-t from-primary to-secondary"
                  style={{
                    animation: "wave 1s ease-in-out infinite",
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-6 slide-up">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                CEEJAY TECH
              </h1>
              <div className="h-1 w-48 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
              <p className="text-2xl md:text-3xl font-semibold text-secondary/80 tracking-wide">INCORPORATIVE</p>
            </div>

            <div className="space-y-6 py-8 slide-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Music Downloader
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover, search, and download your favorite music from millions of tracks.
                <br />
                Powered by advanced specialist for the best music experience.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="px-8 py-4 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl backdrop-blur-sm">
                <p className="text-sm font-semibold">
                  Status: <span className="text-primary">Online</span>
                </p>
              </div>
              <div className="px-8 py-4 bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 rounded-2xl backdrop-blur-sm">
                <p className="text-sm font-semibold">
                  System: <span className="text-secondary">Active</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-2 h-4 bg-gradient-to-b from-primary to-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
