import { useTranslation } from 'react-i18next';
import { ImageGallery } from '../molecules/ImageGallery';

export function AboutContent() {
    const { t } = useTranslation();
    const aboutImages: string[] | undefined = undefined;

    return (
        <div className="w-full bg-white">
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 xl:hidden">
                <div
                    className="text-[#032c95] text-[28px] sm:text-[36px] md:text-[45px] xl:text-[65px] font-bold leading-tight sm:leading-normal whitespace-pre-wrap mb-4 sm:mb-6 lg:mb-8"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    <p className="mb-0">{t('about.hero.title')}</p>
                </div>

                <p
                    className="text-[#333] text-sm sm:text-base md:text-lg xl:text-[32px] font-semibold leading-relaxed sm:leading-[1.15] whitespace-pre-wrap mb-6 sm:mb-8 lg:mb-12"
                    style={{
                        fontFamily: 'Urbanist, sans-serif',
                        fontWeight: 600,
                    }}
                >
                    {t('about.hero.description')}
                </p>

                <h2
                    className="text-[32px] sm:text-[40px] lg:text-[65px] font-bold text-[#032c95] mb-4 sm:mb-6 lg:mb-8"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    {t('about.aboutUs.title')}
                </h2>
                <p
                    className="text-sm sm:text-base lg:text-[22px] font-medium text-[#333] leading-relaxed mb-6 sm:mb-8 lg:mb-12"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    {t('about.aboutUs.description')}
                </p>

                <ImageGallery images={aboutImages} />
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
                <h2
                    className="text-[32px] sm:text-[40px] lg:text-[50px] font-bold text-[#032c95] mb-6 sm:mb-8 lg:mb-12"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    {t('about.serviceFeatures.title')}
                </h2>

                <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-6 sm:mb-8 lg:mb-12">
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">{t('about.serviceFeatures.smartMatching.title')}</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` ${t('about.serviceFeatures.smartMatching.description')}`}</span>
                        </p>
                    </div>

                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">{t('about.serviceFeatures.realTimeTracking.title')}</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` ${t('about.serviceFeatures.realTimeTracking.description')}`}</span>
                        </p>
                    </div>

                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">{t('about.serviceFeatures.certifiedNetwork.title')}</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` ${t('about.serviceFeatures.certifiedNetwork.description')}`}</span>
                        </p>
                    </div>

                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">{t('about.serviceFeatures.flexiblePayment.title')}</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` ${t('about.serviceFeatures.flexiblePayment.description')}`}</span>
                        </p>
                    </div>
                </div>

                <ImageGallery images={undefined} />
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
                <h2
                    className="text-[32px] sm:text-[40px] lg:text-[50px] font-bold text-[#032c95] mb-6 sm:mb-8 lg:mb-12"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    {t('about.customerAdvantages.title')}
                </h2>

                <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-6 sm:mb-8 lg:mb-12">
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">{t('about.customerAdvantages.timeCost.title')}</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` ${t('about.customerAdvantages.timeCost.description')}`}</span>
                        </p>
                    </div>

                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">{t('about.customerAdvantages.transparency.title')}</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` ${t('about.customerAdvantages.transparency.description')}`}</span>
                        </p>
                    </div>

                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">{t('about.customerAdvantages.support.title')}</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` ${t('about.customerAdvantages.support.description')}`}</span>
                        </p>
                    </div>
                </div>

                <ImageGallery images={undefined} />
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
                <h2
                    className="text-[32px] sm:text-[40px] lg:text-[50px] font-bold text-[#032c95] mb-6 sm:mb-8 lg:mb-12"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    {t('about.technology.title')}
                </h2>

                <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-6 sm:mb-8 lg:mb-12">
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">{t('about.technology.locationBased.title')}</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` ${t('about.technology.locationBased.description')}`}</span>
                        </p>
                    </div>

                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">{t('about.technology.aiPlanning.title')}</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` ${t('about.technology.aiPlanning.description')}`}</span>
                        </p>
                    </div>

                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">{t('about.technology.cloudBased.title')}</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` ${t('about.technology.cloudBased.description')}`}</span>
                        </p>
                    </div>
                </div>

                <ImageGallery images={undefined} />
            </section>
        </div>
    )
}
