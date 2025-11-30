import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { COMPANY_INFO, SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

interface LocationPageProps {
  type: 'city' | 'neighborhood';
}

const LocationPage: React.FC<LocationPageProps> = ({ type }) => {
  const { locationName } = useParams<{ locationName: string }>();
  const decodedName = decodeURIComponent(locationName || '');
  
  // Capitalize words
  const titleName = decodedName.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase());
  
  const isCity = type === 'city';
  const term = isCity ? "na cidade de" : "no bairro";
  
  const pageTitle = `Estruturas Metálicas em ${titleName} | Alumimec`;
  const description = `Procurando Estruturas Metálicas em ${titleName}? A Alumimec é especialista em Galpões, Coberturas e Serralheria Industrial com atendimento em ${titleName}.`;

  return (
    <>
      <SEO 
        title={pageTitle}
        description={description}
        canonical={`/${isCity ? 'cidade' : 'bairro'}/${locationName}`}
        keywords={`estruturas metálicas ${titleName}, galpão ${titleName}, serralheria ${titleName}, cobertura metálica ${titleName}`}
      />

      {/* Header Location */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=1920&fit=crop')] opacity-20 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="bg-accent text-white px-3 py-1 rounded text-sm font-bold uppercase mb-4 inline-block">Atendimento em {titleName}</span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Estruturas Metálicas {term} <span className="text-accent">{titleName}</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Qualidade industrial, segurança e os melhores prazos para sua obra na região.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content Left */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Text Block 1 */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Soluções em Aço para {titleName}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A <strong>Alumimec</strong> traz para {titleName} o que há de mais moderno em construção metálica. Se você planeja construir ou reformar {term} {titleName}, nossa equipe técnica oferece suporte completo, desde o projeto de engenharia até a montagem final.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As estruturas metálicas oferecem rapidez na execução e redução de desperdícios, sendo a escolha ideal para o crescimento acelerado da região de {titleName}.
                </p>
              </div>

              {/* Image Break */}
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&h=400&fit=crop" 
                alt={`Estrutura metálica obra em ${titleName}`} 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />

              {/* Text Block 2 */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Galpões Industriais e Comerciais em {titleName}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Empresas e comércios de {titleName} optam cada vez mais por galpões metálicos devido ao custo-benefício e versatilidade. Nossas estruturas permitem grandes vãos livres, facilitando o layout interno e a logística do seu negócio local.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                  <li className="flex items-center gap-2 text-gray-700"><Check size={18} className="text-accent"/> Vencimento de grandes vãos</li>
                  <li className="flex items-center gap-2 text-gray-700"><Check size={18} className="text-accent"/> Alta resistência estrutural</li>
                  <li className="flex items-center gap-2 text-gray-700"><Check size={18} className="text-accent"/> Menor carga na fundação</li>
                  <li className="flex items-center gap-2 text-gray-700"><Check size={18} className="text-accent"/> Valorização do imóvel em {titleName}</li>
                </ul>
              </div>

              {/* Text Block 3 */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h2 className="text-xl font-bold text-primary mb-3">Coberturas Termoacústicas</h2>
                <p className="text-gray-600 mb-4">
                  O conforto térmico é essencial. Em nossas obras em {titleName}, utilizamos telhas sanduíche (EPS/PIR) que reduzem drasticamente o calor e o ruído externo, ideal para indústrias e residências na região.
                </p>
                <a href={`https://wa.me/55${COMPANY_INFO.phone1}`} className="text-accent font-bold hover:underline flex items-center gap-1">
                  Pedir cotação de cobertura <ArrowRight size={16}/>
                </a>
              </div>

              {/* Text Block 4 */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Por que contratar a Alumimec em {titleName}?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Com mais de 14 anos de mercado, conhecemos as especificidades do solo e clima de Curitiba e Região Metropolitana. Atender {titleName} com agilidade é nossa prioridade. Possuímos frota própria e equipes de montagem certificadas com NR-35 (Trabalho em Altura), garantindo que sua obra em {titleName} seja segura e siga todas as normas vigentes.
                </p>
              </div>

            </div>

            {/* Sidebar Right */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">Solicite um Orçamento</h3>
                <p className="text-sm text-gray-500 text-center mb-6">Atendimento prioritário para {titleName}</p>
                <a 
                  href={`https://wa.me/55${COMPANY_INFO.phone1}?text=Olá, sou de ${titleName} e gostaria de um orçamento.`}
                  className="block w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg text-center hover:brightness-105 transition-all shadow-md mb-4"
                >
                  Chamar no WhatsApp
                </a>
                <div className="text-center">
                   <p className="font-bold text-primary">{COMPANY_INFO.phone1Display}</p>
                   <p className="text-sm text-gray-500">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                 <h4 className="font-bold mb-4 text-primary">Serviços Populares</h4>
                 <ul className="space-y-2 text-sm">
                   {SERVICES.map(s => (
                     <li key={s.id} className="border-b border-gray-200 pb-2 last:border-0">
                       <Link to="/#servicos" className="hover:text-accent transition-colors block">
                         • {s.title}
                       </Link>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Pronto para construir em {titleName}?</h2>
          <a 
            href={`https://wa.me/55${COMPANY_INFO.phone1}`}
            className="bg-accent text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors inline-block"
          >
            Falar com Engenheiro
          </a>
        </div>
      </section>
    </>
  );
};

export default LocationPage;