import React from 'react';

interface HeroOverlayProps {
    activeIndex: number;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({ activeIndex }) => {
    // Rotation Logic:
    // We want the "Active" item to be horizontally aligned (Angle 0).
    // Items are spaced by 20 degrees.
    // Index 0: YÜKSİ LOJİSTİK. Base Angle: -20deg. To center: Rotate Ring +20deg.
    // Index 1: YÜKSİ KARGO.    Base Angle: 0deg.   To center: Rotate Ring 0deg.
    // Index 2: YÜKSİ KURYE.    Base Angle: +20deg. To center: Rotate Ring -20deg.

    // Formula: rotation = (1 - activeIndex) * 20
    // Index 0 -> 20
    // Index 1 -> 0
    // Index 2 -> -20

    const rotation = (1 - activeIndex) * 20;

    return (
        <div className="absolute inset-0 pointer-events-none z-30 w-full h-full overflow-hidden">
            {/* Rotating Container */}
            <div
                className="absolute inset-0 transition-transform duration-1000 ease-out will-change-transform origin-[-100px_540px]" // Center of rotation
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {/* The Ring/Arc */}
                <svg
                    width="100%"
                    height="100%"
                    className="absolute inset-0 overflow-visible"
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

                    {/* Main Orange Curve */}
                    <path
                        d="M -100 540 m 1250 0 a 1250 1250 0 0 0 0 -2500 a 1250 1250 0 0 0 0 2500" // Full circle for smooth rotation
                        fill="none"
                        stroke="#FF5B04"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />

                    {/* Decorative Dashed Rings - Outer Only */}
                    <circle
                        cx="-100"
                        cy="540"
                        r="1300"
                        fill="none"
                        stroke="#FF5B04"
                        strokeWidth="1"
                        strokeDasharray="20 20"
                        opacity="0.3"
                        className="animate-[spin_40s_linear_infinite]"
                        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                    />
                </svg>

                {/* Text Items & Markers */}
                {/* 
                   Positioning:
                   Center: (-100, 540)
                   Radius: 1250
                   
                   We place them at static Angles relative to the container.
                   Since the container rotates, these will move.
                */}

                {/* Item 0: YÜKSİ LOJİSTİK (-20 deg) */}
                <WheelItem
                    angle={-20}
                    label="YÜKSİ LOJİSTİK"
                    isActive={activeIndex === 0}
                    rotation={-rotation} // Counter-rotate text to keep upright? Or let it tilt. User asked for "Circle Rotating" so tilt is natural. Let's start with tilt.
                />

                {/* Item 1: YÜKSİ KARGO (0 deg) */}
                <WheelItem
                    angle={0}
                    label="YÜKSİ KARGO"
                    isActive={activeIndex === 1}
                    rotation={-rotation}
                />

                {/* Item 2: YÜKSİ KURYE (+20 deg) */}
                <WheelItem
                    angle={20}
                    label="YÜKSİ KURYE"
                    isActive={activeIndex === 2}
                    rotation={-rotation}
                />
            </div>
        </div>
    );
};

interface WheelItemProps {
    angle: number;
    label: string;
    isActive: boolean;
    rotation: number;
}

const WheelItem: React.FC<WheelItemProps> = ({ angle, label, isActive, rotation }) => {
    // Circle Center (-100, 540)
    // Radius 1250
    // x = cx + r * cos(a)
    // y = cy + r * sin(a)

    // We are computing CSS 'left/top' relative to the viewport/container 0,0
    const cx = -100;
    const cy = 540;
    const r = 1250;
    const rad = (angle * Math.PI) / 180;

    const x = cx + r * Math.cos(rad);
    const y = cy + r * Math.sin(rad);

    return (
        <div
            className="absolute flex items-center transition-all duration-500 ease-out"
            style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(0deg)`, // Fixed marker orientation relative to radius? 
                // Actually, for a "Planet" on a ring, translate(-50%, -50%) centers it on the line.
                // We want the Label to be to the RIGHT of the marker.
            }}
        >
            {/* The Dot Marker */}
            <div className={`
                relative flex items-center justify-center
                w-16 h-16 rounded-full 
                bg-white border-4 border-[#FF5B04] shadow-xl
                transition-all duration-500
                ${isActive ? 'scale-110 border-[#FF5B04]' : 'scale-75 border-orange-300 opacity-80'}
            `}>
                <div className={`w-4 h-4 bg-[#FF5B04] rounded-full transition-all duration-500 ${isActive ? 'scale-100' : 'scale-0'}`}></div>
            </div>

            {/* The Label */}
            <div
                className={`
                    ml-6 text-5xl font-black tracking-tighter transition-all duration-500 origin-left
                    ${isActive ? 'text-[#FF5B04] opacity-100 translate-x-0' : 'text-gray-300 opacity-40 translate-x-4'}
                `}
                style={{
                    // If we want text to stay horizontal, we apply counter rotation here
                    // transform: `rotate(${rotation}deg)` 
                    // But for "Wheel" effect, fixed relative to marker is okay. Let's try No Counter Rotate first.
                    textShadow: isActive ? '0 4px 12px rgba(255, 91, 4, 0.2)' : 'none'
                }}
            >
                {label}
            </div>
        </div>
    );
};
