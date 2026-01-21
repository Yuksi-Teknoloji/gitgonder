import { useTranslation } from 'react-i18next'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'
import { DealerForm } from '../components/organisms/DealerForm'
import { SEOHead } from '../components/molecules/SEOHead'
import { getLocalizedPath, getAlternateUrls } from '../i18n'
import { useLanguageFromUrl } from '../hooks/useLanguageFromUrl'

export default function Dealer() {
    const { t } = useTranslation()
    const currentLang = useLanguageFromUrl()

    const currentPath = getLocalizedPath('dealer', currentLang)
    const alternateUrls = getAlternateUrls('dealer')

    return (
        <>
            <SEOHead
                title={t('dealer.seo.title')}
                description={t('dealer.seo.description')}
                keywords="yüksi bayi, franchise, bayi başvurusu, lojistik bayi, taşımacılık bayi, Türkiye bayi"
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
                <DealerForm />
                <Footer />
            </div>
        </>
    )
}
