import { useTranslation } from 'react-i18next'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'
import { ContactFormSection } from '../components/organisms/ContactFormSection'
import { SEOHead } from '../components/molecules/SEOHead'
import { getLocalizedPath, getAlternateUrls } from '../i18n'
import { useLanguageFromUrl } from '../hooks/useLanguageFromUrl'

export default function Contact() {
    const { t } = useTranslation()
    const currentLang = useLanguageFromUrl()

    const currentPath = getLocalizedPath('contact', currentLang)
    const alternateUrls = getAlternateUrls('contact')

    return (
        <>
            <SEOHead
                title={t('contact.seo.title')}
                description={t('contact.seo.description')}
                keywords="yüksi iletişim, lojistik firması iletişim, taşımacılık telefon, nakliye email"
                canonical={currentPath}
                lang={currentLang}
                alternateLanguages={alternateUrls}
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'ContactPage',
                    mainEntity: {
                        '@type': 'Organization',
                        name: 'Yüksi',
                        telephone: '+908502419316',
                        email: 'info@yuksi.tr',
                    },
                }}
            />
            <div className="w-full min-h-screen relative bg-white">
                <Header activeItem={currentPath} />
                <ContactFormSection />
                <Footer />
            </div>
        </>
    )
}
