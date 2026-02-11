import arrowRightIcon from '../../assets/icons/arrow-right.svg';

interface VehicleServiceSectionProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    secondaryButtonText: string;
    onSecondaryClick?: () => void;
}

export function VehicleServiceSection({
    title,
    description,
    image,
    imageAlt,
    secondaryButtonText,
    onSecondaryClick,
}: VehicleServiceSectionProps) {
    return (
        <section className="w-full bg-white py-6 sm:py-8 md:py-10 lg:py-20">
            <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
                    <div className="w-full lg:w-1/2 lg:order-1 flex flex-col gap-4 sm:gap-5 lg:gap-8">
                        <h2
                            className="text-[#032c95] text-[24px] sm:text-[24px] md:text-[24px] lg:text-[80px] font-bold leading-tight"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            {title}
                        </h2>
                        
                        <p
                            className="text-[#333] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[24px] font-bold leading-relaxed whitespace-pre-wrap"
                            style={{ fontFamily: 'Urbanist, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            {description}
                        </p>
                        
                        <div className="flex flex-row w-full gap-3 lg:gap-4">
                            <button
                                onClick={onSecondaryClick}
                                className="w-full bg-[#032c95] hover:bg-[#004899] text-white font-bold text-[14px] lg:text-[16px] h-[42px] lg:h-auto lg:py-3 lg:px-6 rounded-[35px] flex items-center justify-center gap-2 transition-colors"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <span>{secondaryButtonText}</span>
                                <img src={arrowRightIcon} alt="" className="w-4 h-4" style={{ filter: 'brightness(0) invert(1)' }} />
                            </button>
                        </div>
                    </div>
                    
                    <div className="hidden lg:flex lg:w-1/2 lg:order-2 items-center justify-center">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="w-full max-w-[500px] xl:max-w-[600px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
