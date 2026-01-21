import { Helmet } from 'react-helmet-async';

interface AlternateLanguage {
    lang: string;
    href: string;
}

interface SEOHeadProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    structuredData?: object;
    geoData?: {
        latitude?: string;
        longitude?: string;
        address?: string;
        city?: string;
        region?: string;
        postalCode?: string;
        country?: string;
    };
    alternateLanguages?: AlternateLanguage[];
    lang?: string;
}

const localeMap: Record<string, string> = {
    tr: 'tr_TR',
    en: 'en_US',
    de: 'de_DE',
};

export function SEOHead({
    title,
    description,
    keywords = 'yüksi, lojistik, kurye, nakliye, taşımacılık, motorsiklet kurye, minivan, panelvan, kamyonet, kamyon, Bursa lojistik, Türkiye lojistik',
    canonical,
    ogImage = 'https://yuksi.com.tr/logo.png',
    ogType = 'website',
    structuredData,
    geoData,
    alternateLanguages,
    lang = 'tr',
}: SEOHeadProps) {
    const baseUrl = 'https://yuksi.com.tr';
    const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
    const fullTitle = title.includes('Yüksi') ? title : `${title} | Yüksi`;

    // Default structured data for Organization
    const defaultStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': baseUrl,
        name: 'Yüksi',
        alternateName: 'Yüksi',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: fullOgImage,
        description: description,
        telephone: '+908502419316',
        email: 'info@yuksi.tr',
        priceRange: '$$',
        areaServed: {
            '@type': 'Country',
            name: 'Türkiye',
        },
        sameAs: [
            // Add social media links if available
        ],
    };

    // Merge custom structured data with default
    const finalStructuredData = structuredData || defaultStructuredData;

    // Organization structured data
    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${baseUrl}#organization`,
        name: 'Yüksi',
        alternateName: 'Yüksi',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+908502419316',
            contactType: 'customer service',
            email: 'info@yuksi.tr',
            areaServed: 'TR',
            availableLanguage: ['tr', 'en'],
        },
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Yüksi" />
            <meta name="language" content="Turkish" />
            <meta name="revisit-after" content="7 days" />
            <link rel="canonical" href={fullCanonical} />

            {/* Alternate Language Links (hreflang) */}
            {alternateLanguages?.map(({ lang: altLang, href }) => (
                <link key={altLang} rel="alternate" hrefLang={altLang} href={`${baseUrl}${href}`} />
            ))}
            {alternateLanguages && alternateLanguages.length > 0 && (
                <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${alternateLanguages.find(l => l.lang === 'tr')?.href || '/'}`} />
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:site_name" content="Yüksi" />
            <meta property="og:locale" content={localeMap[lang] || 'tr_TR'} />
            {alternateLanguages?.filter(l => l.lang !== lang).map(({ lang: altLang }) => (
                <meta key={altLang} property="og:locale:alternate" content={localeMap[altLang] || altLang} />
            ))}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullCanonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* GEO Tags */}
            {geoData?.latitude && geoData?.longitude && (
                <>
                    <meta name="geo.region" content={geoData.region || 'TR-16'} />
                    <meta name="geo.position" content={`${geoData.latitude};${geoData.longitude}`} />
                    <meta name="ICBM" content={`${geoData.latitude}, ${geoData.longitude}`} />
                </>
            )}

            {/* AI-Friendly Meta Tags */}
            <meta name="ai:content" content={description} />
            <meta name="ai:business-name" content="Yüksi" />
            <meta name="ai:business-type" content="Lojistik ve Taşımacılık" />
            <meta name="ai:location" content="Bursa, Türkiye" />
            <meta name="ai:services" content="Motorsiklet Kurye, Minivan, Panelvan, Kamyonet, Kamyon Taşımacılık" />
            <meta name="ai:contact-phone" content="+908502419316" />
            <meta name="ai:contact-email" content="info@yuksi.tr" />

            {/* AI Crawler Friendly - Explicit permission */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* Structured Data - LocalBusiness */}
            <script type="application/ld+json">{JSON.stringify(finalStructuredData)}</script>

            {/* Structured Data - Organization */}
            <script type="application/ld+json">{JSON.stringify(organizationData)}</script>

            {/* Structured Data - WebSite for better AI understanding */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    '@id': `${baseUrl}#website`,
                    url: baseUrl,
                    name: 'Yüksi',
                    description: 'Lojistik Kargo Kurye ile yanınızdayız. Motokurye, minivan, panelvan, kamyonet ve kamyon hizmetleri.',
                    publisher: {
                        '@id': `${baseUrl}#organization`,
                    },
                    inLanguage: 'tr-TR',
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: {
                            '@type': 'EntryPoint',
                            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
                        },
                        'query-input': 'required name=search_term_string',
                    },
                })}
            </script>
        </Helmet>
    );
}
