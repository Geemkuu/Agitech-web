import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedSeedlings } from "@/components/home/featured-seedlings"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CategoriesSection } from "@/components/home/categories-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedSeedlings />
        <WhyChooseUs />
        <CategoriesSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
