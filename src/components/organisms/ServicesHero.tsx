import servicesHeroBg from '../../assets/services/hero-bg.png';
import kangarooServices from '../../assets/services/kangaroo-services.png';

export function ServicesHero() {
    return (
        <section className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[822px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                    src={servicesHeroBg}
                    alt="Yüksi lojistik hizmet"
                    className="absolute h-[155.84%] left-0 top-[-56.81%] w-[100.09%] max-w-none object-cover"
                    style={{ transform: 'scaleX(-1)' }}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full px-4 sm:px-6 xl:px-8 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-20">
                <div className="relative w-full">
                    {/* Left Side - Text Content */}
                    <div className="w-full lg:max-w-[60%] pl-4 sm:pl-6 md:pl-8 xl:pl-12 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
                        {/* Main Title */}
                        <h1 className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[60px] font-bold leading-tight sm:leading-tight md:leading-normal whitespace-pre-wrap" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            SİZE YÜKSE BİZE YÜKSİ
                        </h1>
                        
                        {/* Description Text */}
                        <p
                            className="text-white text-[16px] sm:text-base md:text-lg lg:text-xl xl:text-[28px] font-semibold leading-normal whitespace-pre-wrap"
                            style={{
                                fontFamily: 'Urbanist, sans-serif',
                                fontWeight: 600,
                            }}
                        >
                            Yüksi, modern lojistik ihtiyaçlarınıza hızlı ve esnek çözümler sunar. İster mobil uygulamamızdan ister web sitemizden kolayca araç çağırabilir, motokuryeden minivan, panelvan, kamyonet ve kamyona kadar geniş araç filomuzla gönderilerinizi güvenle taşıtabilirsiniz. Hızlı, pratik ve güvenilir hizmet için Yüksi her zaman yanınızda.
                        </p>
                    </div>

                    {/* Right Side - Kangaroo Image */}
                    <div className="hidden xl:block absolute right-0 bottom-0" style={{ right: '80px', top: '50%', transform: 'translateY(0%)' }}>
                        <div className="relative w-[563px] h-[747px]" style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
                            <img
                                src={kangarooServices}
                                alt="Yüksi kanguru"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
