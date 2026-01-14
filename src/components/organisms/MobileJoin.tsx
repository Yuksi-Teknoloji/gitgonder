import { useState, useEffect } from 'react'
import phoneScreen from '../../assets/mobile/phone-screen.png'
import boxesImage from '../../assets/mobile/boxes.png'

export function MobileJoin() {
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="relative w-full bg-white overflow-hidden py-16 lg:py-20">
            {/* Scattered boxes in background, built from a single box asset */}
            <div className="pointer-events-none absolute inset-0 z-10">
                {/* Top-left big box (hidden on very small screens to avoid overlapping the title) */}
                <img
                    src={boxesImage}
                    alt=""
                    className={`hidden sm:block absolute w-[120px] sm:w-[170px] lg:w-[190px] top-4 sm:top-6 left-[4%] sm:left-[6%] -rotate-12 drop-shadow-xl transition-all duration-700 ease-out ${
                        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: '2000ms' }}
                />

                {/* Top-center small box (hidden on very small screens to avoid overlapping the title) */}
                <img
                    src={boxesImage}
                    alt=""
                    className={`hidden sm:block absolute w-[80px] sm:w-[110px] lg:w-[120px] top-2 sm:top-4 left-1/2 -translate-x-1/2 rotate-6 drop-shadow-lg transition-all duration-700 ease-out ${
                        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: '2200ms' }}
                />

                {/* Right-middle box */}
                <img
                    src={boxesImage}
                    alt=""
                    className={`absolute w-[85px] xs:w-[100px] sm:w-[130px] lg:w-[150px] top-16 xs:top-20 sm:top-24 right-[6%] xs:right-[8%] sm:right-[10%] rotate-8 drop-shadow-xl transition-all duration-700 ease-out ${
                        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: '2400ms' }}
                />

                {/* Bottom-left box */}
                <img
                    src={boxesImage}
                    alt=""
                    className={`absolute w-[95px] xs:w-[115px] sm:w-[150px] lg:w-[170px] bottom-8 xs:bottom-10 sm:bottom-10 left-[20%] xs:left-[22%] sm:left-[25%] rotate-8 drop-shadow-xl transition-all duration-700 ease-out ${
                        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: '2600ms' }}
                />

                {/* Bottom-right box */}
                <img
                    src={boxesImage}
                    alt=""
                    className={`absolute w-[95px] xs:w-[115px] sm:w-[150px] lg:w-[170px] bottom-4 xs:bottom-5 sm:bottom-5 right-[5%] xs:right-[6%] sm:right-[8%] -rotate-10 drop-shadow-xl transition-all duration-700 ease-out ${
                        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: '2800ms' }}
                />
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10">
                <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
                    {/* Left side - Text content */}
                    <div 
                        className={`flex-1 lg:basis-[55%] xl:basis-[55%] w-full flex flex-col items-start gap-4 sm:gap-5 lg:gap-6 transition-all duration-700 ease-out ${
                            showContent 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-0 -translate-x-10'
                        }`}
                    >
                        <h2 
                            className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[50px] font-bold text-[#FF5B04] leading-tight"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            Yüksi Mobile Katıl
                        </h2>

                        <p 
                            className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-gray-900 leading-relaxed"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            Yüksi ile istediğin yükü, istediğin araçla ve istediğin yere taşıtmak artık parmaklarının ucunda! İster küçük bir paket, ister devasa bir yük olsun; Yüksi'de motosikletten kamyona kadar her tür araç seni bekliyor.
                        </p>

                        <p 
                            className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-gray-900 leading-relaxed"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            Uygulama, akıllı konum bazlı sistem sayesinde seni en uygun taşıyıcıyla saniyeler içinde eşleştirir. Böylece zamandan tasarruf eder, gereksiz masraflardan kurtulursun.
                        </p>

                        <p 
                            className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-gray-900 leading-relaxed"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            Üstelik her şey kilometre bazlı fiyatlandırma ile şeffaf ve net! Yüksi ile taşıma işi artık zahmet değil, keyifli bir deneyim. Sen yükünü hazırla, biz seni doğru araç ve güvenilir taşıyıcıyla buluşturalım.
                        </p>
                    </div>

                    {/* Right side - Phone */}
                    <div className="relative flex-shrink-0 w-full lg:basis-[45%] xl:basis-[45%] flex justify-center lg:justify-end">
                        {/* Phone - Always visible */}
                        <div className="relative z-20">
                            <img 
                                src={phoneScreen} 
                                alt="Yüksi Mobile App" 
                                className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[360px] xl:w-[400px] h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
