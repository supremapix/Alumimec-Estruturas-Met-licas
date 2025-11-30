import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, keywords }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
    "image": [
      "https://i.postimg.cc/zGbKgF4q/barracao-sao-jose-dos-pinhais.jpg",
      "assets/images/logo-alumimec-alt.jpg"
    ],
    "telephone": "+55" + COMPANY_INFO.phone1,
    "email": COMPANY_INFO.email,
    "url": "https://alumimec.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Dep. Arnaldo Faivro Busato",
      "addressLocality": "São José dos Pinhais",
      "addressRegion": "PR",
      "postalCode": "83045-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.5333, 
      "longitude": -49.2000 
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:30"
    },
    "priceRange": "$$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Curitiba"
      },
      {
        "@type": "City",
        "name": "São José dos Pinhais"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Paraná"
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://alumimec.com.br${canonical}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://alumimec.com.br${canonical}`} />
      <meta property="og:image" content="https://i.postimg.cc/zGbKgF4q/barracao-sao-jose-dos-pinhais.jpg" />
      <meta property="og:locale" content="pt_BR" />
      {keywords && <meta name="keywords" content={keywords} />}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;