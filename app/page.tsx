import HeroSection from './ui/HeroSection'
import ServicesSection from './ui/ServicesSection'
import AboutSection from './ui/AboutSection'
import AddressSection from './ui/AddressSection'
import Portfolio from './ui/Portfolio'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Portfolio />
      <AddressSection />
    </>
  )
}
