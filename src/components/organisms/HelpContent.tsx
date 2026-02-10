import { useTranslation } from 'react-i18next';
import phoneKangaroo from '../../assets/help/phone-kangaroo.png';
import logoImage from '../../assets/gıtgonder.png';

export function HelpContent() {
    const { t } = useTranslation();

    const topics = [
        { key: 'shipping' },
        { key: 'request' },
        { key: 'deliveryIssues' },
        { key: 'techSupport' },
        { key: 'pricing' },
        { key: 'general' },
    ];

    return (
        <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] relative">
                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Side - Phone/Kangaroo Image - Hidden on mobile, visible on larger screens */}
                    <div className="hidden lg:block lg:w-[35%] lg:flex-shrink-0 relative flex items-center justify-center">
                        <div className="relative w-full">
                            <div className="relative w-[240px] h-[320px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[580px] mx-auto">
                                <img
                                    src={phoneKangaroo}
                                    alt={t('help.seo.kangarooPhoneAlt')}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            {/* Small logo on phone */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-[380px] lg:top-[420px] xl:top-[500px] w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] flex items-center justify-center">
                                <img
                                    src={logoImage}
                                    alt={t('help.seo.logoAlt')}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Help Topics Section */}
                    <div className="w-full lg:w-[65%] lg:flex-shrink-0">
                        <div
                            className="text-[#333] text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-relaxed whitespace-pre-wrap"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            <p className="mb-4 sm:mb-5 lg:mb-6">
                                {t('help.content.intro')}
                            </p>

                            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                                {topics.map((topic) => (
                                    <div key={topic.key}>
                                        <p className="mb-0">
                                            <span className="font-bold">{t(`help.content.topics.${topic.key}.title`)}</span>
                                            <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                                {t(`help.content.topics.${topic.key}.description`)}
                                            </span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
