import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import arac1 from '../../assets/about/arac1.png';
import arac2 from '../../assets/about/arac2.png';
import arac3 from '../../assets/about/arac3.png';
import arac4 from '../../assets/about/arac4.png';
import arac5 from '../../assets/about/arac5.png';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { Icon } from '../atoms/Icon';
import { getLocalizedPath } from '../../i18n';
import { useLanguageFromUrl } from '../../hooks/useLanguageFromUrl';

export function VehicleShowcase() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const currentLang = useLanguageFromUrl();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    const vehicles = [
        { src: arac1, alt: t('home.vehicleShowcase.motorcycle'), key: 'motorcycle' },
        { src: arac2, alt: t('home.vehicleShowcase.minivan'), key: 'minivan' },
        { src: arac3, alt: t('home.vehicleShowcase.panelvan'), key: 'panelvan' },
        { src: arac4, alt: t('home.vehicleShowcase.pickup'), key: 'pickup' },
        { src: arac5, alt: t('home.vehicleShowcase.truck'), key: 'truck' },
    ];

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
                        className="md:hidden text-[24px] font-bold text-[#032c95] text-center"
                        style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                    >
                        {t('home.vehicleShowcase.title')}
                    </p>
                    <h2 className="hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-extrabold text-center text-primary-500 px-4">
                        {t('home.vehicleShowcase.title')}
                    </h2>
                    <span className="text-[24px] md:text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#333] md:uppercase md:tracking-wider sm:tracking-[0.1em] md:tracking-[0.15em] lg:tracking-[0.2em] md:text-black mt-2 sm:mt-3 md:mt-4 text-center md:text-center">
                        {t('home.vehicleShowcase.subtitle')}
                    </span>
                </div>

                <div className="w-full lg:hidden relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto py-4 [-webkit-overflow-scrolling:touch] snap-x snap-mandatory"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            scrollSnapType: 'x mandatory',
                            paddingLeft: 'calc(50% - 100px)',
                            paddingRight: 'calc(50% - 100px)',
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
                            const zIndex = Math.floor(10 - normalizedDistance * 8);

                            const translateX = (scrollCenter - cardCenter) * 0.1;
                            const translateZ = normalizedDistance * -20;

                            return (
                                <div
                                    key={vehicle.key}
                                    className="min-w-[200px] flex items-center justify-center h-44 relative snap-center"
                                    style={{
                                        transform: `scale(${scale}) translateX(${translateX}px) translateZ(${translateZ}px)`,
                                        opacity: opacity,
                                        zIndex: zIndex,
                                        transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-out, filter 0.2s ease-out',
                                        scrollSnapAlign: 'center',
                                        scrollSnapStop: 'always',
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
                            key={vehicle.key}
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
                    className="md:hidden mt-4 inline-flex items-center gap-2 bg-[#032c95] hover:bg-[#E55103] text-white font-medium text-[16px] px-6 py-3 rounded-[26px] shadow-md transition-colors self-start"
                    onClick={() => navigate(getLocalizedPath('vehiclese', currentLang))}
                >
                    {t('home.vehicleShowcase.explore')}
                    <Icon src={arrowRight} alt={t('common.next')} className="w-4 h-4" />
                </button>

                <button
                    className="hidden md:inline-flex mt-2 sm:mt-4 md:mt-6 items-center gap-2 sm:gap-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-7 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full sm:rounded-2xl md:rounded-3xl shadow-md transition-colors self-start sm:self-center lg:self-start"
                    onClick={() => navigate(getLocalizedPath('vehiclese', currentLang))}
                >
                    {t('home.vehicleShowcase.explore')}
                    <span aria-hidden className="text-base sm:text-lg md:text-xl lg:text-2xl">→</span>
                </button>
            </div>
        </section>
    );
}
