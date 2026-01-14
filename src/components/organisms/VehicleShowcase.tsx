import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import arac1 from '../../assets/about/arac1.png'
import arac2 from '../../assets/about/arac2.png'
import arac3 from '../../assets/about/arac3.png'
import arac4 from '../../assets/about/arac4.png'
import arac5 from '../../assets/about/arac5.png'

const vehicles = [
    { src: arac1, alt: 'Motosiklet' },
    { src: arac2, alt: 'Küçük Panelvan' },
    { src: arac3, alt: 'Orta Panelvan' },
    { src: arac4, alt: 'Kasa Kamyonet' },
    { src: arac5, alt: 'Kapalı Kamyonet' },
]

export function VehicleShowcase() {
    const navigate = useNavigate();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const updateScrollPosition = () => {
            setScrollPosition(container.scrollLeft);
            setContainerWidth(container.clientWidth);
        };

        updateScrollPosition();
        container.addEventListener('scroll', updateScrollPosition);
        window.addEventListener('resize', updateScrollPosition);

        return () => {
            container.removeEventListener('scroll', updateScrollPosition);
            window.removeEventListener('resize', updateScrollPosition);
        };
    }, []);
    return (
        <section className="w-full bg-white text-gray-900">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
                <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-full">
                    <p
                        className="md:hidden text-[24px] font-bold text-[#FF5B04] text-center"
                        style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                    >
                        LOJİSTİĞİN SÜPER APP'İ YÜKSİ
                    </p>
                    <h2 className="hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-extrabold text-center text-orange-500 px-4">
                        LOJİSTİĞİN SÜPER APP'İ YÜKSİ
                    </h2>
                    <span className="text-[24px] md:text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#333] md:uppercase md:tracking-wider sm:tracking-[0.1em] md:tracking-[0.15em] lg:tracking-[0.2em] md:text-black mt-2 sm:mt-3 md:mt-4 text-center md:text-center">
                        Araç Sınıflarımız
                    </span>
                </div>

                <div className="w-full lg:hidden relative">
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto py-4 [-webkit-overflow-scrolling:touch] px-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <style>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        {vehicles.map((vehicle, index) => {
                            const cardWidth = 200;
                            const gap = 16;
                            const padding = 16;
                            const cardLeft = index * (cardWidth + gap) + padding;
                            const cardCenter = cardLeft + cardWidth / 2;
                            const scrollCenter = scrollPosition + (containerWidth / 2);
                            const distanceFromCenter = Math.abs(cardCenter - scrollCenter);
                            const maxDistance = containerWidth / 2;
                            const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
                            
                            const scale = 1 - (normalizedDistance * 0.15);
                            const opacity = 1 - (normalizedDistance * 0.4);
                            const blur = normalizedDistance * 2;
                            const zIndex = Math.floor(10 - normalizedDistance * 8);
                            
                            const translateX = (scrollCenter - cardCenter) * 0.1;
                            const translateZ = normalizedDistance * -20;
                            
                            return (
                                <div
                                    key={vehicle.alt}
                                    className="min-w-[200px] flex items-center justify-center h-44 relative"
                                    style={{
                                        transform: `scale(${scale}) translateX(${translateX}px) translateZ(${translateZ}px)`,
                                        opacity: opacity,
                                        filter: `blur(${blur}px)`,
                                        zIndex: zIndex,
                                        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out, filter 0.3s ease-out',
                                    }}
                                >
                                    <img
                                        src={vehicle.src}
                                        alt={vehicle.alt}
                                        className="w-[180px] h-auto object-contain"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 w-full">
                    {vehicles.map((vehicle) => (
                        <div
                            key={vehicle.alt}
                            className="bg-[#FFEFE7] rounded-xl sm:rounded-2xl shadow-lg overflow-hidden flex items-center justify-center p-4 sm:p-5 md:p-6 h-48 sm:h-56 md:h-64 lg:h-72"
                        >
                            <img
                                src={vehicle.src}
                                alt={vehicle.alt}
                                className="w-full h-full max-h-32 sm:max-h-40 md:max-h-44 lg:max-h-48 object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                <button
                    className="md:hidden mt-4 inline-flex items-center gap-2 bg-[#FF5B04] hover:bg-[#E55103] text-white font-medium text-[16px] px-6 py-3 rounded-[26px] shadow-md transition-colors self-start"
                    onClick={() => navigate('/vehiclese')}
                >
                    İncele
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <button
                    className="hidden md:inline-flex mt-2 sm:mt-4 md:mt-6 items-center gap-2 sm:gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-7 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full sm:rounded-2xl md:rounded-3xl shadow-md transition-colors self-start sm:self-center lg:self-start"
                    onClick={() => navigate('/vehiclese')}
                >
                    İncele
                    <span aria-hidden className="text-base sm:text-lg md:text-xl lg:text-2xl">→</span>
                </button>
            </div>
        </section>
    )
}
