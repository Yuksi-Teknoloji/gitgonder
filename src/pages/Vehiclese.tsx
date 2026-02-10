import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { SEOHead } from '../components/molecules/SEOHead';
import { useLanguageFromUrl } from '../hooks/useLanguageFromUrl';
import { getLocalizedPath } from '../i18n';
import motorcycleImg from '../assets/services/motorcycle.png';
import minivanImg from '../assets/services/minivan.png';
import panelvanImg from '../assets/services/panelvan.png';
import kamyonetImg from '../assets/services/kamyonet.png';
import kamyonImg from '../assets/services/kamyon.png';

type VehicleKey = 'motorcycle' | 'minivan' | 'panelvan' | 'kamyonet' | 'kamyon';

type VehicleConfig = {
    id: VehicleKey;
    title: string;
    heading: string;
    description: string;
    image: string;
    background: string;
};

type VehicleStage = 'active' | 'next' | 'prev' | 'hidden';

function getStageForIndex(index: number, activeIndex: number, total: number): VehicleStage {
    if (index === activeIndex) return 'active';
    const nextIndex = (activeIndex + 1) % total;
    const prevIndex = (activeIndex - 1 + total) % total;
    if (index === nextIndex) return 'next';
    if (index === prevIndex) return 'prev';
    return 'hidden';
}

