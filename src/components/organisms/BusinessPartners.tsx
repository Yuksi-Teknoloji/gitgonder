import { useTranslation } from 'react-i18next';
import kamyonImg from '../../assets/services/kamyon.png';
import minivanImg from '../../assets/services/minivan.png';
import motorcycleImg from '../../assets/services/motorcycle.png';
import arasLogo from '../../assets/partners/aras.png';
import hepsijetLogo from '../../assets/partners/hepsijet.png';
import kargoistLogo from '../../assets/partners/kargoist.png';
import kolaygelsinLogo from '../../assets/partners/kolaygelsin.png';
import pttLogo from '../../assets/partners/ptt.png';
import suratLogo from '../../assets/partners/surat.png';
import yurticiLogo from '../../assets/partners/yurtici.png';
import a101Logo from '../../assets/partners/A101.svg';
import karacaLogo from '../../assets/partners/karaca.png';
import danoneLogo from '../../assets/partners/danone.png';
import sutasLogo from '../../assets/partners/sütas.png';
import etiLogo from '../../assets/partners/eti.png';
import trendyolLogo from '../../assets/partners/trendyol.png';
import sokLogo from '../../assets/partners/sok.png';
import fileLogo from '../../assets/partners/file.png';
import ulkerLogo from '../../assets/partners/ulker.png';
import yemekSepetiLogo from '../../assets/partners/yemeksepeti.png';
import trendyolGoLogo from '../../assets/partners/trendyol-go.png';
import netlogLojistikLogo from '../../assets/partners/netlog-lojistik.png';
import trendyolExpressLogo from '../../assets/partners/trendyol-express.png';
import allianceHealthcareLogo from '../../assets/partners/alliance.png';
import fedexCargoLogo from '../../assets/partners/Fedex.png';
import upsKargoLogo from '../../assets/partners/ups.png';
import dhlLogo from '../../assets/partners/DHL.png';

export function BusinessPartners() {
    const { t } = useTranslation();

    const sectors = [
        {
            name: t('home.businessPartners.logistics.name'),
            image: kamyonImg,
            description: t('home.businessPartners.logistics.description')
        },
        {
            name: t('home.businessPartners.cargo.name'),
            image: minivanImg,
            description: t('home.businessPartners.cargo.description')
        },
        {
            name: t('home.businessPartners.courier.name'),
            image: motorcycleImg,
            description: t('home.businessPartners.courier.description')
        },
    ];

    const cargoPartners = [
        { name: 'Aras Kargo', logo: arasLogo },
        { name: 'Hepsijet', logo: hepsijetLogo },
        { name: 'Kargoist', logo: kargoistLogo },
        { name: 'Kolay Gelsin', logo: kolaygelsinLogo },
        { name: 'PTT Kargo', logo: pttLogo },
        { name: 'Sürat Kargo', logo: suratLogo },
        { name: 'Yurtiçi Kargo', logo: yurticiLogo },
        {name : "DHL", logo: dhlLogo},
        { name: 'Fedex Cargo', logo: fedexCargoLogo },
        { name: 'UPS Kargo', logo: upsKargoLogo },
        { name: 'A101', logo: a101Logo },
        { name: 'Karaca', logo: karacaLogo },
        { name: 'Danone', logo: danoneLogo },
        { name: 'Sütaş', logo: sutasLogo },
        { name: 'Eti', logo: etiLogo },
        { name: 'Trendyol', logo: trendyolLogo },
        { name: 'Şok', logo: sokLogo },
        { name: 'File', logo: fileLogo },
        { name: 'Ülker', logo: ulkerLogo },
        { name: 'YemekSepeti', logo: yemekSepetiLogo },
        { name: 'Trendyol Go', logo: trendyolGoLogo },
        { name: 'Netlog Lojistik', logo: netlogLojistikLogo },
        { name: 'Trendyol Express', logo: trendyolExpressLogo },
        { name: 'Alliance Healthcare', logo: allianceHealthcareLogo },
       
    ];

    return (
        <section className="w-full bg-white text-gray-900">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#333333] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-center sm:text-left">
                    {t('home.businessPartners.title')}
                </h2>

                {/* Sectors cards (existing section) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-stretch">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-br from-[#FF5B04] to-[#FF8C42] text-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]"
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-full -mr-10 sm:-mr-12 md:-mr-16 -mt-10 sm:-mt-12 md:-mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full -ml-8 sm:-ml-10 md:-ml-12 -mb-8 sm:-mb-10 md:-mb-12"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center justify-center w-full px-2">
                                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 transform group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={sector.image}
                                        alt={sector.name}
                                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain drop-shadow-2xl"
                                    />
                                </div>

                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-2 sm:mb-3 md:mb-4">
                                    {sector.name}
                                </h3>

                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 text-center max-w-[280px] sm:max-w-[300px] md:max-w-xs lg:max-w-sm leading-relaxed px-2">
                                    {sector.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cargo partners logos (new highlight section) */}
                <div className="mt-14 sm:mt-20 relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFF3E8] via-[#FFE4D0] to-[#FFF7EF] opacity-80 pointer-events-none" />

                    <div className="relative rounded-3xl border border-orange-100/60 shadow-[0_18px_45px_rgba(255,91,4,0.18)] px-4 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden">
                        

                        {/* title & description */}
                        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2B1B12] tracking-tight">
                                {t('home.businessPartners.cargoPartners.title')}
                            </h3>
                            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#5B4535]">
                                {t('home.businessPartners.cargoPartners.description')}
                            </p>
                        </div>

                        {/* logos slider (all viewports, auto-scrolling) */}
                        <div className="relative -mx-4 px-4 pb-2">
                            <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-[#FFF3E8] to-transparent z-10" />
                            <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-[#FFF3E8] to-transparent z-10" />

                            <div className="overflow-hidden">
                                <div className="cargo-slider-track gap-4 md:gap-6">
                                    {[...cargoPartners, ...cargoPartners].map((partner, index) => (
                                        <div
                                            key={`${partner.name}-${index}`}
                                            className="group flex flex-shrink-0 w-40 xs:w-48 md:w-52 lg:w-56 items-center justify-center rounded-2xl shadow-md px-4 py-4 bg-white"
                                        >
                                            {partner.logo ? (
                                                <img
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    className="max-h-10 w-auto object-contain group-hover:scale-105 transition-all duration-200"
                                                />
                                            ) : (
                                                <span className="text-sm font-semibold text-[#2B1B12] text-center">
                                                    {partner.name}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
