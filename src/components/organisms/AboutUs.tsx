import { useTranslation } from 'react-i18next';
import aboutHeroBg from '../../assets/about/gitgonder-about.jpg';

export function AboutUs() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] xl:min-h-[822px] overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-[#032c95]">
                <img
                    src={aboutHeroBg}
                    alt={t('about.hero.imageAlt')}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 xl:px-8 py-4 sm:py-8 md:py-12 xl:py-20">
                <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] xl:min-h-[822px]">
                    {/* Desktop Content */}
                    <div className="hidden xl:block absolute inset-0 px-8 py-20">
                        <div className="relative w-full h-full flex flex-col justify-center max-w-[60%]">
                            <div
                                className="text-white text-[65px] font-bold leading-tight whitespace-pre-wrap mb-8"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <p className="mb-0">{t('about.hero.title')}</p>
                            </div>

                            <p
                                className="text-white text-[32px] font-semibold leading-[1.15] whitespace-pre-wrap mb-12 max-w-4xl"
                                style={{
                                    fontFamily: 'Urbanist, sans-serif',
                                    fontWeight: 600,
                                }}
                            >
                                {t('about.hero.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

