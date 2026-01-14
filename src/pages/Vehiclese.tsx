import { useState } from 'react';
import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import motorcycleImg from '../assets/services/motorcycle.png';
import minivanImg from '../assets/services/minivan.png';
import panelvanImg from '../assets/services/panelvan.png';
import kamyonetImg from '../assets/services/kamyonet.png';
import kamyonImg from '../assets/services/kamyon.png';

type VehicleKey = 'motorcycle' | 'minivan' | 'panelvan' | 'kamyonet' | 'kamyon';

type VehicleConfig = {
    id: VehicleKey;
    title: string;
    heading: string;
    description: string;
    image: string;
    background: string;
};

const VEHICLES: VehicleConfig[] = [
    {
        id: 'motorcycle',
        title: 'Motorsiklet',
        heading: "LOJİSTİĞİN SÜPER APP'İ YÜKSİ",
        description:
            "Moto kuryeler genelde 40–50 kg’a kadar yük taşıyabilir. Ama ister sadece bir zarf olsun, ister market poşeti ya da paket yemek, hepsi güvenle teslim edilir.\n\nYemek siparişinden alışveriş ürünlerine, ilaçtan belgeye kadar pek çok şeyi hızlıca ulaştırmak için moto kuryeler şehirde en pratik çözümdür.",
        image: motorcycleImg,
        background: 'linear-gradient(90deg, #FF5B04 0%, #FFEDE0 55%, #FFF7F2 100%)',
    },
    {
        id: 'minivan',
        title: 'Minivan',
        heading: "LOJİSTİĞİN SÜPER APP'İ YÜKSİ",
        description:
            'Minivanlar genelde 500–800 kg’a kadar yük taşıyabilir. İster birkaç koli, ister küçük ev eşyaları ya da toplu alışveriş ürünleri olsun, hepsi rahatlıkla sığar.\n\nTaşınmadan ofis ihtiyaçlarına, market teslimatından küçük nakliyeye kadar minivanlar şehir içi pratik ve güvenli çözümler sunar.',
        image: minivanImg,
        background: 'linear-gradient(90deg, #FF5B04 0%, #FFE7D5 55%, #FFF6F1 100%)',
    },
    {
        id: 'panelvan',
        title: 'Panelvan',
        heading: "LOJİSTİĞİN SÜPER APP'İ YÜKSİ",
        description:
            'Panelvanlar genelde 1.000–1.500 kg’a kadar yük taşıyabilir. İster büyük koliler, ister mobilya ya da toplu sipariş ürünleri olsun, geniş hacimleriyle hepsi kolayca taşınır.\n\nEv taşımadan mağaza sevkiyatına, e-ticaret teslimatından profesyonel nakliyeye kadar panelvanlar güvenli ve güçlü bir çözümdür.',
        image: panelvanImg,
        background: 'linear-gradient(90deg, #FF5B04 0%, #FFE4D2 55%, #FFF4EF 100%)',
    },
    {
        id: 'kamyonet',
        title: 'Kamyonet',
        heading: "LOJİSTİĞİN SÜPER APP'İ YÜKSİ",
        description:
            'Kamyonetler genelde 1.500–3.500 kg’a kadar yük taşıyabilir. İster inşaat malzemesi, ister büyük mobilyalar ya da toplu ticari ürünler olsun, güçlü yapıları sayesinde kolayca taşınır.\n\nNakliyeden ticari sevkiyata, pazar ve mağaza teslimatından tarım ürünlerine kadar kamyonetler hem şehir içi hem de şehirler arası güvenilir çözümler sunar.',
        image: kamyonetImg,
        background: 'linear-gradient(90deg, #FF5B04 0%, #FFE0CC 55%, #FFF2ED 100%)',
    },
    {
        id: 'kamyon',
        title: 'Kamyon',
        heading: "LOJİSTİĞİN SÜPER APP'İ YÜKSİ",
        description:
            "Kamyonlar genelde 3.500 kg'dan başlayıp 20.000 kg'a kadar yük taşıyabilir. İster ağır makineler, ister büyük hacimli eşyalar ya da toplu ticari ürünler olsun, geniş kasa ve güçlü motorları sayesinde rahatça taşınır.\n\nŞehirler arası taşımacılıktan lojistik sevkiyata, inşaat malzemelerinden endüstriyel ürünlere kadar kamyonlar güvenli ve yüksek kapasiteli çözümler sunar.",
        image: kamyonImg,
        background: 'linear-gradient(90deg, #FF5B04 0%, #FFD9C4 55%, #FFF0E8 100%)',
    },
];

