import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroBg from '../../assets/hero/hero-bg.png';
import kanguru1 from '../../assets/hero/kanguru1.png';
import kanguru2 from '../../assets/hero/kanguru2.png';
import kanguru3 from '../../assets/hero/kanguru3.png';
import kanguruGif from '../../assets/hero/kanguru.gif';
import { HeroOverlay } from '../../components/molecules/HeroOverlay';
import { Button } from '../atoms/Button';
import { getLocalizedPath } from '../../i18n';

const kangaroos = [kanguru1, kanguru2, kanguru3];

export default function Hero() {
    const { t, i18n } = useTranslation();
    const [currentKangaroo, setCurrentKangaroo] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const currentLang = i18n.language as 'tr' | 'en' | 'de';

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKangaroo((prev) => (prev + 1) % kangaroos.length);
        }, 3000); // Slower animation for the slide effect (3s)
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full bg-white overflow-visible lg:overflow-hidden font-roboto selection:bg-orange-200">
            {/* Mobile Hero - background image */}
            <div className="relative w-full lg:hidden">
                <img
                    src={heroBg}
                    className="w-full h-[420px] object-cover"
                    alt="Yüksi lojistik arka plan"
                />
                <div className="absolute bottom-14 left-5 flex flex-col items-start gap-0 z-30">
                    <img
                        src={kanguruGif}
                        alt="Yüksi kanguru"
                        className="w-[130px] h-auto object-contain"
                    />
                    <div className="relative -mt-2" ref={dropdownRef}>
                        <Button
                            variant="primary"
                            size="md"
                            className="w-[140px] h-[42px] !rounded-[999px] text-[14px] font-medium flex items-center justify-center gap-1"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span>{t('nav.joinUs')}</span>
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Button>

                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2 z-[100]">
                                <Link
                                    to={getLocalizedPath('carrier', currentLang)}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <div className="w-9 h-9 rounded-full bg-orange-100 text-[#FF5B04] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l2-5h4l2 5m-2-5l1-3h4l2 6m-5 4a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-[14px] font-semibold text-gray-800 whitespace-nowrap">{t('nav.driverApplication')}</span>
                                </Link>
                                <Link
                                    to={getLocalizedPath('dealer', currentLang)}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <div className="w-9 h-9 rounded-full bg-gray-100 text-[#FF5B04] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7v13h14V7M9 7V5a3 3 0 016 0v2" />
                                        </svg>
                                    </div>
                                    <span className="text-[14px] font-semibold text-gray-800 whitespace-nowrap">{t('nav.franchiseApplication')}</span>
                                </Link>
                                <Link
                                    to={getLocalizedPath('corporate', currentLang)}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <div className="w-9 h-9 rounded-full bg-gray-100 text-[#FF5B04] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 21V7a2 2 0 012-2h3m5 0h3a2 2 0 012 2v14M9 5v16M15 5v16" />
                                        </svg>
                                    </div>
                                    <span className="text-[14px] font-semibold text-gray-800 whitespace-nowrap">{t('nav.corporateMembership')}</span>
                                </Link>
                            </div>
                        )}
                    </div>
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
