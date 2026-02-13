import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from '../atoms/Logo';
import { Navigation } from '../molecules/Navigation';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';
import { getLocalizedPath, languages, routeTranslations } from '../../i18n';
import { useNavigate, useLocation } from 'react-router-dom';
import menuIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/close.svg';

interface NavigationItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: {
    src?: string;
    text?: string;
    alt?: string;
  };
  navigationItems?: NavigationItem[];
  activeItem?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  navigationItems = [],
  activeItem,
}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // Dinamik navigation items oluştur
  const currentLang = i18n.language as 'tr' | 'en' | 'de';

  // HashRouter için path alma yardımcı fonksiyonu
  const getHashPath = (): string => {
    const hash = location.hash;
    if (!hash || hash === '#') return '/';
    return hash.replace('#', '') || '/';
  };

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

  // Simplified nav items - only Home, About, Services, Contact
  const BASE_NAV_ITEMS: NavigationItem[] = [
    { label: t('nav.home'), href: getLocalizedPath('home', currentLang) },
    { label: t('nav.about'), href: getLocalizedPath('about', currentLang) },
    { label: t('nav.services'), href: getLocalizedPath('services', currentLang) },
    { label: t('nav.contact'), href: getLocalizedPath('contact', currentLang) },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const resolvedActiveItem =
    activeItem ?? (typeof window !== 'undefined' ? getHashPath() : undefined);

  const defaultNavItems: NavigationItem[] =
    navigationItems.length > 0 ? navigationItems : BASE_NAV_ITEMS;

  const headerBg = isScrolled
    ? 'bg-white text-gray-900 lg:bg-white lg:text-gray-900'
    : 'bg-[#032c95] text-white lg:bg-white lg:text-gray-900';

  const iconColor = isScrolled
    ? 'text-[#032c95] hover:text-[#032c95] hover:bg-primary-50 focus:ring-primary-500'
    : 'text-white hover:text-white hover:bg-white/10 focus:ring-white/50';

  // SVG icon filter for blue color (#032c95)
  const iconFilter = isScrolled
    ? { filter: 'brightness(0) saturate(100%) invert(11%) sepia(100%) saturate(10000%) hue-rotate(196deg) brightness(1.2)' }
    : { filter: 'brightness(0) invert(1)' };

  const barVisible = !isScrolled;
  const logoWrapper = isScrolled ? 'w-[140px] lg:w-auto' : 'w-[150px] lg:w-auto';


  return (
    <>
      <header className={`${headerBg} sticky top-0 z-50 relative`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24 lg:h-28">
            <Link
              to={getLocalizedPath('home', currentLang)}
              className={`flex-shrink-0 ${logoWrapper} order-2 lg:order-1 pl-4 lg:pl-0 cursor-pointer flex items-center gap-2`}
            >
              <Logo
                src={logo?.src}
                text={logo?.text}
                alt={logo?.alt}
                className={`transition-all duration-300`}
              />
              <span className={`inline sm:hidden text-[12px] sm:text-[14px] lg:text-[16px] font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: 'Roboto, sans-serif' }}>
                Git Gönder
              </span>
            </Link>

            <div className="hidden lg:flex lg:items-center gap-8 lg:order-2">
              <Navigation
                items={defaultNavItems}
                activeItem={resolvedActiveItem}
              />

              <LanguageSwitcher />

              <div className="relative group">
                <Button
                  variant="primary"
                  size="md"
                  className="w-[188px] h-[42px] !rounded-[5px] flex items-center justify-center gap-2"
                >
                  {t('nav.login')}
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>

                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute right-0 mt-2 w-[220px] bg-white rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50">
                  <div className="py-2">
                    <a
                      href="https://kurumsal.gitgonder.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#032c95] to-[#004899] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3A3A3A]" style={{ fontFamily: 'Roboto, sans-serif' }}>{t('nav.corporateLogin')}</p>
                        <p className="text-[12px] text-gray-500">{t('nav.corporateLoginDesc')}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden order-1 lg:order-2 flex items-center gap-3">
              <button
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${iconColor}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              >
                <Icon
                  src={isMobileMenuOpen ? closeIcon : menuIcon}
                  alt={isMobileMenuOpen ? t('nav.closeIcon') : t('nav.menuIcon')}
                  className="h-6 w-6"
                  style={iconFilter}
                />
              </button>
            </div>
          </div>
        </div>
        {barVisible && (
          <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-[#032c95] rounded-bl-[20px] rounded-br-[20px] h-[85px] -z-0" />
        )}
      </header>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-[320px] bg-white shadow-[20px_0_50px_rgba(0,0,0,0.1)] z-50 lg:hidden overflow-y-auto transition-transform duration-300 transform">
            {/* Background Gradient Flow */}
            <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-[#032c95]/15 via-[#032c95]/05 to-transparent pointer-events-none" />

            <div className="flex flex-col h-full relative z-10">
              {/* Close Button Area */}
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-all active:scale-95"
                >
                  <Icon src={closeIcon} alt="Close" className="w-5 h-5 text-gray-900" />
                </button>
              </div>

              <div className="flex-1 px-6 pt-2 pb-8 space-y-8">
                {/* Menü Öğeleri */}
                <nav className="flex flex-col gap-2">
                  {defaultNavItems.map((item) => {
                    const isActive = resolvedActiveItem === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`
                          flex items-center px-4 py-3.5 rounded-xl text-[18px] font-bold transition-all duration-200
                          ${isActive
                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-200'
                            : 'text-[#3A3A3A] hover:bg-gray-50 hover:pl-6'
                          }
                        `}
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="p-6 border-t border-gray-50 space-y-4 bg-gray-50/50">


                <button
                  type="button"
                  onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
                  className="w-full h-14 bg-gradient-to-r from-[#032c95] to-[#004899] text-white rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-primary-200/50 hover:shadow-xl hover:shadow-primary-300/50 active:scale-[0.97] transition-all duration-200"
                >
                  <span className="text-[18px] font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {t('nav.login')}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isLoginMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isLoginMenuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="grid gap-3">
                    <a 
                      href="https://kurumsal.gitgonder.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-primary-200 hover:shadow-md hover:bg-primary-50/30 transition-all duration-200"
                    >
                      <div className="w-11 h-11 bg-gradient-to-br from-[#032c95] to-[#004899] rounded-full flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[15px] font-bold text-gray-900">{t('nav.corporateLogin')}</p>
                        <p className="text-[12px] text-gray-500 mt-0.5">{t('nav.corporateLoginDesc')}</p>
                      </div>
                      <svg className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Dil Değişimi - En Altta */}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[18px] font-bold text-[#3A3A3A] bg-gray-50 hover:bg-gray-100 active:scale-[0.98] transition-all duration-200"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-5 overflow-hidden rounded-sm shadow-sm flex-shrink-0">
                        <img
                          src={languages[currentLang]?.flag}
                          alt={languages[currentLang]?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span>{languages[currentLang]?.name}</span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isLanguageMenuOpen ? 'max-h-[300px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <div className="space-y-2">
                      {Object.entries(languages).map(([code, { name, flag }]) => {
                        const isCurrentLang = currentLang === code;
                        return (
                          <button
                            key={code}
                            onClick={() => {
                              const currentRoute = getCurrentRoute();
                              if (currentRoute && routeTranslations[currentRoute]) {
                                const newPath = routeTranslations[currentRoute][code];
                                i18n.changeLanguage(code);
                                navigate(newPath ? `/${newPath}` : '/', { replace: true });
                              } else {
                                i18n.changeLanguage(code);
                              }
                              setIsMobileMenuOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                              isCurrentLang
                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-200'
                                : 'bg-gray-50 text-[#3A3A3A] hover:bg-gray-100 active:scale-[0.98]'
                            }`}
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                          >
                            <div className="w-7 h-5 overflow-hidden rounded-sm shadow-sm flex-shrink-0">
                              <img src={flag} alt={name} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[16px] font-bold flex-1">{name}</span>
                            {isCurrentLang && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

