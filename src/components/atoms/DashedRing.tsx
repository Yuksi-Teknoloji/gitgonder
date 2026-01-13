import React from 'react';

interface DashedRingProps {
    cx: number;
    cy: number;
    r: number;
}

export const DashedRing: React.FC<DashedRingProps> = ({ cx, cy, r }) => {
    return (
        <svg
            width="100%"
            height="100%"
            className="absolute inset-0 overflow-visible"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="none"
        >
            <circle
                cx={cx}
                cy={cy}
                r={r + 50}
                fill="none"
                stroke="#FF5B04"
                strokeWidth="1"
                strokeDasharray="20 20"
                opacity="0.3"
                className="animate-[spin_40s_linear_infinite]"
                style={{ 
                    transformBox: 'fill-box', 
                    transformOrigin: `${cx}px ${cy}px`
                }}
            />
        </svg>
    );
};
