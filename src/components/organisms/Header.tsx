import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from '../atoms/Logo';
import { Navigation } from '../molecules/Navigation';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';
import { getLocalizedPath } from '../../i18n';
import menuIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/close.svg';
import kanguruGif from '../../assets/hero/kanguru.gif';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isApplicationMenuOpen, setIsApplicationMenuOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

  // Dinamik navigation items oluştur
  const currentLang = i18n.language as 'tr' | 'en' | 'de';
  const BASE_NAV_ITEMS: NavigationItem[] = [
    { label: t('nav.home'), href: getLocalizedPath('home', currentLang) },
    { label: t('nav.about'), href: getLocalizedPath('about', currentLang) },
    { label: t('nav.services'), href: getLocalizedPath('services', currentLang) },
    { label: t('nav.help'), href: getLocalizedPath('help', currentLang) },
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
    activeItem ?? (typeof window !== 'undefined' ? window.location.pathname : undefined);

  const defaultNavItems: NavigationItem[] =
    navigationItems.length > 0 ? navigationItems : BASE_NAV_ITEMS;

  const headerBg = isScrolled
    ? 'bg-white text-gray-900 lg:bg-white lg:text-gray-900'
    : 'bg-[#FF5B04] text-white lg:bg-white lg:text-gray-900';

  const iconColor = isScrolled
    ? 'text-[#FF5B04] hover:text-[#FF5B04] hover:bg-orange-50 focus:ring-orange-500'
    : 'text-white hover:text-white hover:bg-white/10 focus:ring-white/50';

  // SVG icon filter for orange color (#FF5B04)
  const iconFilter = isScrolled
    ? { filter: 'brightness(0) saturate(100%) invert(48%) sepia(100%) saturate(10000%) hue-rotate(0deg) brightness(1.2)' }
    : { filter: 'brightness(0) invert(1)' };

  const barVisible = !isScrolled;
  const logoWrapper = isScrolled ? 'w-[140px] lg:w-auto' : 'w-[150px] lg:w-auto';
  const logoFilter = !isScrolled
    ? 'brightness-0 invert lg:filter-none lg:brightness-100 lg:invert-0'
    : 'filter-none';

  return (
    <>
      <header className={`${headerBg} sticky top-0 z-50 relative`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24 lg:h-28">
            <Link
              to={getLocalizedPath('home', currentLang)}
              className={`flex-shrink-0 ${logoWrapper} order-2 lg:order-1 pl-4 lg:pl-0 cursor-pointer`}
            >
              <Logo
                src={logo?.src}
                text={logo?.text}
                alt={logo?.alt}
                className={`transition-all duration-300 ${logoFilter}`}
              />
            </Link>

            <div className="hidden lg:flex lg:items-center gap-8 lg:order-2">
              <Navigation
                items={defaultNavItems}
                activeItem={resolvedActiveItem}
              />

              <div
                className="relative"
                onMouseEnter={() => setIsMobileMenuOpen(false)}
              >
                <div className="group relative">
                  <button
                    type="button"
                    className="text-[16px] font-medium text-[#3A3A3A] px-4 py-2 rounded-[5px] hover:bg-gray-100 transition-colors duration-200"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                  >
                    {t('nav.apply')}
                  </button>

                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute right-0 mt-2 w-[210px] rounded-[12px] p-[2px] space-y-[6px] z-50">
                    <div className="relative group/driver">
                      <Link to={getLocalizedPath('carrier', currentLang)}>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full h-[34px] !rounded-[8px] !bg-[#F4F4F4] !text-[#FF5B04] text-[11px] leading-[13px] flex items-center justify-start px-3"
                        >
                          {t('nav.driverApplication')}
                        </Button>
                      </Link>
                      <div className="invisible opacity-0 group-hover/driver:visible group-hover/driver:opacity-100 transition-opacity duration-200 absolute left-full top-0 ml-2 z-50">
                        <div className="flex flex-col gap-[6px]">
                          <Button
                            variant="primary"
                            size="sm"
                            className="w-[180px] h-[42px] !rounded-[24px] !bg-[#FF5B04] !text-white text-[14px] font-medium flex items-center justify-center"
                          >
                            {t('nav.logisticsCourier')}
                          </Button>
                          <Button
                            variant="primary"
                            size="sm"
                            className="w-[180px] h-[42px] !rounded-[24px] !bg-[#FF5B04] !text-white text-[14px] font-medium flex items-center justify-center"
                          >
                            {t('nav.restaurantCourier')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                      href="https://kurumsal.yuksi.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF5B04] to-[#FF8A50] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3A3A3A]" style={{ fontFamily: 'Roboto, sans-serif' }}>{t('nav.corporateLogin')}</p>
                        <p className="text-[12px] text-gray-500">{t('nav.corporateLoginDesc')}</p>
                      </div>
                    </a>
                    <a
                      href="https://bayi.yuksi.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF5B04] to-[#FF8A50] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3A3A3A]" style={{ fontFamily: 'Roboto, sans-serif' }}>{t('nav.dealerLogin')}</p>
                        <p className="text-[12px] text-gray-500">{t('nav.dealerLoginDesc')}</p>
                      </div>
                    </a>
                    <a
                      href="https://restoran.yuksi.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF5B04] to-[#FF8A50] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#3A3A3A]" style={{ fontFamily: 'Roboto, sans-serif' }}>{t('nav.restaurantLogin')}</p>
                        <p className="text-[12px] text-gray-500">{t('nav.restaurantLoginDesc')}</p>
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
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        {barVisible && (
          <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-[#FF5B04] rounded-bl-[20px] rounded-br-[20px] h-[85px] -z-0" />
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
            <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-[#FF5B04]/15 via-[#FF5B04]/05 to-transparent pointer-events-none" />

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
                {/* Kanguru ve Mesaj Balonu */}
                <div className="relative flex items-center gap-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-orange-100 shadow-md flex items-center justify-center overflow-hidden">
                      <img
                        src={kanguruGif}
                        alt="Yüksi kanguru"
                        className="w-[120%] h-[120%] object-contain mt-2"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>

                  <div className="relative flex-1">
                    <div className="bg-white border border-gray-100 text-[#3A3A3A] px-4 py-3 rounded-2xl rounded-tl-none shadow-sm relative italic">
                      <p className="text-[13px] font-bold leading-tight" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        {t('nav.helpMessage')}
                      </p>
                      {/* Bubble Tail */}
                      <div className="absolute top-0 -left-2 w-2 h-2 bg-white border-l border-t border-gray-100 -rotate-45"></div>
                    </div>
                  </div>
                </div>

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
                            ? 'bg-orange-500 text-white shadow-lg shadow-orange-200'
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

                {/* Başvur Dropdown */}
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setIsApplicationMenuOpen(!isApplicationMenuOpen)}
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[18px] font-bold text-[#3A3A3A] bg-gray-50 transition-colors"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    <span>{t('nav.apply')}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isApplicationMenuOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isApplicationMenuOpen ? 'max-h-[400px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <div className="grid gap-3 pl-2">
                      <Link to={getLocalizedPath('carrier', currentLang)} onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                          <p className="text-[14px] font-bold text-gray-900">{t('nav.driverApplication')}</p>
                          <div className="flex gap-2 mt-2">
                            <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold uppercase">{t('nav.logisticsCourier')}</span>
                            <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold uppercase">{t('nav.restaurantCourier')}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-50 space-y-4 bg-gray-50/50">


                <button
                  type="button"
                  onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
                  className="w-full h-14 bg-[#FF5B04] text-white rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-orange-200 active:scale-95 transition-all"
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

                <div className={`overflow-hidden transition-all duration-300 ${isLoginMenuOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="grid gap-2">
                    <a href="https://kurumsal.yuksi.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{t('nav.corporateLogin')}</p>
                        <p className="text-[11px] text-gray-500 truncate">{t('nav.corporateLoginDesc')}</p>
                      </div>
                    </a>
                    <a href="https://bayi.yuksi.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{t('nav.dealerLogin')}</p>
                        <p className="text-[11px] text-gray-500 truncate">{t('nav.dealerLoginDesc')}</p>
                      </div>
                    </a>
                    <a href="https://restoran.yuksi.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{t('nav.restaurantLogin')}</p>
                        <p className="text-[11px] text-gray-500 truncate">{t('nav.restaurantLoginDesc')}</p>
                      </div>
                    </a>
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
