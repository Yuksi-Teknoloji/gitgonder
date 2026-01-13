import React from 'react';
import truckIcon from '../../assets/icons/truck-icon.svg';
import boxIcon from '../../assets/icons/box-icon.svg';
import bikeIcon from '../../assets/icons/bike-icon.svg';
import { CircleArc } from './CircleArc';
import { DashedRing } from './DashedRing';
import { CircleMarker } from './CircleMarker';

interface HeroOverlayProps {
    activeIndex: number;
}

const icons = [truckIcon, boxIcon, bikeIcon];

export const HeroOverlay: React.FC<HeroOverlayProps> = ({ activeIndex }) => {
    const cx = 50;
    const cy = 540;
    const r = 1250;
    const baseAngles = [-20, 0, 20];
    const rotation = (1 - activeIndex) * 20;

    return (
        <div className="absolute inset-0 pointer-events-none z-30 w-full h-full overflow-hidden">
            <CircleArc cx={cx} cy={cy} r={r} />
            <DashedRing cx={cx} cy={cy} r={r} />
            
            <svg
                width="100%"
                height="100%"
                className="absolute inset-0 overflow-visible"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="none"
            >
                {baseAngles.map((baseAngle, index) => {
                    const adjustedAngle = baseAngle + rotation;
                    const rad = (adjustedAngle * Math.PI) / 180;
                    const x = cx + r * Math.cos(rad);
                    const y = cy + r * Math.sin(rad);
                    const isActive = activeIndex === index;

                    return (
                        <CircleMarker
                            key={index}
                            x={x}
                            y={y}
                            icon={icons[index]}
                            isActive={isActive}
                        />
                    );
                })}
            </svg>

            <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center items-end pr-8 md:pr-16 space-y-16">
                <TextLabel
                    label="YÜKSİ LOJİSTİK"
                    isActive={activeIndex === 0}
                />
                <TextLabel
                    label="YÜKSİ KARGO"
                    isActive={activeIndex === 1}
                />
                <TextLabel
                    label="YÜKSİ KURYE"
                    isActive={activeIndex === 2}
                />
            </div>
        </div>
    );
};

interface TextLabelProps {
    label: string;
    isActive: boolean;
}

const TextLabel: React.FC<TextLabelProps> = ({ label, isActive }) => {
    return (
        <div
            className={`
                text-right transition-all duration-500 ease-out
                text-[42px] font-semibold leading-normal whitespace-pre-wrap
                ${isActive 
                    ? 'text-[#FF5B04] opacity-100 scale-105' 
                    : 'text-white opacity-100 scale-100'
                }
            `}
            style={{
                fontFamily: 'Roboto, sans-serif',
                fontVariationSettings: '"wdth" 100',
                textShadow: isActive ? '0 4px 12px rgba(255, 91, 4, 0.3)' : 'none',
            }}
        >
            {label}
        </div>
    );
};
