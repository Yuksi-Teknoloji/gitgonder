import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import contactBg from '../../assets/contact/contact-mask.png'
import contactPerson from '../../assets/contact/contact-person.png'
import arrowRightIcon from '../../assets/icons/arrow-right.svg'
import { Button } from '../atoms/Button'
import { getLocalizedPath } from '../../i18n'

export function ContactCTA() {
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language as 'tr' | 'en' | 'de'

    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="relative w-full min-h-[420px] sm:min-h-[440px] md:h-[480px] lg:h-[520px]">
                {/* Background */}
                <img
                    src={contactBg}
                    alt={t('home.contactCta.title')}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full w-full">
                    <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-0 flex items-start md:items-center">
                        <div className="max-w-[600px] flex flex-col gap-4 sm:gap-5 lg:gap-6">
                            <p
                                className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] font-medium text-[#032c95]"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                {t('home.contactCta.subtitle')}
                            </p>

                            <h2
                                className="text-[30px] sm:text-[34px] md:text-[40px] lg:text-[50px] font-medium text-white leading-tight"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                {t('home.contactCta.title')}
                            </h2>

                            <p
                                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-white leading-relaxed max-w-[591px]"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                {t('home.contactCta.description')}
                            </p>

                            <Link to={getLocalizedPath('contact', currentLang)} className="mt-3 sm:mt-4 lg:mt-6 self-start">
                                <Button
                                    variant="primary"
                                    size="md"
                                    className="inline-flex items-center gap-3 !bg-[#032c95] hover:!bg-[#E55103] text-white font-medium text-[15px] sm:text-[16px] lg:text-[20px] px-5 sm:px-7 lg:px-[27px] py-2.5 sm:py-3 lg:py-[14px] !rounded-[26px] transition-colors"
                                >
                                    <span>{t('home.contactCta.button')}</span>
                                    <img
                                        src={arrowRightIcon}
                                        alt=""
                                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[23px] lg:h-[23px]"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Person image on the right */}
                <div className="pointer-events-none absolute bottom-0 right-[-10px] sm:right-0 h-[60%] sm:h-[72%] md:h-[85%] lg:h-[95%]">
                    <img
                        src={contactPerson}
                        alt="Gitgönder taşıyıcı"
                        className="h-full w-auto object-contain"
                    />
                </div>
            </div>
        </section>
    )
}