type VehicleStage = 'active' | 'next' | 'prev' | 'hidden';

function getStageForIndex(index: number, activeIndex: number, total: number): VehicleStage {
    if (index === activeIndex) return 'active';
    const nextIndex = (activeIndex + 1) % total;
    const prevIndex = (activeIndex - 1 + total) % total;
    if (index === nextIndex) return 'next';
    if (index === prevIndex) return 'prev';
    return 'hidden';
}

export default function Vehiclese() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeVehicle = VEHICLES[activeIndex];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % VEHICLES.length);
    };

    return (
        <div className="w-full min-h-screen" style={{ background: activeVehicle.background }}>
            <Header activeItem="/services" />

            <main className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16 pt-10 pb-20 relative overflow-hidden">
                <section className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">
                    <div className="mt-10 lg:mt-24 max-w-xl text-white w-full lg:w-1/2">
                        <p
                            className="text-[24px] sm:text-[26px] md:text-[28px] font-bold mb-4"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            {activeVehicle.heading}
                        </p>
                        <h1
                            className="text-[48px] sm:text-[64px] md:text-[72px] lg:text-[80px] font-bold leading-[1] mb-8 transition-opacity duration-500"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            {activeVehicle.title}
                        </h1>
                        <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-relaxed whitespace-pre-line transition-opacity duration-500">
                            {activeVehicle.description}
                        </p>

                        
                    </div>

                    <div
                        className="relative w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-12 lg:mt-4 cursor-pointer pl-4 sm:pl-8 lg:pl-6 xl:pl-10 2xl:pl-12"
                        onClick={handleNext}
                    >
                        <div className="relative w-full max-w-[720px] h-[420px] lg:h-[520px]">
                            {VEHICLES.map((vehicle, index) => {
                                const stage = getStageForIndex(index, activeIndex, VEHICLES.length);

                                let translateX = 0;
                                let translateY = 0;
                                let scale = 1;
                                let opacity = 1;
                                let blur = 0;
                                let zIndex = 30;

                                if (stage === 'active') {
                                    translateX = 0;
                                    translateY = 260;
                                    scale = 0.9;
                                    opacity = 1;
                                    blur = 0;
                                    zIndex = 40;
                                } else if (stage === 'next') {
                                    translateX = 548.5;
                                    translateY = 1.5;
                                    scale = 200 / 719;
                                    opacity = 1;
                                    blur = 5;
                                    zIndex = 25;
                                } else if (stage === 'prev') {
                                    translateX = 534.5;
                                    translateY = 480;
                                    scale = 200 / 719;
                                    opacity = 1;
                                    blur = 5;
                                    zIndex = 15;
                                } else {
                                    translateX = 534.5;
                                    translateY = 480;
                                    scale = 0.2;
                                    opacity = 0;
                                    blur = 4;
                                    zIndex = 5;
                                }

                                return (
                                    <img
                                        key={vehicle.id}
                                        src={vehicle.image}
                                        alt={vehicle.title}
                                        className="absolute left-1/2 top-1/2 max-w-[520px] w-[70vw] sm:w-[420px] lg:w-[520px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out"
                                        style={{
                                            transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                                            opacity,
                                            filter: `blur(${blur}px)`,
                                            zIndex,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className="absolute left-0 sm:left-0 lg:left-0 bottom-[-8px] translate-y-1/2">
                        <button
                            className="flex items-center gap-3 bg-white text-[#333] rounded-[30px] px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] text-[16px] sm:text-[18px] font-medium hover:bg-[#F5F5F5] transition-colors"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            <span>Yük Oluştur</span>
                            <span className="text-[20px] leading-none">→</span>
                        </button>
                    </div>
                </section>
            </main>

            <div className="mt-24">
                <Footer />
            </div>
        </div>
    );
}
