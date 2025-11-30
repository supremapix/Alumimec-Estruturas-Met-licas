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
    "image": COMPANY_INFO.logo,
    "telephone": COMPANY_INFO.phone1Display,
    "email": COMPANY_INFO.email,
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
    "priceRange": "$$$"
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
      <meta property="og:image" content={COMPANY_INFO.logo} />
      {keywords && <meta name="keywords" content={keywords} />}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;