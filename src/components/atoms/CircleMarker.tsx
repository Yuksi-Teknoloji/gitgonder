import React from 'react';

interface CircleMarkerProps {
    x: number;
    y: number;
    icon: string;
    isActive: boolean;
}

export const CircleMarker: React.FC<CircleMarkerProps> = ({ x, y, icon, isActive }) => {
    if (!isActive) return null;

    return (
        <g
            className="transition-all duration-1000 ease-out"
            style={{
                opacity: isActive ? 1 : 0,
            }}
        >
            <circle
                cx={x}
                cy={y}
                r={isActive ? 40 : 0}
                fill="#032c95"
                stroke="#032c95"
                strokeWidth="4"
                className="transition-all duration-500"
            />
            <foreignObject
                x={x - 30}
                y={y - 30}
                width={60}
                height={60}
                style={{
                    opacity: isActive ? 1 : 0,
                    pointerEvents: 'none',
                }}
            >
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={icon}
                        alt=""
                        className="w-10 h-10 object-contain filter brightness-0 invert"
                        style={{ transform: 'rotate(180deg) scaleY(-1)' }}
                    />
                </div>
            </foreignObject>
        </g>
    );
};
