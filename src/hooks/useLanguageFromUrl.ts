import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLanguageFromPath } from '../i18n';

/**
 * URL'den dili algılayıp i18n'e set eden hook
 * Tüm sayfalarda kullanılabilir
 * HashRouter için hash'i kullanır
 */
export function useLanguageFromUrl() {
    const { i18n } = useTranslation();
    const location = useLocation();

    // HashRouter için hash path'ini al
    const getHashPath = (): string => {
        const hash = location.hash;
        if (!hash || hash === '#') return '/';
        return hash.replace('#', '') || '/';
    };

    const path = getHashPath();
    const detectedLang = getLanguageFromPath(path);
    const currentLang = i18n.language as 'tr' | 'en' | 'de';

    useEffect(() => {
        if (detectedLang && i18n.language !== detectedLang) {
            i18n.changeLanguage(detectedLang);
        }
    }, [detectedLang, i18n]);

    return currentLang;
}
