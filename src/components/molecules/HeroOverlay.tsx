import React from 'react';
import truckIcon from '../../assets/icons/truck-icon.svg';
import { CircleArc } from '../atoms/CircleArc';
import { DashedRing } from '../atoms/DashedRing';
import { CircleMarker } from '../atoms/CircleMarker';

interface HeroOverlayProps {
    activeIndex: number;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({ activeIndex }) => {
    const cx = 50;
    const cy = 540;
    const r = 1250;

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
                <CircleMarker
                    x={cx + r * Math.cos(0)}
                    y={cy + r * Math.sin(0)}
                    icon={truckIcon}
                    isActive={true}
                />
            </svg>

            <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center items-end pr-8 md:pr-16">
                <div
                    className="text-right transition-all duration-500 ease-out
                    text-[52px] font-semibold leading-normal whitespace-pre-wrap
                    text-[#032c95] opacity-100 scale-105"
                    style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontVariationSettings: '"wdth" 100',
                        textShadow: '0 4px 12px rgba(255, 91, 4, 0.3)',
                    }}
                >
                    GİTGÖNDER KARGO
                </div>
            </div>
        </div>
    );
};
