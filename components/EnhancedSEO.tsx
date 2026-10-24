import React from "react";
import { Helmet } from "react-helmet-async";
import { COMPANY_INFO } from "../constants";
import {
  SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
  NAP,
  SERVICE_ENTITIES,
  ENTITY_STATEMENT,
} from "../site.config";

interface EnhancedSEOProps {
  title: string;
  description: string;
  /** Caminho absoluto a partir da raiz, já em slug. Ex.: "/cidade/sao-jose-dos-pinhais" */
  canonical: string;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  /** FAQPage só é declarado quando as perguntas estão visíveis E a página é elegível. */
  faqItems?: Array<{ question: string; answer: string }>;
  /** Serviços descritos na página, para gerar entidades Service com provider único. */
  services?: Array<{ name: string; description: string }>;
  /** Nome do local atendido, quando a página é de cidade/bairro. */
  locationName?: string;
  isHomePage?: boolean;
  /** Quando true, a página é servida com noindex (ex.: variações sem valor próprio). */
  noindex?: boolean;
}

const abs = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * Grafo de entidade único e consistente.
 *
 * - Uma única empresa Alumimec (@id .../#organization), tipada como LocalBusiness
 *   (subtipo de Organization), evitando entidades duplicadas.
 * - WebSite (@id .../#website) com publisher apontando para a empresa.
 * - WebPage isPartOf WebSite e about Organization.
 * - Service provider Organization.
 *
 * Não são declarados: aggregateRating, review, geo, foundingDate, numberOfEmployees
 * ou qualquer métrica não comprovada no repositório.
 */
const buildOrganization = () => ({
  "@type": ["Organization", "LocalBusiness"],
  "@id": ORGANIZATION_ID,
  name: COMPANY_INFO.name,
  alternateName: "Alumimec",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: abs("/logo-alumimec.jpg"),
    contentUrl: abs("/logo-alumimec.jpg"),
    width: 1200,
    height: 1200,
    caption: COMPANY_INFO.name,
  },
  image: { "@id": `${SITE_URL}/#logo` },
  description: ENTITY_STATEMENT,
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    addressRegion: NAP.addressRegion,
    postalCode: NAP.postalCode,
    addressCountry: NAP.addressCountry,
  },
  telephone: `+55${COMPANY_INFO.phone1}`,
  email: COMPANY_INFO.email,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `+55${COMPANY_INFO.phone1}`,
      contactType: "sales",
      areaServed: "Curitiba e região metropolitana",
      availableLanguage: ["Portuguese"],
    },
  ],
  sameAs: [COMPANY_INFO.facebook, COMPANY_INFO.instagram],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:30",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Curitiba",
      sameAs: "https://www.wikidata.org/wiki/Q3919",
    },
    {
      "@type": "City",
      name: "São José dos Pinhais",
      sameAs: "https://www.wikidata.org/wiki/Q986378",
    },
    { "@type": "AdministrativeArea", name: "Região Metropolitana de Curitiba" },
  ],
  knowsAbout: SERVICE_ENTITIES.map((s) => s.name),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Estruturas Metálicas",
    itemListElement: SERVICE_ENTITIES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
    })),
  },
});

const buildWebSite = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: COMPANY_INFO.name,
  description: "Estruturas metálicas em Curitiba e Região Metropolitana",
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "pt-BR",
});

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonical,
  ogImage = "/galpoes-metalicos-pre-fabricados-hero-imagem.jpg",
  ogType = "website",
  breadcrumbs = [],
  faqItems = [],
  services = [],
  locationName,
  isHomePage = false,
  noindex = false,
}) => {
  const fullUrl = abs(canonical);
  const fullImageUrl = abs(ogImage);

  const webPage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${fullUrl}#webpage`,
    url: fullUrl,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: fullImageUrl,
    },
    inLanguage: "pt-BR",
  };

  const graph: Record<string, unknown>[] = [
    buildOrganization(),
    buildWebSite(),
    webPage,
  ];

  if (breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${fullUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: abs(crumb.url),
      })),
    });
    webPage.breadcrumb = { "@id": `${fullUrl}#breadcrumb` };
  }

  if (faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${fullUrl}#faq`,
      isPartOf: { "@id": `${fullUrl}#webpage` },
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  services.forEach((service) => {
    graph.push({
      "@type": "Service",
      "@id": `${fullUrl}#service-${service.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`,
      serviceType: service.name,
      name: locationName ? `${service.name} em ${locationName}` : service.name,
      description: service.description,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: locationName
        ? { "@type": "Place", name: locationName }
        : [
            { "@type": "City", name: "Curitiba" },
            {
              "@type": "AdministrativeArea",
              name: "Região Metropolitana de Curitiba",
            },
          ],
      isRelatedTo: { "@id": ORGANIZATION_ID },
    });
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <Helmet prioritizeSeoTags>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta
        name="robots"
        content={
          noindex
            ? "noindex, follow"
            : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        }
      />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      <meta name="geo.region" content="BR-PR" />
      <meta
        name="geo.placename"
        content={locationName || NAP.addressLocality}
      />

      <meta name="author" content={COMPANY_INFO.name} />

      {isHomePage && (
        <link
          rel="preload"
          href="/galpoes-metalicos-pre-fabricados-hero-imagem.jpg"
          as="image"
        />
      )}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default EnhancedSEO;