export default function Vehiclese() {
    const { t } = useTranslation();
    const currentLang = useLanguageFromUrl();
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const VEHICLES: VehicleConfig[] = [
        {
            id: 'motorcycle',
            title: t('services.motorcycle.title'),
            heading: t('home.vehicleShowcase.title'),
            description: t('services.motorcycle.description'),
            image: motorcycleImg,
            background: 'linear-gradient(90deg, #032c95 0%, #FFEDE0 55%, #FFF7F2 100%)',
        },
        {
            id: 'minivan',
            title: t('services.minivan.title'),
            heading: t('home.vehicleShowcase.title'),
            description: t('services.minivan.description'),
            image: minivanImg,
            background: 'linear-gradient(90deg, #032c95 0%, #FFE7D5 55%, #FFF6F1 100%)',
        },
        {
            id: 'panelvan',
            title: t('services.panelvan.title'),
            heading: t('home.vehicleShowcase.title'),
            description: t('services.panelvan.description'),
            image: panelvanImg,
            background: 'linear-gradient(90deg, #032c95 0%, #FFE4D2 55%, #FFF4EF 100%)',
        },
        {
            id: 'kamyonet',
            title: t('services.pickup.title'),
            heading: t('home.vehicleShowcase.title'),
            description: t('services.pickup.description'),
            image: kamyonetImg,
            background: 'linear-gradient(90deg, #032c95 0%, #FFE0CC 55%, #FFF2ED 100%)',
        },
        {
            id: 'kamyon',
            title: t('services.truck.title'),
            heading: t('home.vehicleShowcase.title'),
            description: t('services.truck.description'),
            image: kamyonImg,
            background: 'linear-gradient(90deg, #032c95 0%, #FFD9C4 55%, #FFF0E8 100%)',
        },
    ];

    const activeVehicle = VEHICLES[activeIndex];

    const handleNext = () => {
        setActiveIndex((prev: number) => (prev + 1) % VEHICLES.length);
    };

    // Mobile scroll handler with infinite loop
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let scrollTimeout: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            if (window.innerWidth >= 1024) return;

            clearTimeout(scrollTimeout);

            scrollTimeout = setTimeout(() => {
                const scrollLeft = container.scrollLeft;
                const containerWidth = container.clientWidth;
                const itemWidth = containerWidth * 0.85;
                const gap = containerWidth * 0.05;
                const totalItemWidth = itemWidth + gap;

                // Account for the duplicate first item at the beginning
                const calculatedIndex = Math.round(scrollLeft / totalItemWidth) - 1;

                // Infinite loop: if at the end clone, jump to beginning
                if (calculatedIndex >= VEHICLES.length) {
                    setActiveIndex(0);
                    // Jump to the real first item (skip the clone) without animation
                    requestAnimationFrame(() => {
                        container.scrollTo({
                            left: totalItemWidth,
                            behavior: 'auto'
                        });
                    });
                    return;
                }
                // Infinite loop: if at the beginning clone, jump to end
                else if (calculatedIndex < 0) {
                    setActiveIndex(VEHICLES.length - 1);
                    // Jump to the real last item without animation
                    requestAnimationFrame(() => {
                        container.scrollTo({
                            left: VEHICLES.length * totalItemWidth,
                            behavior: 'auto'
                        });
                    });
                    return;
                }

                // Update active index when scrolling normally
                if (calculatedIndex !== activeIndex && calculatedIndex >= 0 && calculatedIndex < VEHICLES.length) {
                    setActiveIndex(calculatedIndex);
                }
            }, 100);
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            container.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [activeIndex, VEHICLES.length]);

    // Scroll to active item on mobile when activeIndex changes (accounting for clone)
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || window.innerWidth >= 1024) return;

        // Don't auto-scroll if user is actively scrolling
        let isUserScrolling = false;
        const checkUserScroll = () => {
            isUserScrolling = true;
            setTimeout(() => {
                isUserScrolling = false;
            }, 200);
        };
        container.addEventListener('scroll', checkUserScroll, { passive: true });

        if (!isUserScrolling) {
            const containerWidth = container.clientWidth;
            const itemWidth = containerWidth * 0.85;
            const gap = containerWidth * 0.05;
            const totalItemWidth = itemWidth + gap;
            // +1 because we have a clone at the beginning
            const scrollPosition = (activeIndex + 1) * totalItemWidth;

            // Small delay to avoid conflict with user scroll
            const timeoutId = setTimeout(() => {
                if (!isUserScrolling) {
                    container.scrollTo({
                        left: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);

            return () => {
                clearTimeout(timeoutId);
                container.removeEventListener('scroll', checkUserScroll);
            };
        }

        return () => {
            container.removeEventListener('scroll', checkUserScroll);
        };
    }, [activeIndex]);

    return (
        <>
            <SEOHead
                title={`${activeVehicle.title} - Gitgönder`}
                description={activeVehicle.description}
                keywords={`${activeVehicle.title.toLowerCase()}, gitgönder ${activeVehicle.title.toLowerCase()}, lojistik, taşımacılık, ${activeVehicle.title.toLowerCase()} hizmeti`}
                canonical={getLocalizedPath('vehiclese', currentLang)}
                lang={currentLang}
            />
            <div className="w-full min-h-screen" style={{ background: activeVehicle.background }}>
                <div className="relative z-10">
                    <Header activeItem={getLocalizedPath('services', currentLang)} />

                    {/* Mobile View */}
                    <div className="lg:hidden w-full">
                        <div className="w-full px-4 pt-6 pb-4">
                            <div className="text-black">
                                <p
                                    className="text-[20px] font-bold mb-3 transition-opacity duration-300"
                                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                                >
                                    {activeVehicle.heading}
                                </p>
                                <h1
                                    className="text-[36px] font-bold leading-[1.1] mb-4 transition-opacity duration-300"
                                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                                >
                                    {activeVehicle.title}
                                </h1>
                                <p className="text-[16px] leading-relaxed whitespace-pre-line text-black/80 transition-opacity duration-300">
                                    {activeVehicle.description}
                                </p>
                            </div>
                        </div>

                        {/* Horizontal Scroll Container - Infinite Loop */}
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-8 -mx-4"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                scrollSnapType: 'x mandatory',
                                paddingLeft: 'calc(50% - 42.5vw)',
                                paddingRight: 'calc(50% - 42.5vw)',
                            }}
                        >
                            <style>{`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                            {/* Duplicate last item at the beginning for infinite scroll */}
                            <div
                                key={`${VEHICLES[VEHICLES.length - 1].id}-clone-start`}
                                className="flex-shrink-0 w-[85vw] snap-center flex items-center justify-center"
                            >
                                <img
                                    src={VEHICLES[VEHICLES.length - 1].image}
                                    alt={VEHICLES[VEHICLES.length - 1].title}
                                    className="w-full max-w-[400px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                                />
                            </div>
                            {VEHICLES.map((vehicle) => (
                                <div
                                    key={vehicle.id}
                                    className="flex-shrink-0 w-[85vw] snap-center flex items-center justify-center"
                                >
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.title}
                                        className="w-full max-w-[400px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                                    />
                                </div>
                            ))}
                            {/* Duplicate first item at the end for infinite scroll */}
                            <div
                                key={`${VEHICLES[0].id}-clone-end`}
                                className="flex-shrink-0 w-[85vw] snap-center flex items-center justify-center"
                            >
                                <img
                                    src={VEHICLES[0].image}
                                    alt={VEHICLES[0].title}
                                    className="w-full max-w-[400px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop View */}
                    <main className="hidden lg:block w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16 pt-10 pb-20 relative overflow-hidden" style={{ background: activeVehicle.background, minHeight: 'calc(100vh - 200px)' }}>
                        <section className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">
                            <div className="mt-10 lg:mt-24 max-w-xl text-white w-full lg:w-1/2">
                                <p
                                    className="text-[24px] sm:text-[26px] md:text-[28px] font-bold mb-4"
                                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                                >
                                    {activeVehicle.heading}
                                </p>
                                <h1
                                    className="text-[48px] sm:text-[64px] md:text-[72px] lg:text-[80px] font-bold leading-[1] mb-8 transition-opacity duration-500"
                                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                                >
                                    {activeVehicle.title}
                                </h1>
                                <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-relaxed whitespace-pre-line transition-opacity duration-500">
                                    {activeVehicle.description}
                                </p>
                            </div>

                            <div
                                className="relative w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-12 lg:mt-4 cursor-pointer pl-4 sm:pl-8 lg:pl-6 xl:pl-10 2xl:pl-12"
                                onClick={handleNext}
                            >
                                <div className="relative w-full max-w-[720px] h-[420px] lg:h-[520px]">
                                    {VEHICLES.map((vehicle, index) => {
                                        const stage = getStageForIndex(index, activeIndex, VEHICLES.length);

                                        let translateX = 0;
                                        let translateY = 0;
                                        let scale = 1;
                                        let opacity = 1;
                                        let blur = 0;
                                        let zIndex = 30;

                                        if (stage === 'active') {
                                            translateX = 0;
                                            translateY = 260;
                                            scale = 0.9;
                                            opacity = 1;
                                            blur = 0;
                                            zIndex = 40;
                                        } else if (stage === 'next') {
                                            translateX = 548.5;
                                            translateY = 1.5;
                                            scale = 200 / 719;
                                            opacity = 1;
                                            blur = 5;
                                            zIndex = 25;
                                        } else if (stage === 'prev') {
                                            translateX = 534.5;
                                            translateY = 480;
                                            scale = 200 / 719;
                                            opacity = 1;
                                            blur = 5;
                                            zIndex = 15;
                                        } else {
                                            translateX = 534.5;
                                            translateY = 480;
                                            scale = 0.2;
                                            opacity = 0;
                                            blur = 4;
                                            zIndex = 5;
                                        }

                                        return (
                                            <img
                                                key={vehicle.id}
                                                src={vehicle.image}
                                                alt={vehicle.title}
                                                className="absolute left-1/2 top-1/2 max-w-[520px] w-[70vw] sm:w-[420px] lg:w-[520px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out"
                                                style={{
                                                    transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                                                    opacity,
                                                    filter: `blur(${blur}px)`,
                                                    zIndex,
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    </main>

                    <div className="mt-12 lg:mt-24">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
