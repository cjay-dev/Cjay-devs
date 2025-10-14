const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const features = [
  {
    icon: ZapIcon,
    title: "FLASH SPEED SEARCH",
    description: "Find any song instantly with our powerful search engine",
    color: "text-primary",
  },
  {
    icon: ShieldIcon,
    title: "H.Q.A",
    description: "Access HIGH QUALITY AUDIO tracks from verified sources",
    color: "text-secondary",
  },
  {
    icon: GlobeIcon,
    title: "Millions of Songs",
    description: "Explore a vast library of music from artists worldwide",
    color: "text-accent",
  },
  {
    icon: LockIcon,
    title: "Safe & Secure",
    description: "Your searches and downloads are private and protected",
    color: "text-primary",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Why Choose CEEJAY TECHS
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have the best music experience you would wish to
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/60 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] transform"
            >
              <div className="absolute top-6 right-6 text-7xl font-bold text-primary/5">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative space-y-5">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <feature.icon />
                </div>

                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
