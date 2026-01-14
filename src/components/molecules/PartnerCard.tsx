import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import type { Partner } from '../../types/partner';

interface PartnerCardProps {
    partner: Partner;
    onClick?: () => void;
    className?: string;
}

export function PartnerCard({ partner, onClick, className = '' }: PartnerCardProps) {
    return (
        <div className={`flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 ${className}`}>
            <div className="w-full aspect-[4/5] lg:aspect-square bg-[#FF5B04] rounded-[12px] lg:rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden">
                {partner.image ? (
                    <img
                        src={partner.image}
                        alt={partner.title}
                        className="w-full h-full object-cover"
                    />
                ) : null}
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-[#797979] font-normal">
                {partner.date}
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#333333] font-medium leading-tight">
                {partner.title}
            </p>
            <button
                onClick={onClick}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#FF5B04] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors self-start mt-1 sm:mt-2 md:mt-4"
            >
                <img
                    src={arrowRightIcon}
                    alt="Sağa ok"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                    style={{ filter: 'brightness(0) invert(1)' }}
                />
            </button>
        </div>
    );
}
