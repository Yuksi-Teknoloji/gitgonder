import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoImage from '../../assets/gıtgonder.png'
import { FooterLink } from '../molecules/FooterLink'
import { getLocalizedPath } from '../../i18n'

export function Footer() {
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language as 'tr' | 'en' | 'de'

    // Simplified nav items - only Home, About, Services, Contact
    const navItems = [
        { href: getLocalizedPath('home', currentLang), label: t('nav.home') },
        { href: getLocalizedPath('about', currentLang), label: t('nav.about') },
        { href: getLocalizedPath('services', currentLang), label: t('nav.services') },
        { href: getLocalizedPath('contact', currentLang), label: t('nav.contact') },
    ]

    return (
        <footer className="w-full bg-[#032c95] text-white">
            <div className="w-full max-w-[1552px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-12 xl:gap-16">
                    {/* Left Column - Logo */}
                    <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5">
                        <Link to={getLocalizedPath('home', currentLang)} className="cursor-pointer">
                            <img
                                src={logoImage}
                                alt="Git Gönder Logo"
                                className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-auto object-contain transition-transform hover:scale-105 duration-300"
                            />
                        </Link>
                        <p className="text-sm sm:text-base lg:text-base text-white/90 text-center lg:text-left max-w-xs leading-relaxed" style={{ fontFamily: 'Roboto' }}>
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Middle Column - Quick Links */}
                    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-5">
                        <h3
                            className="text-xl sm:text-2xl lg:text-2xl font-bold mb-2 sm:mb-3 text-center lg:text-left border-b border-white/20 pb-3 sm:pb-4"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            {t('footer.quickLinks')}
                        </h3>
                        <ul className="flex flex-col gap-1 sm:gap-2 lg:gap-3">
                            {navItems.map((item) => (
                                <li key={item.href} className="w-full">
                                    <FooterLink href={item.href}>
                                        {item.label}
                                    </FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Contact */}
                    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-5">
                        <h3
                            className="text-xl sm:text-2xl lg:text-2xl font-bold mb-2 sm:mb-3 text-center lg:text-left border-b border-white/20 pb-3 sm:pb-4"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            {t('footer.contact')}
                        </h3>
                        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-4">
                            {/* Email */}
                            <a
                                href="mailto:info@gitgönder.tr"
                                className="flex items-center justify-center lg:items-start lg:justify-start gap-3 hover:opacity-90 active:opacity-70 transition-all group py-2 sm:py-0 -mx-2 px-2 sm:mx-0 sm:px-0 rounded-md sm:rounded-none touch-manipulation"
                            >
                                <svg
                                    className="w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0 group-hover:scale-110 transition-transform pointer-events-none"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm sm:text-base lg:text-base font-medium break-all text-center lg:text-left" style={{ fontFamily: 'Roboto' }}>
                                    info@gitgönder.tr
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-7 lg:pt-8 border-t border-white/20">
                    <p className="text-center text-xs sm:text-sm lg:text-base text-white/80 px-2" style={{ fontFamily: 'Roboto' }}>
                        © {new Date().getFullYear()} Git Gönder. {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    )
}

