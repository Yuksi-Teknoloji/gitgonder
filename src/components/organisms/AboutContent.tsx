export function AboutContent() {
    const placeholderCards = [1, 2, 3, 4];

    return (
        <div className="w-full bg-white">
            {/* Hakkımızda Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
                <h2 
                    className="text-[32px] sm:text-[40px] lg:text-[65px] font-bold text-[#FF5B04] mb-4 sm:mb-6 lg:mb-8"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    Hakkımızda
                </h2>
                <p 
                    className="text-sm sm:text-base lg:text-[22px] font-medium text-[#333] leading-relaxed mb-6 sm:mb-8 lg:mb-12"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    Yüksi, lojistik ve taşımacılık sektörüne yenilikçi çözümler sunmak amacıyla geliştirilmiş dijital bir platformdur. Yüksi mobil uygulaması sayesinde, yük verenlerle taşıyıcıları güvenli, hızlı ve verimli bir şekilde bir araya getiriyoruz.
                </p>
                
                {/* Placeholder Cards - Mobile & Tablet Scrollable */}
                <div className="xl:hidden w-full">
                    <div 
                        className="flex gap-4 overflow-x-auto py-4 [-webkit-overflow-scrolling:touch] -mx-4 px-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <style>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        {placeholderCards.map((item) => (
                            <div 
                                key={item}
                                className="bg-[#FF5B04] rounded-[10px] aspect-square min-w-[150px] w-[150px] flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>

                {/* Placeholder Cards - Desktop Grid */}
                <div className="hidden xl:grid grid-cols-4 gap-4 sm:gap-6">
                    {placeholderCards.map((item) => (
                        <div 
                            key={item}
                            className="bg-[#FF5B04] rounded-[10px] aspect-square w-full"
                        />
                    ))}
                </div>
            </section>

            {/* Hizmet Özellikleri Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
                <h2 
                    className="text-[32px] sm:text-[40px] lg:text-[50px] font-bold text-[#FF5B04] mb-6 sm:mb-8 lg:mb-12"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    Hizmet Özellikleri
                </h2>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-6 sm:mb-8 lg:mb-12">
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">Akıllı Eşleştirme:</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` Gelişmiş algoritmalarımız sayesinde yükler, en uygun taşıyıcılarla saniyeler içinde eşleştirilir.`}</span>
                        </p>
                    </div>
                    
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">Gerçek Zamanlı Takip:</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` Sevkiyat süreci boyunca araçların konumunu anlık olarak izleyebilirsiniz.`}</span>
                        </p>
                    </div>
                    
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">Belgeli Taşıyıcı Ağı:</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` Tüm taşıyıcılarımız, gerekli belgeleri ve yeterlilikleri sağladığı onaylı bir ağa dahildir.`}</span>
                        </p>
                    </div>
                    
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">Esnek Ödeme Çözümleri:</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` Güvenli ödeme altyapısı ile ödemeler hızlı ve sorunsuz gerçekleşir.`}</span>
                        </p>
                    </div>
                </div>

                {/* Placeholder Cards - Mobile & Tablet Scrollable */}
                <div className="xl:hidden w-full">
                    <div 
                        className="flex gap-4 overflow-x-auto py-4 [-webkit-overflow-scrolling:touch] -mx-4 px-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <style>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        {placeholderCards.map((item) => (
                            <div 
                                key={item}
                                className="bg-[#FF5B04] rounded-[10px] aspect-square min-w-[150px] w-[150px] flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>

                {/* Placeholder Cards - Desktop Grid */}
                <div className="hidden xl:grid grid-cols-4 gap-4 sm:gap-6">
                    {placeholderCards.map((item) => (
                        <div 
                            key={item}
                            className="bg-[#FF5B04] rounded-[10px] aspect-square w-full"
                        />
                    ))}
                </div>
            </section>

            {/* Müşteri Avantajları Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
                <h2 
                    className="text-[32px] sm:text-[40px] lg:text-[50px] font-bold text-[#FF5B04] mb-6 sm:mb-8 lg:mb-12"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    Müşteri Avantajları
                </h2>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-6 sm:mb-8 lg:mb-12">
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">Zaman ve Maliyet Tasarrufu:</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` Doğru eşleşme, gereksiz beklemeleri ve boş taşımaları ortadan kaldırır.`}</span>
                        </p>
                    </div>
                    
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">Şeffaflık ve Güven:</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` Her işlem dijital olarak kayıt altına alınır, taraflar arası güven artırılır.`}</span>
                        </p>
                    </div>
                    
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">7/24 Destek:</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` Operasyonel sorunlarınızda her zaman yanınızda olan destek ekibimiz mevcuttur.`}</span>
                        </p>
                    </div>
                </div>

                {/* Placeholder Cards - Mobile & Tablet Scrollable */}
                <div className="xl:hidden w-full">
                    <div 
                        className="flex gap-4 overflow-x-auto py-4 [-webkit-overflow-scrolling:touch] -mx-4 px-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <style>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        {placeholderCards.map((item) => (
                            <div 
                                key={item}
                                className="bg-[#FF5B04] rounded-[10px] aspect-square min-w-[150px] w-[150px] flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>

                {/* Placeholder Cards - Desktop Grid */}
                <div className="hidden xl:grid grid-cols-4 gap-4 sm:gap-6">
                    {placeholderCards.map((item) => (
                        <div 
                            key={item}
                            className="bg-[#FF5B04] rounded-[10px] aspect-square w-full"
                        />
                    ))}
                </div>
            </section>

            {/* Teknolojik Altyapı Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
                <h2 
                    className="text-[32px] sm:text-[40px] lg:text-[50px] font-bold text-[#FF5B04] mb-6 sm:mb-8 lg:mb-12"
                    style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                >
                    Teknolojik Altyapı
                </h2>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-6 sm:mb-8 lg:mb-12">
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">Konum Tabanlı Akıllı Sistem:</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` En yakın ve en uygun taşıyıcıları anında tespit eder.`}</span>
                        </p>
                    </div>
                    
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">Yapay Zeka Destekli Planlama:</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` Trafik, hava durumu ve rota verilerine göre optimum taşıma planları oluşturulur.`}</span>
                        </p>
                    </div>
                    
                    <div>
                        <p className="text-[#333] leading-normal whitespace-pre-wrap mb-0 text-sm sm:text-base lg:text-[22px]" style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}>
                            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold">Bulut Tabanlı Mimari:</span>
                            <span className="text-sm sm:text-base lg:text-[22px] font-normal">{` Güvenli, hızlı ve ölçeklenebilir altyapımız ile tüm işlemler sorunsuz yürütülür.`}</span>
                        </p>
                    </div>
                </div>

                {/* Placeholder Cards - Mobile & Tablet Scrollable */}
                <div className="xl:hidden w-full">
                    <div 
                        className="flex gap-4 overflow-x-auto py-4 [-webkit-overflow-scrolling:touch] -mx-4 px-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <style>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        {placeholderCards.map((item) => (
                            <div 
                                key={item}
                                className="bg-[#FF5B04] rounded-[10px] aspect-square min-w-[150px] w-[150px] flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>

                {/* Placeholder Cards - Desktop Grid */}
                <div className="hidden xl:grid grid-cols-4 gap-4 sm:gap-6">
                    {placeholderCards.map((item) => (
                        <div 
                            key={item}
                            className="bg-[#FF5B04] rounded-[10px] aspect-square w-full"
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
