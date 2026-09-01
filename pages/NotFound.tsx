import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../constants';
import { PRIORITY_CITIES } from '../site.config';
import { cityPath } from '../routes';

/**
 * Página 404.
 * É gravada em dist/404.html pelo pré-render; o Vercel a serve com HTTP 404 real
 * para qualquer URL inexistente (nada de SPA devolvendo 200 para URL inválida).
 */
const NotFound: React.FC = () => (
  <>
    <EnhancedSEO
      title="Página não encontrada | Alumimec Estruturas Metálicas"
      description="A página que você procurava não existe ou foi movida. Veja os serviços e as localidades atendidas pela Alumimec."
      canonical="/404"
      noindex
    />

    <section className="bg-primary text-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Erro 404</p>
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-5">Página não encontrada</h1>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed">
          O endereço que você acessou não existe ou foi movido. A Alumimec continua no mesmo lugar:
          estruturas metálicas, galpões industriais, coberturas, mezaninos, escadas e portões.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/"
            className="bg-accent hover:bg-white text-white hover:text-accent px-7 py-3 rounded-full font-bold transition-colors inline-flex items-center justify-center gap-2"
          >
            Ir para a página inicial <ArrowRight size={18} />
          </Link>
          <a
            href={`https://wa.me/55${COMPANY_INFO.phone1}`}
            className="border-2 border-white hover:bg-white hover:text-primary px-7 py-3 rounded-full font-bold transition-colors inline-flex items-center justify-center"
            rel="noopener noreferrer"
            target="_blank"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>

    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-2xl font-heading font-bold text-primary mb-3">Localidades atendidas</h2>
        <p className="text-gray-600 mb-7 text-sm">
          A Alumimec é sediada em {COMPANY_INFO.addressShort} e executa obras em Curitiba e na Região
          Metropolitana de Curitiba.
        </p>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
          {PRIORITY_CITIES.map((city) => (
            <li key={city}>
              <Link
                to={cityPath(city)}
                className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 hover:border-accent hover:text-accent text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                <MapPin size={14} className="flex-shrink-0" />
                {city}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default NotFound;
