import HeroSection from './ui/HeroSection/HeroSection'
import ServicesSection from './ui/ServicesSection/ServicesSection'
import AboutSection from './ui/AboutSection/AboutSection'
import AddressSection from './ui/AddressSection/AddressSection'
import PortfolioSection from './ui/PortfolioSection/PortfolioSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      {/* <Portfolio /> */}
      <AddressSection />
      {/* <ContactSection /> */}
    </>
  )
}
