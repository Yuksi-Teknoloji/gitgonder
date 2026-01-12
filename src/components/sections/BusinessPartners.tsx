import arrowRightIcon from '../../assets/icons/arrow-right.svg'

const partners = [
    {
        title: 'Yüksi Ülger Bayi Ankara OSTİM\'de hizmet vermektedir.',
        date: '15 Ağustos 2025',
    },
    {
        title: 'Yüksi Ülger Bayi Ankara OSTİM\'de hizmet vermektedir.',
        date: '15 Ağustos 2025',
    },
    {
        title: 'Yüksi Ülger Bayi Ankara OSTİM\'de hizmet vermektedir.',
        date: '15 Ağustos 2025',
    },
    {
        title: 'Yüksi Ülger Bayi Ankara OSTİM\'de hizmet vermektedir.',
        date: '15 Ağustos 2025',
    },
]

export function BusinessPartners() {
    return (
        <section className="w-full bg-white text-gray-900">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#333333] mb-8 sm:mb-10 md:mb-12 lg:mb-14">
                    İş Ortaklarımız
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                            {/* Turuncu Kare Placeholder */}
                            <div className="w-full aspect-square bg-[#FF5B04] rounded-lg sm:rounded-xl flex items-center justify-center">
                                {/* Placeholder için boş alan - gerçek görsel eklendiğinde buraya img tag'i gelecek */}
                            </div>

                            {/* Tarih */}
                            <p className="text-sm sm:text-base text-[#797979] font-normal">
                                {partner.date}
                            </p>

                            {/* Metin */}
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#333333] font-medium leading-tight">
                                {partner.title}
                            </p>

                            {/* Turuncu Yuvarlak Buton */}
                            <button className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-20 lg:h-20 bg-[#FF5B04] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors self-start mt-2 sm:mt-4">
                                <img 
                                    src={arrowRightIcon} 
                                    alt="Sağa ok" 
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                    style={{ filter: 'brightness(0) invert(1)' }}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
