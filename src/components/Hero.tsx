import { useState, useEffect } from 'react';
import heroBg from '../assets/hero/hero-bg.png';
import kanguru1 from '../assets/hero/kanguru1.png';
import kanguru2 from '../assets/hero/kanguru2.png';
import kanguru3 from '../assets/hero/kanguru3.png';
import { HeroOverlay } from './atoms/HeroOverlay';

const kangaroos = [kanguru1, kanguru2, kanguru3];

export default function Hero() {
    const [currentKangaroo, setCurrentKangaroo] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKangaroo((prev) => (prev + 1) % kangaroos.length);
        }, 3000); // Slower animation for the slide effect (3s)
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[1080px] bg-white overflow-hidden font-roboto selection:bg-orange-200">
            <div
                className="absolute top-0 left-0 z-10 w-full h-full"
                style={{
                    clipPath: 'circle(1250px at 50px 540px)',
                }}
            >
                <img src={heroBg} className="w-[60%] h-full object-cover object-left" alt="Logistics Background" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>

            <HeroOverlay activeIndex={currentKangaroo} />

            <div className="absolute bottom-0 right-0 z-40">
                <img
                    src={kangaroos[currentKangaroo]}
                    alt="Yuksi Kangaroo"
                    className="w-[500px] h-auto object-contain drop-shadow-2xl transition-all duration-500 ease-in-out transform translate-y-10 hover:translate-y-0"
                />
            </div>

            <div className="absolute top-32 left-20 z-30 animate-bounce">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-orange-100 flex items-center justify-center transform rotate-12">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20"></div>
                </div>
            </div>
            <div className="absolute bottom-40 left-1/3 z-30 animate-pulse delay-700">
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-xl border border-orange-100 flex items-center justify-center transform -rotate-6">
                    <div className="w-6 h-6 rounded bg-blue-500/20"></div>
                </div>
            </div>
        </section>
    );
}
