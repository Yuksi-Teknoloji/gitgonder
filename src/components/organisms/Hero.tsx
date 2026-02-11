import heroBg from '../../assets/hero/gitgonder-home.png';
import { HeroOverlay } from '../../components/molecules/HeroOverlay';

export default function Hero() {
    return (
        <section className="relative w-full bg-[#FFF6ED] lg:bg-white overflow-visible lg:overflow-hidden font-roboto selection:text-primary-200">
            {/* Mobile Hero - background image */}
            <div className="relative w-full lg:hidden">
                <img
                    src={heroBg}
                    className="w-full h-[420px] object-cover"
                    alt="Gitgönder kargo"
                />
                <div className="bg-[#FFF6ED] rounded-t-[40px] px-6 pt-20 pb-10"></div>
            </div>

            {/* Desktop Hero */}
            <div className="relative w-full h-[100vh] hidden lg:flex overflow-hidden">
                {/* Left side - Full screen background */}
                <div className="relative w-[65%] h-full">
                    <img 
                        src={heroBg} 
                        className="w-full h-full object-cover" 
                        alt="Gitgönder kargo"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>
                
                {/* Right side - White space */}
                <div className="w-[35%] h-full bg-white relative">
<HeroOverlay />
                </div>
            </div>
        </section>
    );
}

