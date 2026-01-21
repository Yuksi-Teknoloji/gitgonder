import { useTranslation } from 'react-i18next'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'
import { CarrierForm } from '../components/organisms/CarrierForm'
import { SEOHead } from '../components/molecules/SEOHead'
import { getLocalizedPath, getAlternateUrls } from '../i18n'
import { useLanguageFromUrl } from '../hooks/useLanguageFromUrl'

export default function Carrier() {
    const { t } = useTranslation()
    const currentLang = useLanguageFromUrl()

    const currentPath = getLocalizedPath('carrier', currentLang)
    const alternateUrls = getAlternateUrls('carrier')

    return (
        <>
            <SEOHead
                title={t('carrier.seo.title')}
                description={t('carrier.seo.description')}
                keywords="kurye iş ilanları, taşıyıcı başvurusu, lojistik iş fırsatları, kurye olmak, taşımacılık işi, kurye işi"
                canonical={currentPath}
                lang={currentLang}
                alternateLanguages={alternateUrls}
            />
            <Header activeItem={currentPath} />
            <CarrierForm />
            <Footer />
        </>
    )
}
