import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { ContactFormSection } from '../components/organisms/ContactFormSection';

export default function Contact() {
    return (
        <div className="w-full min-h-screen relative bg-white">
            <Header activeItem="/contact" />
            <ContactFormSection />
            <Footer />
        </div>
    );
}

