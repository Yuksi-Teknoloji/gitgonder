import arrowRightIcon from '../../assets/icons/arrow-right.svg';

export function HelpContent() {
    return (
        <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
                    {/* Left Side - General Questions */}
                    <div className="w-full lg:w-[35%] lg:flex-shrink-0">
                        {/* Title */}
                        <h2
                            className="text-[#FF5B04] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-6 sm:mb-8 lg:mb-10"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            Genel sorular
                        </h2>

                        {/* Buttons */}
                        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                            <button
                                className="bg-[#FF5B04] hover:bg-[#E55103] text-white font-medium text-[18px] sm:text-[20px] lg:text-[24px] py-4 sm:py-5 px-6 sm:px-8 rounded-[35px] flex items-center justify-between transition-colors w-full sm:w-auto sm:max-w-[600px]"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <span>Taşıyıcı Olmak İstiyorum</span>
                                <img src={arrowRightIcon} alt="" className="w-5 h-5 flex-shrink-0" style={{ filter: 'brightness(0) invert(1)' }} />
                            </button>

                            <button
                                className="bg-[#FF5B04] hover:bg-[#E55103] text-white font-medium text-[18px] sm:text-[20px] lg:text-[24px] py-4 sm:py-5 px-6 sm:px-8 rounded-[35px] flex items-center justify-between transition-colors w-full sm:w-auto sm:max-w-[600px]"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <span>Aracım Gelmedi</span>
                                <img src={arrowRightIcon} alt="" className="w-5 h-5 flex-shrink-0" style={{ filter: 'brightness(0) invert(1)' }} />
                            </button>

                            <button
                                className="bg-[#FF5B04] hover:bg-[#E55103] text-white font-medium text-[18px] sm:text-[20px] lg:text-[24px] py-4 sm:py-5 px-6 sm:px-8 rounded-[35px] flex items-center justify-between transition-colors w-full sm:w-auto sm:max-w-[600px]"
                                style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                            >
                                <span>Ürünüm Gelmedi</span>
                                <img src={arrowRightIcon} alt="" className="w-5 h-5 flex-shrink-0" style={{ filter: 'brightness(0) invert(1)' }} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Help Topics Section */}
                    <div className="w-full lg:w-[65%] lg:flex-shrink-0">
                        <div
                            className="text-[#333] text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-relaxed whitespace-pre-wrap"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            <p className="mb-4 sm:mb-5 lg:mb-6">
                                Her zaman yanınızdayız! Yüksi yardım hattına şu konularda bizimle iletişime geçebilirsiniz
                            </p>
                            
                            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Gönderi Takibi: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Paketinizin güncel durumunu öğrenmek ve teslimat süreci hakkında bilgi almak.
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Araç Talebi ve Rezervasyon: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Moto kuryeden kamyona kadar ihtiyacınıza uygun aracı çağırma ya da planlı rezervasyon desteği.
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Teslimat Sorunları: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Gecikme, adres değişikliği veya teslimatla ilgili yaşanan her türlü problem için çözüm.
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Uygulama ve Web Desteği: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Mobil uygulama ya da web sitemiz üzerinden yaşadığınız teknik sorunlarda yardım.
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Fiyatlandırma ve Ödeme: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Ücretlendirme, fatura veya ödeme yöntemleri hakkında bilgi talebi.
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        <span className="font-bold">Genel Sorular ve Öneriler: </span>
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                                            Hizmetlerimizle ilgili merak ettikleriniz veya bize iletmek istediğiniz öneriler.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
