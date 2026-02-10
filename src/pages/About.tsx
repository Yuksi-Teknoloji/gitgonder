import { useTranslation } from 'react-i18next'
import { Header } from '../components/organisms/Header'
import { AboutUs } from '../components/organisms/AboutUs'
import { AboutContent } from '../components/organisms/AboutContent'
import { Footer } from '../components/organisms/Footer'
import { SEOHead } from '../components/molecules/SEOHead'
import { getLocalizedPath, getAlternateUrls } from '../i18n'
import { useLanguageFromUrl } from '../hooks/useLanguageFromUrl'

export default function About() {
    const { t } = useTranslation()
    const currentLang = useLanguageFromUrl()

    const currentPath = getLocalizedPath('about', currentLang)
    const alternateUrls = getAlternateUrls('about')

    return (
        <>
            <SEOHead
                title={t('about.seo.title')}
                description={t('about.seo.description')}
                keywords="gitgönder hakkında, lojistik firması, taşımacılık şirketi, güvenilir nakliye, müşteri odaklı lojistik"
                canonical={currentPath}
                lang={currentLang}
                alternateLanguages={alternateUrls}
            />
            <div className="w-full min-h-screen relative bg-white">
                <Header activeItem={currentPath} />
                <AboutUs />
                <AboutContent />
                <Footer />
            </div>
        </>
    )
}
