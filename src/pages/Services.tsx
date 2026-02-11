import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/organisms/Header'
import { ServicesHero } from '../components/organisms/ServicesHero'
import { VehicleServiceSection } from '../components/organisms/VehicleServiceSection'
import { Footer } from '../components/organisms/Footer'
import { SEOHead } from '../components/molecules/SEOHead'
import { getLocalizedPath, getAlternateUrls } from '../i18n'
import { useLanguageFromUrl } from '../hooks/useLanguageFromUrl'
import kamyonetImg from '../assets/about/gitgonder-kamyon.png'
import kamyonImg from '../assets/services/gitgonder-kamyon1.png'

export default function Services() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const currentLang = useLanguageFromUrl()

    const currentPath = getLocalizedPath('services', currentLang)
    const alternateUrls = getAlternateUrls('services')
    const contactPath = getLocalizedPath('contact', currentLang)

    // Only cargo vehicles: kamyonet (pickup) and kamyon (truck)
    const vehicles = [
        {
            title: t('services.pickup.title'),
            description: t('services.pickup.description'),
            image: kamyonetImg,
            imageAlt: `Gitgönder ${t('services.pickup.title')}`,
            secondaryButtonText: t('services.pickup.buttonText'),
        },
        {
            title: t('services.truck.title'),
            description: t('services.truck.description'),
            image: kamyonImg,
            imageAlt: `Gitgönder ${t('services.truck.title')}`,
            secondaryButtonText: t('services.truck.buttonText'),
        },
    ]

    return (
        <>
            <SEOHead
                title={t('services.seo.title')}
                description={t('services.seo.description')}
                keywords="kargo hizmetleri, kamyonet kargo, kamyon kargo, şehir içi kargo taşımacılığı, şehirler arası kargo, ekspres kargo, ticari kargo, parça kargo, komple kargo"
                canonical={currentPath}
                lang={currentLang}
                alternateLanguages={alternateUrls}
            />
            <div className="w-full min-h-screen relative bg-white">
                <Header activeItem={currentPath} />
                <ServicesHero />

                {/* Mobile-only text section - shown only on mobile */}
                <section className="md:hidden w-full bg-white py-8 px-4 sm:px-6">
                    <div className="w-full max-w-7xl mx-auto flex flex-col gap-4">
                        <h1
                            className="text-[#032c95] text-[24px] font-bold leading-tight"
                            style={{ fontFamily: 'Roboto, sans-serif', fontVariationSettings: '"wdth" 100' }}
                        >
                            {t('services.hero.title')}
                        </h1>

                        <p
                            className="text-[#333] text-[16px] font-semibold leading-relaxed"
                            style={{
                                fontFamily: 'Urbanist, sans-serif',
                                fontWeight: 600,
                            }}
                        >
                            {t('services.hero.description')}
                        </p>
                    </div>
                </section>

                {vehicles.map((vehicle, index) => (
                    <VehicleServiceSection
                        key={index}
                        title={vehicle.title}
                        description={vehicle.description}
                        image={vehicle.image}
                        imageAlt={vehicle.imageAlt}
                        secondaryButtonText={vehicle.secondaryButtonText}
                        onSecondaryClick={() => { navigate(contactPath); window.scrollTo(0, 0); }}
                    />
                ))}
                <Footer />
            </div>
        </>
    )
}

