import React from 'react';

interface CircleArcProps {
    cx: number;
    cy: number;
    r: number;
}

export const CircleArc: React.FC<CircleArcProps> = ({ cx, cy, r }) => {
    return (
        <svg
            width="100%"
            height="100%"
            className="absolute inset-0 overflow-visible"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="none"
        >
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="#032c95"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#glow)"
            />
        </svg>
    );
};
