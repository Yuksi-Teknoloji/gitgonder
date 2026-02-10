import heroBg from '../../assets/carrier/hero-bg.png';
import kangarooCarrier from '../../assets/carrier/kangaroo-carrier.png';

export function CarrierHero() {
    return (
        <section className="relative w-full min-h-[600px] lg:min-h-[800px] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={heroBg}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-12 lg:pb-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                    {/* Left Side - Kangaroo Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1 -ml-8 lg:-ml-16 xl:-ml-24">
                        <div className="relative w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
                            <img
                                src={kangarooCarrier}
                                alt="Kangaroo Carrier"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side - Title and Subtitle */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 lg:pl-8 xl:pl-12 pt-8 lg:pt-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-bold text-[#032c95] leading-tight mb-4 sm:mb-6">
                            TAŞIYICI OL
                            SEN DE ARAMIZA KATIL!
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-[#032c95] font-medium">
                            Taşıyıcı olmak için formu doldur
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
