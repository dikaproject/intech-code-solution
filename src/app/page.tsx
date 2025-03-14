import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import ProductSection from "@/components/ProductSection"
import JasaSection from "@/components/JasaSection"
import ContactSection from "@/components/ContactSection"
import FooterSection from "@/components/FooterSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <JasaSection />
      {/* <ProductSection /> */}
      <ContactSection />
      <FooterSection />
    </main>
  )
}
