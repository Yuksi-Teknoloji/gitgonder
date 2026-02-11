import { useTranslation } from 'react-i18next'
import { Header } from '../components/organisms/Header'
import Hero from '../components/organisms/Hero'
import { BusinessPartners } from '../components/organisms/BusinessPartners'
import { ContactCTA } from '../components/organisms/ContactCTA'
import { Footer } from '../components/organisms/Footer'
import { SEOHead } from '../components/molecules/SEOHead'
import { getAlternateUrls } from '../i18n'

export default function Home() {
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language as 'tr' | 'en' | 'de'

    const alternateUrls = getAlternateUrls('home')

    return (
        <>
            <SEOHead
                title={t('home.seo.title')}
                description={t('home.seo.description')}
                keywords="gitgönder, kargo, kargo gönderme, paket gönderme, Türkiye kargo, güvenilir kargo, ekspres kargo, şehir içi kargo, şehirler arası kargo"
                canonical="/"
                lang={currentLang}
                alternateLanguages={alternateUrls}
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    '@id': 'https://yuksi.com.tr',
                    name: 'Gitgönder',
                    alternateName: 'Gitgönder',
                    url: 'https://yuksi.com.tr',
                    logo: 'https://yuksi.com.tr/logo.png',
                    description: t('home.seo.description'),
                    telephone: '+908502419316',
                    email: 'info@gitgönder.tr',
                    priceRange: '$$',
                    areaServed: {
                        '@type': 'Country',
                        name: 'Türkiye',
                    },
                }}
            />
            <div className="w-full min-h-screen relative bg-white">
                <Header activeItem="/" />
                <Hero />
                <BusinessPartners />
                <ContactCTA />
                <Footer />
            </div>
        </>
    )
}

