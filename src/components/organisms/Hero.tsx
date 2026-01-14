import { useState, useEffect } from 'react';
import heroBg from '../../assets/hero/hero-bg.png';
import kanguru1 from '../../assets/hero/kanguru1.png';
import kanguru2 from '../../assets/hero/kanguru2.png';
import kanguru3 from '../../assets/hero/kanguru3.png';
import kanguruGif from '../../assets/hero/kanguru.gif';
import { HeroOverlay } from '../../components/molecules/HeroOverlay';
import { Button } from '../atoms/Button';

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
        <section className="relative w-full bg-white overflow-hidden font-roboto selection:bg-orange-200">
            {/* Mobile Hero - background image */}
            <div className="relative w-full lg:hidden">
                <img
                    src={heroBg}
                    className="w-full h-[420px] object-cover"
                    alt="Yüksi lojistik arka plan"
                />
                <div className="absolute bottom-14 left-5 flex flex-col items-start gap-0 z-10">
                    <img
                        src={kanguruGif}
                        alt="Yüksi kanguru"
                        className="w-[130px] h-auto object-contain"
                    />
                    <Button
                        variant="primary"
                        size="md"
                        className="w-[140px] h-[42px] -left-[10px] !rounded-[999px] text-[14px] font-medium flex items-center justify-center -mt-2"
                    >
                        <span>Yük Oluştur</span>
                    </Button>
                </div>
                <div className="bg-white rounded-t-[40px] px-6 pt-20 pb-10"></div>
            </div>

            {/* Desktop Hero */}
            <div className="relative w-full h-[1080px] hidden lg:block">
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
            </div>
        </section>
    );
}
