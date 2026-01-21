import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/organisms/Header'
import { ServicesHero } from '../components/organisms/ServicesHero'
import { VehicleServiceSection } from '../components/organisms/VehicleServiceSection'
import { Footer } from '../components/organisms/Footer'
import { SEOHead } from '../components/molecules/SEOHead'
import { getLocalizedPath, getAlternateUrls } from '../i18n'
import { useLanguageFromUrl } from '../hooks/useLanguageFromUrl'
import motorcycleImg from '../assets/services/motorcycle.png'
import minivanImg from '../assets/services/minivan.png'
import panelvanImg from '../assets/services/panelvan.png'
import kamyonetImg from '../assets/services/kamyonet.png'
import kamyonImg from '../assets/services/kamyon.png'

export default function Services() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const currentLang = useLanguageFromUrl()

    const currentPath = getLocalizedPath('services', currentLang)
    const alternateUrls = getAlternateUrls('services')
    const carrierPath = getLocalizedPath('carrier', currentLang)

    const vehicles = [
        {
            title: t('services.motorcycle.title'),
            description: t('services.motorcycle.description'),
            image: motorcycleImg,
            imageAlt: `Yüksi ${t('services.motorcycle.title')}`,
            secondaryButtonText: t('services.motorcycle.buttonText'),
        },
        {
            title: t('services.minivan.title'),
            description: t('services.minivan.description'),
            image: minivanImg,
            imageAlt: `Yüksi ${t('services.minivan.title')}`,
            secondaryButtonText: t('services.minivan.buttonText'),
        },
        {
            title: t('services.panelvan.title'),
            description: t('services.panelvan.description'),
            image: panelvanImg,
            imageAlt: `Yüksi ${t('services.panelvan.title')}`,
            secondaryButtonText: t('services.panelvan.buttonText'),
        },
        {
            title: t('services.pickup.title'),
            description: t('services.pickup.description'),
            image: kamyonetImg,
            imageAlt: `Yüksi ${t('services.pickup.title')}`,
            secondaryButtonText: t('services.pickup.buttonText'),
        },
        {
            title: t('services.truck.title'),
            description: t('services.truck.description'),
            image: kamyonImg,
            imageAlt: `Yüksi ${t('services.truck.title')}`,
            secondaryButtonText: t('services.truck.buttonText'),
        },
    ]

    return (
        <>
            <SEOHead
                title={t('services.seo.title')}
                description={t('services.seo.description')}
                keywords="lojistik hizmetleri, motorsiklet kurye, minivan taşımacılık, panelvan nakliye, kamyonet sevkiyat, kamyon taşımacılık, şehir içi lojistik, şehirler arası taşımacılık"
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
                            className="text-[#FF5B04] text-[24px] font-bold leading-tight"
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
                        onSecondaryClick={() => { navigate(carrierPath); window.scrollTo(0, 0); }}
                    />
                ))}
                <Footer />
            </div>
        </>
    )
}
