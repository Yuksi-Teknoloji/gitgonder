import { useTranslation } from 'react-i18next'
import { Header } from '../components/organisms/Header'
import { HelpHero } from '../components/organisms/HelpHero'
import { HelpContent } from '../components/organisms/HelpContent'
import { Footer } from '../components/organisms/Footer'
import { SEOHead } from '../components/molecules/SEOHead'
import { getLocalizedPath, getAlternateUrls } from '../i18n'
import { useLanguageFromUrl } from '../hooks/useLanguageFromUrl'

export default function Help() {
    const { t } = useTranslation()
    const currentLang = useLanguageFromUrl()

    const currentPath = getLocalizedPath('help', currentLang)
    const alternateUrls = getAlternateUrls('help')

    return (
        <>
            <SEOHead
                title={t('help.seo.title')}
                description={t('help.seo.description')}
                keywords="gitgönder yardım, lojistik destek, müşteri hizmetleri, sık sorulan sorular, teknik destek, kullanım kılavuzu"
                canonical={currentPath}
                lang={currentLang}
                alternateLanguages={alternateUrls}
            />
            <div className="w-full min-h-screen relative bg-white">
                <Header activeItem={currentPath} />
                <HelpHero />
                <HelpContent />
                <Footer />
            </div>
        </>
    )
}
