import { HeroSection } from "@/components/hero-section"
import { DownloadSection } from "@/components/download-section"
import { FeaturesSection } from "@/components/features-section"
import { MatrixBackground } from "@/components/matrix-background"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <HeroSection />
        <DownloadSection />
        <FeaturesSection />
        <Footer />
      </div>
    </main>
  )
}

