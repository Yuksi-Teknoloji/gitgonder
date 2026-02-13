import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { languages, routeTranslations } from '../../i18n';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = i18n.language as keyof typeof languages;
    const currentLanguage = languages[currentLang] || languages.tr;

    // HashRouter için path alma yardımcı fonksiyonu
    const getHashPath = (): string => {
        const hash = location.hash;
        if (!hash || hash === '#') return '/';
        return hash.replace('#', '') || '/';
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getCurrentRoute = (): string | null => {
        const path = getHashPath().slice(1); // Remove leading slash

        // Check for home page
        if (!path) {
            return 'home';
        }

        for (const [route, translations] of Object.entries(routeTranslations)) {
            for (const translatedPath of Object.values(translations)) {
                if (translatedPath === path) {
                    return route;
                }
            }
        }
        return null;
    };

    const handleLanguageChange = (lang: string) => {
        const currentRoute = getCurrentRoute();

        if (currentRoute && routeTranslations[currentRoute]) {
            const newPath = routeTranslations[currentRoute][lang];
            i18n.changeLanguage(lang);
            // For home page, newPath is empty string
            navigate(newPath ? `/${newPath}` : '/', { replace: true });
        } else {
            i18n.changeLanguage(lang);
        }

        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary-100"
                aria-label="Select language"
            >
                <div className="w-6 h-4 overflow-hidden rounded-sm shadow-sm flex-shrink-0">
                    <img
                        src={currentLanguage.flag}
                        alt={currentLanguage.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="text-sm font-semibold text-[#3A3A3A] hidden sm:inline">
                    {currentLang.toUpperCase()}
                </span>
                <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute left-0 lg:left-auto lg:right-0 mt-3 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">

                    {Object.entries(languages).map(([code, { name, flag }]) => (
                        <button
                            key={code}
                            onClick={() => handleLanguageChange(code)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${currentLang === code ? 'bg-primary-50 text-[#032c95]' : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <div className="w-6 h-4 overflow-hidden rounded-sm shadow-sm flex-shrink-0">
                                <img src={flag} alt={name} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-medium">{name}</span>
                            {currentLang === code && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#032c95]" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
