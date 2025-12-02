import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  schemaType?: 'WebPage' | 'LocalBusiness' | 'Service' | 'FAQPage' | 'BreadcrumbList';
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqItems?: Array<{ question: string; answer: string }>;
  services?: Array<{ name: string; description: string }>;
  locationName?: string;
  isHomePage?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonical,
  keywords = '',
  ogImage = '/logo-alumimec.jpg',
  ogType = 'website',
  schemaType = 'WebPage',
  breadcrumbs = [],
  faqItems = [],
  services = [],
  locationName,
  isHomePage = false
}) => {
  const baseUrl = 'https://alumimec.com.br';
  const fullUrl = `${baseUrl}${canonical}`;
  const fullImageUrl = `${baseUrl}${ogImage}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    url: baseUrl,
    logo: `${baseUrl}/logo-alumimec.jpg`,
    image: `${baseUrl}/alumimec-parana-brasil.png`,
    description: 'Especialistas em Estruturas Metálicas, Galpões Industriais, Coberturas, Mezaninos e Serralheria em Curitiba e Região Metropolitana',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Dep. Arnaldo Faivro Busato',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      postalCode: '83045-000',
      addressCountry: 'BR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+55${COMPANY_INFO.phone1}`,
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese'
    },
    sameAs: [
      COMPANY_INFO.facebook,
      COMPANY_INFO.instagram
    ],
    priceRange: '$$',
    telephone: `+55${COMPANY_INFO.phone1}`,
    email: COMPANY_INFO.email,
    openingHours: 'Mo-Fr 08:00-17:30'
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: COMPANY_INFO.name,
    url: baseUrl,
    image: `${baseUrl}/alumimec-parana-brasil.png`,
    description: 'Estruturas Metálicas em Curitiba - Galpões Industriais, Coberturas Metálicas, Mezaninos e Serralheria Industrial',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Dep. Arnaldo Faivro Busato',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      postalCode: '83045-000',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-25.4284',
      longitude: '-49.2733'
    },
    telephone: `+55${COMPANY_INFO.phone1}`,
    email: COMPANY_INFO.email,
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:30'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Curitiba',
        '@id': 'https://www.wikidata.org/wiki/Q3919'
      },
      {
        '@type': 'State',
        name: 'Paraná',
        '@id': 'https://www.wikidata.org/wiki/Q15499'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Estruturas Metálicas',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Galpões Industriais',
            description: 'Construção de galpões industriais metálicos pré-fabricados'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Coberturas Metálicas',
            description: 'Instalação de coberturas metálicas termoacústicas'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mezaninos Metálicos',
            description: 'Construção de mezaninos estruturais metálicos'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    }
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType === 'WebPage' ? 'WebPage' : schemaType,
    '@id': fullUrl,
    url: fullUrl,
    name: title,
    description: description,
    isPartOf: {
      '@id': `${baseUrl}/#website`
    },
    about: {
      '@id': `${baseUrl}/#organization`
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: fullImageUrl
    },
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    inLanguage: 'pt-BR'
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: COMPANY_INFO.name,
    description: 'Estruturas Metálicas em Curitiba e Região Metropolitana',
    publisher: {
      '@id': `${baseUrl}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/busca?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'pt-BR'
  };

  let breadcrumbSchema = null;
  if (breadcrumbs.length > 0) {
    breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${baseUrl}${crumb.url}`
      }))
    };
  }

  let faqSchema = null;
  if (faqItems.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    };
  }

  let serviceSchema = null;
  if (services.length > 0) {
    serviceSchema = services.map(service => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.name,
      description: service.description,
      provider: {
        '@id': `${baseUrl}/#organization`
      },
      areaServed: {
        '@type': 'City',
        name: locationName || 'Curitiba'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: service.name,
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name
            }
          }
        ]
      }
    }));
  }

  const allSchemas = [
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
    webPageSchema
  ];

  if (breadcrumbSchema) allSchemas.push(breadcrumbSchema);
  if (faqSchema) allSchemas.push(faqSchema);
  if (serviceSchema) allSchemas.push(...serviceSchema);

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4284;-49.2733" />
      <meta name="ICBM" content="-25.4284, -49.2733" />

      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content={COMPANY_INFO.name} />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${COMPANY_INFO.name}`} />

      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://cdn.tailwindcss.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {isHomePage && (
        <>
          <link rel="preload" href="/galpoes-metalicos-pre-fabricados-hero-imagem.jpg" as="image" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" as="style" />
        </>
      )}

      <script type="application/ld+json">
        {JSON.stringify(allSchemas)}
      </script>

      <meta name="theme-color" content="#1a3a6c" />
      <meta name="msapplication-TileColor" content="#1a3a6c" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
    </Helmet>
  );
};

export default EnhancedSEO;
