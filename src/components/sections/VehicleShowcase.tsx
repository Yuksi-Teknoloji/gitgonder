import arac1 from '../../assets/about/arac1.png'
import arac2 from '../../assets/about/arac2.png'
import arac3 from '../../assets/about/arac3.png'
import arac4 from '../../assets/about/arac4.png'
import arac5 from '../../assets/about/arac5.png'

const vehicles = [
    { src: arac1, alt: 'Motosiklet' },
    { src: arac2, alt: 'Küçük Panelvan' },
    { src: arac3, alt: 'Orta Panelvan' },
    { src: arac4, alt: 'Kasa Kamyonet' },
    { src: arac5, alt: 'Kapalı Kamyonet' },
]

export function VehicleShowcase() {
    return (
        <section className="w-full bg-white text-gray-900">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
                <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-extrabold text-center text-orange-500 px-4">
                        LOJİSTİĞİN SÜPER APP'İ YÜKSİ
                    </h2>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wider sm:tracking-[0.1em] md:tracking-[0.15em] lg:tracking-[0.2em] text-black mt-2 sm:mt-3 md:mt-4">
                        Araç Sınıflarımız
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 w-full">
                    {vehicles.map((vehicle) => (
                        <div
                            key={vehicle.alt}
                            className="bg-[#FFEFE7] rounded-xl sm:rounded-2xl shadow-lg overflow-hidden flex items-center justify-center p-4 sm:p-5 md:p-6 h-48 sm:h-56 md:h-64 lg:h-72"
                        >
                            <img
                                src={vehicle.src}
                                alt={vehicle.alt}
                                className="w-full h-full max-h-32 sm:max-h-40 md:max-h-44 lg:max-h-48 object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                <button className="mt-2 sm:mt-4 md:mt-6 inline-flex items-center gap-2 sm:gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-7 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full sm:rounded-2xl md:rounded-3xl shadow-md transition-colors self-start sm:self-center lg:self-start">
                    İncele
                    <span aria-hidden className="text-base sm:text-lg md:text-xl lg:text-2xl">→</span>
                </button>
            </div>
        </section>
    )
}
