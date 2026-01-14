import { Header } from '../components/organisms/Header';
import { HelpHero } from '../components/organisms/HelpHero';
import { HelpContent } from '../components/organisms/HelpContent';
import { Footer } from '../components/organisms/Footer';

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
