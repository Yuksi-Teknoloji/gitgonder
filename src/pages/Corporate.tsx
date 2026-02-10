import { useTranslation } from 'react-i18next'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'
import { CorporateForm } from '../components/organisms/CorporateForm'
import { SEOHead } from '../components/molecules/SEOHead'
import { getLocalizedPath, getAlternateUrls } from '../i18n'
import { useLanguageFromUrl } from '../hooks/useLanguageFromUrl'

export default function Corporate() {
    const { t } = useTranslation()
    const currentLang = useLanguageFromUrl()

    const currentPath = getLocalizedPath('corporate', currentLang)
    const alternateUrls = getAlternateUrls('corporate')

    return (
        <>
            <SEOHead
                title={t('corporate.seo.title')}
                description={t('corporate.seo.description')}
                keywords="gitgönder kurumsal üyelik, kurumsal lojistik, kurumsal taşımacılık, işletme lojistik, kurumsal müşteri"
                canonical={currentPath}
                lang={currentLang}
                alternateLanguages={alternateUrls}
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'ContactPage',
                    mainEntity: {
                        '@type': 'Organization',
                        name: 'Gitgönder',
                        telephone: '+908502419316',
                        email: 'info@gitgönder.tr',
                    },
                }}
            />
            <div className="w-full min-h-screen relative bg-white">
                <Header activeItem={currentPath} />
                <CorporateForm />
                <Footer />
            </div>
        </>
    )
}
