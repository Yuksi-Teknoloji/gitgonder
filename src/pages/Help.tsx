import { Header } from '../components/organisms/Header';
import { HelpHero } from '../components/sections/HelpHero';
import { HelpContent } from '../components/sections/HelpContent';
import { Footer } from '../components/sections/Footer';

export default function Help() {
    return (
        <div className="w-full min-h-screen relative bg-white">
            <Header activeItem="/help" />
            <HelpHero />
            <HelpContent />
            <Footer />
        </div>
    );
}
