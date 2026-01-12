import Hero from '../components/Hero'
import { Header } from '../components/organisms/Header'
import { VehicleShowcase } from '../components/sections/VehicleShowcase'
import { BusinessPartners } from '../components/sections/BusinessPartners'

export default function Home() {
    return (
        <div className="w-full min-h-screen relative bg-white">
            <Header />
            <Hero />
            <VehicleShowcase />
            <BusinessPartners />
        </div>
    )
}
