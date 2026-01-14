import Hero from '../components/organisms/Hero'
import { Header } from '../components/organisms/Header'
import { VehicleShowcase } from '../components/organisms/VehicleShowcase'
import { BusinessPartners } from '../components/organisms/BusinessPartners'
import { MobileJoin } from '../components/organisms/MobileJoin'
import { ContactCTA } from '../components/organisms/ContactCTA'
import { Footer } from '../components/organisms/Footer'

export default function Home() {
    return (
        <div className="w-full min-h-screen relative bg-white">
            <Header activeItem="/" />
            <Hero />
            <VehicleShowcase />
            <BusinessPartners />
            <MobileJoin />
            <ContactCTA />
            <Footer />
        </div>
    )
}
