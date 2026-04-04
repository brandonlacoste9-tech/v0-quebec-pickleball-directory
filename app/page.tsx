import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { RegionsSection } from "@/components/regions-section"
import { CourtDirectory } from "@/components/court-directory"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <RegionsSection />
      <CourtDirectory />
      <SiteFooter />
    </main>
  )
}
