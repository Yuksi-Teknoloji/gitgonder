import React, { useEffect, useState } from 'react';
import { Logo } from '../atoms/Logo';
import { Navigation } from '../molecules/Navigation';
import { Button } from '../atoms/Button';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    if (typeof window !== 'undefined') {
      onScroll();
      window.addEventListener('scroll', onScroll);
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const resolvedActiveItem =
    activeItem ?? (typeof window !== 'undefined' ? window.location.pathname : undefined);

  const defaultNavItems: NavigationItem[] = navigationItems.length > 0
    ? navigationItems
    : [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Hizmetler', href: '/services' },
      { label: 'Yardım', href: '/help' },
      { label: 'İletişim', href: '/contact' },
    ];

  const headerBg = isScrolled
    ? 'bg-white text-gray-900 lg:bg-white lg:text-gray-900'
    : 'bg-[#FF5B04] text-white lg:bg-white lg:text-gray-900';
  const iconColor = isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:ring-orange-500' : 'text-white hover:text-white hover:bg-white/10 focus:ring-white/50';
  const iconStroke = isScrolled ? 'currentColor' : 'white';
  const barVisible = !isScrolled;
  const logoWrapper = isScrolled ? 'w-[140px] lg:w-auto' : 'w-[150px] lg:w-auto';
  const logoFilter =
    !isScrolled
      ? 'brightness-0 invert lg:filter-none lg:brightness-100 lg:invert-0'
      : 'filter-none';

  return (
    <>
      <header className={`${headerBg} sticky top-0 z-50 relative`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24 lg:h-28">
            <div
              className={`flex-shrink-0 ${logoWrapper} order-2 lg:order-1 ${
                // Mobilde logo daha sağda: pl-4 ekliyoruz, lg'de sıfırlıyoruz
                'pl-4 lg:pl-0'
              }`}
            >
              <Logo
                src={logo?.src}
                text={logo?.text}
                alt={logo?.alt}
                className={`transition-all duration-300 ${logoFilter}`}
              />
            </div>

            <div className="hidden lg:flex lg:items-center gap-8 lg:order-2">
              <Navigation
                items={defaultNavItems}
                activeItem={resolvedActiveItem}
              />

              <Button
                variant="primary"
                size="md"
                className="w-[188px] h-[42px] !rounded-[5px] flex items-center justify-center"
              >
                Giriş Yap
              </Button>
            </div>

            <div className="lg:hidden order-1 lg:order-2">
              <button
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${iconColor}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke={iconStroke}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
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
            className="fixed inset-0 bg-[rgba(171,171,171,0.6)] backdrop-blur-[3px] z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-[224px] bg-white rounded-tr-[10px] shadow-[12px_4px_9.9px_-2px_rgba(0,0,0,0.25)] z-50 lg:hidden overflow-y-auto">
            <div className="flex flex-col pt-[84px] pl-[19px] pb-8">
              {defaultNavItems.map((item, index) => {
                const isActive = resolvedActiveItem === item.href;
                const spacing = index === 0 ? 'mb-[32px]' : 'mb-[32px]';
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`
                      text-[20px] font-medium transition-colors duration-200 ${spacing}
                      ${isActive
                        ? 'text-[#FF5B04]'
                        : 'text-[#3A3A3A]'
                      }
                    `}
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="mt-[41px]">
                <Button
                  variant="primary"
                  size="md"
                  className="w-[142px] h-[42px] !rounded-[5px] flex items-center justify-center"
                >
                  <span className="text-[20px] font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                    Giriş Yap
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
