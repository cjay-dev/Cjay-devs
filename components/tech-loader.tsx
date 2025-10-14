"use client"

export function TechLoader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="relative w-32 h-32">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />

        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />

        {/* Inner ring */}
        <div className="absolute inset-4 rounded-full border-4 border-secondary/20" />

        {/* Spinning inner ring */}
        <div
          className="absolute inset-4 rounded-full border-4 border-transparent border-b-secondary border-l-secondary animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1s" }}
        />

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
        </div>
      </div>

      <div className="space-y-2 text-center">
        <p className="text-xl font-mono text-primary animate-pulse">INITIALIZING...</p>
        <p className="text-sm font-mono text-muted-foreground">{">"} Loading CEEJAAY TECH Systems</p>
      </div>

      <div className="flex gap-2">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-8 bg-primary rounded-full animate-pulse"
            style={{
              animationDelay: `${i * 0.1}s`,
              opacity: 0.3 + i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  )
}
