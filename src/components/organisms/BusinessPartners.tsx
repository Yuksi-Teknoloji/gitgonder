import { usePartners } from '../../hooks/usePartners';
import { PartnerCard } from '../molecules/PartnerCard';

export function BusinessPartners() {
    const { partners, loading, error } = usePartners(100, 0);

    return (
        <section className="w-full bg-white text-gray-900">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#333333] mb-8 sm:mb-10 md:mb-12 lg:mb-14">
                    İş Ortaklarımız
                </h2>

                {loading && (
                    <div className="text-center py-12">
                        <p className="text-[#333333]">Yükleniyor...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center py-12">
                        <p className="text-red-600">Veri yüklenirken bir hata oluştu: {error.message}</p>
                    </div>
                )}

                {!loading && !error && partners.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-[#333333]">Henüz iş ortağı bulunmamaktadır.</p>
                    </div>
                )}

                {!loading && !error && partners.length > 0 && (
                    <>
                <div className="w-full lg:hidden">
                    <div className="flex gap-6 overflow-x-auto [-webkit-overflow-scrolling:touch] px-1 pb-2"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <style>{`
                            div::-webkit-scrollbar { display: none; }
                        `}</style>
                        {partners.map((partner, index) => (
                                    <PartnerCard
                                        key={partner.id || index}
                                        partner={partner}
                                        className="min-w-[260px]"
                                    />
                        ))}
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {partners.map((partner, index) => (
                                <PartnerCard
                                    key={partner.id || index}
                                    partner={partner}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
