import { Header } from '../components/organisms/Header'
import { AboutUs } from '../components/organisms/AboutUs'
import { AboutContent } from '../components/organisms/AboutContent'
import { Footer } from '../components/organisms/Footer'

export default function About() {
    return (
        <div className="w-full min-h-screen relative bg-white">
            <Header activeItem="/about" />
            <AboutUs />
            <AboutContent />
            <Footer />
        </div>
    )
}
