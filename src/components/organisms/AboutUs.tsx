import aboutHeroBg from '../../assets/about/about-hero-bg.png';
import kangarooAbout from '../../assets/about/kangaroo-about.png';

export function AboutUs() {
    return (
        <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] xl:min-h-[822px] overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={aboutHeroBg}
                    alt="Yüksi lojistik hizmet"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 xl:px-8 py-4 sm:py-8 md:py-12 xl:py-20">
                <div className="relative w-full">
                    <div className="w-full lg:max-w-[60%] pl-4 sm:pl-6 md:pl-8 xl:pl-12 flex flex-col gap-4 sm:gap-5 md:gap-6 xl:gap-8">
                        <div
                            className="text-white text-[28px] sm:text-[36px] md:text-[45px] xl:text-[65px] font-bold leading-tight sm:leading-normal whitespace-pre-wrap"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            <p className="mb-0">TÜRKİYE'NİN </p>
                            <p>LOJİSTİK ALT YAPISI</p>
                        </div>
                        
                        <p
                            className="text-white text-sm sm:text-base md:text-lg xl:text-[32px] font-semibold leading-relaxed sm:leading-[1.15] whitespace-pre-wrap"
                            style={{
                                fontFamily: 'Urbanist, sans-serif',
                                fontWeight: 600,
                            }}
                        >
                            Yüksi olarak vizyonumuz, lojistik sektöründe yenilikçi ve güvenilir hizmet anlayışımızla hem bireylerin hem de işletmelerin hayatını kolaylaştıran, dijital çözümlerle hız ve verimliliği en üst düzeye taşıyan öncü bir marka olmaktır. Teknolojiyi odağımıza alarak müşterilerimizin ihtiyaç duyduğu her ölçekte teslimatı güvenle gerçekleştirmek, sürdürülebilirlik ilkeleriyle büyüyerek hem Türkiye'de hem de uluslararası pazarda tercih edilen lojistik çözüm ortağı olmak istiyoruz.
                        </p>
                    </div>

                    <div className="hidden xl:block absolute right-0 bottom-0" style={{ right: '-34px', bottom: '-100px' }}>
                        <div className="relative w-[582px] h-[684px]" style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
                            <img
                                src={kangarooAbout}
                                alt="Yüksi kanguru"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
