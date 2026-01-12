import React, { useState } from 'react';
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
  const resolvedActiveItem =
    activeItem ?? (typeof window !== 'undefined' ? window.location.pathname : undefined);

  const defaultNavItems: NavigationItem[] = navigationItems.length > 0
    ? navigationItems
    : [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Hizmetler', href: '/services' },
      { label: 'İletişim', href: '/contact' },
      { label: 'Başvur', href: '/apply' },
    ];

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo
              src={logo?.src}
              text={logo?.text}
              alt={logo?.alt}
            />
          </div>

          {/* Desktop Navigation & Butonlar */}
          <div className="hidden lg:flex lg:items-center gap-8">
            {/* Navigation */}
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

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {defaultNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    px-3 py-2 text-base font-medium transition-colors duration-200
                    ${resolvedActiveItem === item.href
                      ? 'text-orange'
                      : 'text-gray hover:text-orange'
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button variant="primary" size="md" className="w-full">
                  Giriş Yap
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
