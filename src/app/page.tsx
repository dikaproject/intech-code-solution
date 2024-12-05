import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import ProductSection from "@/components/ProductSection"
import JasaSection from "@/components/JasaSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <JasaSection />
      <ContactSection />
    </main>
  )
}
