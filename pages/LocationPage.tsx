import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { COMPANY_INFO, SERVICES, GALLERY_IMAGES, FAQs } from '../constants';
import { Check, ArrowRight, MapPin, Star, Shield, PenTool, Building, Play, X, ChevronDown } from 'lucide-react';

interface LocationPageProps {
  type: 'city' | 'neighborhood';
}

const LocationPage: React.FC<LocationPageProps> = ({ type }) => {
  const { locationName } = useParams<{ locationName: string }>();
  const decodedName = decodeURIComponent(locationName || '');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<boolean>(false);

  // Capitalize words
  const titleName = decodedName.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase());

  const isCity = type === 'city';
  const term = isCity ? "na cidade de" : "no bairro";
  const locationSuffix = isCity ? `em ${titleName}` : `no bairro ${titleName}`;

  const pageTitle = `Estruturas Metálicas em ${titleName} | Alumimec`;
  const description = `Procurando Estruturas Metálicas ${locationSuffix}? A Alumimec é especialista em Galpões, Coberturas e Serralheria Industrial com atendimento ${locationSuffix}. Orçamento Grátis.`;

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <EnhancedSEO
        title={pageTitle}
        description={description}
        canonical={`/${isCity ? 'cidade' : 'bairro'}/${locationName}`}
        keywords={`estruturas metálicas ${titleName}, galpão industrial ${titleName}, serralheria ${titleName}, cobertura metálica ${titleName}, mezanino ${titleName}, alumimec ${titleName}, construção metálica ${titleName}`}
        ogImage="/galpoes-metalicos-pre-fabricados-hero-imagem.jpg"
        schemaType="LocalBusiness"
        locationName={titleName}
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: isCity ? 'Cidades' : 'Bairros', url: isCity ? '/cidade' : '/bairro' },
          { name: titleName, url: `/${isCity ? 'cidade' : 'bairro'}/${locationName}` }
        ]}
        faqItems={FAQs.slice(0, 5).map(faq => ({ question: faq.question, answer: faq.answer }))}
        services={SERVICES.slice(0, 3).map(service => ({
          name: service.title,
          description: service.description
        }))}
      />

      {/* Header Location */}
      <section className="bg-primary text-white py-12 md:py-32 relative overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center pt-24 md:pt-28 lg:pt-32 pb-12">
        {/* Background Image with Animation */}
        <div className="absolute inset-0 bg-[url('/galpoes-metalicos-pre-fabricados-hero-imagem.jpg')] opacity-30 bg-cover bg-center hero-bg-animate"></div>

        {/* Gradient Overlay with Pattern */}
        <div className="absolute inset-0 gradient-overlay"></div>
        <div className="absolute inset-0 hero-pattern"></div>

        {/* Animated Floating Elements */}
        <div className="absolute top-10 right-4 md:right-10 w-32 h-32 md:w-40 md:h-40 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-4 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-accent/10 rounded-full blur-3xl animate-float delay-300"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge with Animation */}
            <div className="animate-fade-in-down mb-4 md:mb-6">
              <span className="bg-accent/20 backdrop-blur-sm border border-accent/50 text-accent px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase inline-block shadow-lg tracking-wider animate-pulse">
                <MapPin size={12} className="inline mr-1.5 md:mr-2 md:w-4 md:h-4" />
                Atendimento {locationSuffix}
              </span>
            </div>

            {/* Main Heading with Animation */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 md:mb-6 text-shadow animate-fade-in-up opacity-0 delay-100 px-2">
              Estruturas Metálicas <br className="hidden sm:block"/>
              <span className="text-accent">{titleName}</span>
            </h1>

            {/* Subtitle with Animation */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-100 font-light mb-6 md:mb-8 animate-fade-in-up opacity-0 delay-200 leading-relaxed px-4">
              Líder em galpões industriais, coberturas e soluções em aço. Trazendo qualidade e tecnologia construtiva para sua obra {locationSuffix}.
            </p>

            {/* Features Pills */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 animate-fade-in-up opacity-0 delay-300 px-4">
              <span className="bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm border border-white/20 flex items-center gap-1.5 md:gap-2">
                <Shield size={14} className="text-accent flex-shrink-0" /> ART e Engenharia
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm border border-white/20 flex items-center gap-1.5 md:gap-2">
                <Building size={14} className="text-accent flex-shrink-0" /> +850 Projetos
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm border border-white/20 flex items-center gap-1.5 md:gap-2">
                <PenTool size={14} className="text-accent flex-shrink-0" /> 14+ Anos
              </span>
            </div>

            {/* CTA Buttons with Animation */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 animate-scale-in opacity-0 delay-400 px-4">
              <a
                href="#contato"
                className="group bg-accent hover:bg-white text-white hover:text-accent px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-2xl transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Ver Serviços</span>
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Local Stats */}
            <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in opacity-0 delay-500 px-4">
              <div className="flex items-center gap-2">
                <Star className="text-accent" size={18} fill="currentColor" />
                <span className="text-xs md:text-sm">Avaliação 5.0</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-accent" size={18} />
                <span className="text-xs md:text-sm">Atendimento Local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area - 4 SEO Texts with Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-20">
              
              {/* TEXTO 1: Introdução e Expertise */}
              <article className="flex flex-col gap-6">
                <div className="relative">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                    Expertise em Construção Metálica {locationSuffix}
                  </h2>
                  <div className="w-20 h-1 bg-accent mb-6"></div>
                </div>
                
                <img
                  src="/cobertura-metalica.jpg"
                  alt={`Cobertura metálica Alumimec ${locationSuffix}`}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-4 hover:scale-[1.01] transition-transform duration-500"
                />

                <div className="prose prose-lg text-gray-600 leading-relaxed text-justify">
                  <p>
                    A <strong>Alumimec Estruturas Metálicas</strong> orgulha-se de ser uma referência no setor de construção civil, agora reforçando sua presença e atendimento personalizado <strong>{locationSuffix}</strong>. Com mais de uma década de experiência, entendemos que cada região possui suas especificidades, seja em relação ao solo, clima ou logística urbana. Por isso, trazemos soluções sob medida para quem busca durabilidade, segurança e custo-benefício em obras de aço.
                  </p>
                  <p className="mt-4">
                    Optar por estruturas metálicas ao construir <strong>{locationSuffix}</strong> é uma decisão inteligente. O aço oferece uma relação peso-resistência superior ao concreto armado, permitindo fundações mais leves e econômicas. Além disso, a precisão milimétrica de nossas peças, fabricadas em ambiente controlado e apenas montadas no local, reduz drasticamente o desperdício de materiais e o tempo de canteiro de obra. Isso significa menos entulho, menos barulho e uma entrega muito mais rápida para o seu empreendimento.
                  </p>
                  <p className="mt-4">
                    Nossa equipe de engenheiros e técnicos está preparada para atender desde pequenas ampliações comerciais até grandes complexos industriais na região. Seguimos rigorosamente todas as normas técnicas vigentes (ABNT NBR 8800, NBR 6123) e normas de segurança (NR-35), garantindo que sua estrutura não seja apenas esteticamente moderna, mas também robusta e segura para suportar as cargas e intempéries locais.
                  </p>
                </div>
              </article>

              {/* TEXTO 2: Galpões e Indústria */}
              <article className="flex flex-col gap-6 bg-gray-50 p-8 rounded-2xl border-l-4 border-primary">
                <div className="relative">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2 flex items-center gap-3">
                    <Building className="text-accent" size={32} /> Galpões Industriais e Comerciais
                  </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="prose prose-lg text-gray-600 leading-relaxed text-justify flex-1">
                    <p>
                      O desenvolvimento econômico <strong>{locationSuffix}</strong> demanda espaços amplos e versáteis. A Alumimec é especialista na fabricação e montagem de <strong>galpões metálicos</strong>, a solução ideal para centros logísticos, fábricas, armazéns e centros comerciais na região. Ao contrário das construções convencionais, nossos pórticos metálicos permitem vencer grandes vãos livres sem a necessidade de pilares centrais, otimizando o aproveitamento de 100% da área interna.
                    </p>
                    <p className="mt-4">
                      Para empresários e investidores <strong>{locationSuffix}</strong>, o tempo é dinheiro. Nossos galpões são pré-fabricados, o que permite que a montagem ocorra de forma paralela à preparação do terreno e fundação. Entregamos sua obra pronta para operação em um prazo significativamente menor do que a alvenaria tradicional. Além disso, a flexibilidade do aço permite futuras expansões facilitadas, acompanhando o crescimento do seu negócio sem a necessidade de demolições complexas.
                    </p>
                  </div>
                  <img
                    src="/alumimec-curitiba-orcamentos.jpg"
                    alt={`Galpão industrial metálico ${locationSuffix}`}
                    className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                   <li className="bg-white p-3 rounded shadow-sm flex items-center gap-3 text-sm font-bold text-primary"><Check className="text-accent"/> Estruturas para Ponte Rolante</li>
                   <li className="bg-white p-3 rounded shadow-sm flex items-center gap-3 text-sm font-bold text-primary"><Check className="text-accent"/> Pé Direito Duplo ou Triplo</li>
                   <li className="bg-white p-3 rounded shadow-sm flex items-center gap-3 text-sm font-bold text-primary"><Check className="text-accent"/> Fechamentos Metálicos ou Misto</li>
                   <li className="bg-white p-3 rounded shadow-sm flex items-center gap-3 text-sm font-bold text-primary"><Check className="text-accent"/> Ventilação Natural (Lanternim)</li>
                </ul>
              </article>

              {/* TEXTO 3: Coberturas e Conforto */}
              <article className="flex flex-col gap-6">
                <div className="relative">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2 flex items-center gap-3">
                    <Shield className="text-accent" size={32} /> Coberturas Termoacústicas Premium
                  </h2>
                  <div className="w-20 h-1 bg-accent mb-6"></div>
                </div>

                <img
                  src="/cobertura-metalica-alumimec.png"
                  alt={`Cobertura termoacústica ${locationSuffix}`}
                  className="w-full h-[350px] object-cover rounded-xl shadow-lg mb-4"
                />

                <div className="prose prose-lg text-gray-600 leading-relaxed text-justify">
                  <p>
                    O clima da nossa região exige proteções eficientes. Seja para proteger seu estoque, sua frota ou criar uma área de lazer confortável, as <strong>coberturas metálicas da Alumimec</strong> são projetadas para oferecer a máxima performance <strong>{locationSuffix}</strong>. Trabalhamos com telhas de aço galvanizado e galvalume, materiais de altíssima resistência à corrosão atmosférica, garantindo uma vida útil prolongada mesmo sob sol e chuva constantes.
                  </p>
                  <p className="mt-4">
                    Um dos nossos grandes diferenciais para os clientes <strong>{locationSuffix}</strong> é a utilização de telhas sanduíche (termoacústicas). Compostas por duas chapas de aço e um núcleo isolante (EPS ou PIR), elas funcionam como uma barreira térmica excepcional, reduzindo a temperatura interna nos dias quentes e mantendo o ambiente agradável no inverno. Além disso, reduzem significativamente o ruído de impacto da chuva, proporcionando um ambiente de trabalho ou lazer muito mais silencioso e produtivo.
                  </p>
                  <p className="mt-4">
                    Executamos desde coberturas planas e em arco até sheds industriais e pergolados residenciais sofisticados. Cada projeto é calculado para suportar ventos fortes e tempestades características da região, garantindo a tranquilidade total do proprietário.
                  </p>
                </div>
              </article>

              {/* TEXTO 4: Mezaninos e Otimização */}
              <article className="flex flex-col gap-6 bg-primary text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                    <PenTool className="text-accent" size={32} /> Ampliação Inteligente com Mezaninos
                  </h2>

                  <div className="flex flex-col lg:flex-row gap-8">
                     <div className="flex-1 text-gray-100 leading-relaxed text-justify space-y-4">
                       <p>
                         A falta de espaço é um problema comum em áreas urbanas valorizadas como <strong>{titleName}</strong>. A solução mais inteligente e econômica para duplicar sua área útil sem a necessidade de mudar de endereço é a instalação de <strong>mezaninos metálicos</strong>. A Alumimec projeta estruturas leves e independentes que se adaptam perfeitamente ao seu imóvel existente.
                       </p>
                       <p>
                         Ideais para escritórios, estoques, lojas de shopping ou áreas de produção, nossos mezaninos são instalados com fixação por parafusos, o que permite uma obra limpa, seca e extremamente rápida. Isso significa que sua empresa <strong>{locationSuffix}</strong> pode continuar operando com o mínimo de interferência durante a montagem.
                       </p>
                       <p>
                         Utilizamos vigas W e painéis wall ou piso metálico xadrez, conforme a necessidade de carga (kg/m²). Transforme o pé-direito ocioso do seu imóvel em metros quadrados rentáveis com a segurança e a engenharia de ponta da Alumimec.
                       </p>
                     </div>
                     <div className="lg:w-1/3">
                        <img
                          src="/mezaninos-metalicos-estruturais.png"
                          alt={`Mezanino metálico ${locationSuffix}`}
                          className="w-full h-full object-cover rounded-lg border-4 border-white/20 shadow-lg"
                        />
                     </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <a 
                      href={`https://wa.me/55${COMPANY_INFO.phone1}?text=Tenho interesse em um Mezanino ${locationSuffix}`}
                      className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      Orçar Mezanino Agora
                    </a>
                  </div>
                </div>
              </article>

            </div>

            {/* Sidebar Right */}
            <div className="space-y-8">
              
              {/* Sticky Contact Card */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24 z-10">
                <div className="text-center mb-6">
                   <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                     <MapPin size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-primary">Atendimento Prioritário</h3>
                   <p className="text-gray-500 font-medium">{titleName}</p>
                </div>
                
                <p className="text-sm text-gray-500 text-center mb-6">
                  Equipe técnica pronta para visitar sua obra em {titleName} e realizar um orçamento sem compromisso.
                </p>
                
                <a 
                  href={`https://wa.me/55${COMPANY_INFO.phone1}?text=Olá, sou de ${titleName} e gostaria de agendar uma visita.`}
                  className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-4 rounded-xl text-center transition-all shadow-lg hover:shadow-xl mb-4 flex items-center justify-center gap-2"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 filter brightness-0 invert" />
                  Chamar no WhatsApp
                </a>
                
                <div className="text-center border-t border-gray-100 pt-4">
                   <p className="font-bold text-primary text-lg">{COMPANY_INFO.phone1Display}</p>
                   <p className="text-sm text-gray-500">{COMPANY_INFO.email}</p>
                </div>
              </div>

              {/* Service List */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                 <h4 className="font-bold mb-4 text-primary text-lg flex items-center gap-2">
                   <Star size={18} className="text-accent" fill="currentColor"/> Serviços em Destaque
                 </h4>
                 <ul className="space-y-3">
                   {SERVICES.map(s => (
                     <li key={s.id} className="border-b border-gray-200 pb-2 last:border-0 hover:pl-2 transition-all">
                       <Link to="/#servicos" className="hover:text-accent transition-colors block text-gray-700 font-medium">
                         • {s.title}
                       </Link>
                     </li>
                   ))}
                 </ul>
              </div>

              {/* Why Choose Us */}
              <div className="bg-primary text-white p-6 rounded-xl">
                <h4 className="font-bold mb-4 text-lg">Por que Alumimec?</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <Check className="text-accent shrink-0" />
                    <span>Orçamento transparente sem surpresas no final.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-accent shrink-0" />
                    <span>Cumprimento rigoroso dos prazos acordados.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-accent shrink-0" />
                    <span>Acompanhamento de engenheiro em todas as etapas.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-accent shrink-0" />
                    <span>Materiais certificados com garantia de fábrica.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 inline-block">Veja na Prática</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Estruturas Metálicas que Transformam {titleName}
              </h2>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Veja como entregamos projetos de alta qualidade com prazos reduzidos. Cada estrutura é fabricada com precisão e montada por profissionais certificados.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-100">Engenharia de precisão para cada projeto</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-100">Redução de até 60% no tempo de obra</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-100">Garantia de 5 anos em todas as estruturas</span>
                </li>
              </ul>
              <a
                href={`https://wa.me/55${COMPANY_INFO.phone1}?text=Olá! Vi o vídeo e gostaria de um orçamento para ${titleName}`}
                className="inline-block bg-accent hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg transform hover:-translate-y-1"
              >
                Solicitar Orçamento Agora
              </a>
            </div>

            <div className="relative group cursor-pointer" onClick={() => setVideoModal(true)}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="https://img.youtube.com/vi/Zk7W4W0l2yA/maxresdefault.jpg"
                  alt="Vídeo Alumimec Estruturas Metálicas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play fill="white" className="text-white ml-1" size={32} />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-300 text-sm">Clique para assistir nosso processo de trabalho</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Perguntas Frequentes sobre Estruturas Metálicas em {titleName}
            </h2>
            <p className="text-gray-600 text-lg">
              Tire suas dúvidas sobre nossos serviços e processos
            </p>
          </div>

          <div className="space-y-4">
            {FAQs.slice(0, 8).map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <span className="font-bold text-gray-800 pr-4">{faq.question}</span>
                  <ChevronDown
                    size={24}
                    className={`text-primary flex-shrink-0 transform transition-transform duration-300 ${
                      activeAccordion === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`bg-white px-5 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                    activeAccordion === idx ? 'max-h-96 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 p-8 rounded-xl">
            <p className="text-gray-600 mb-4">Não encontrou a resposta que procurava?</p>
            <a
              href={`https://wa.me/55${COMPANY_INFO.phone1}?text=Tenho uma dúvida sobre estruturas metálicas em ${titleName}`}
              className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-bold transition-colors"
            >
              Fale Diretamente com um Especialista
            </a>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Seu projeto em {titleName} começa aqui
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            Não perca tempo com obras demoradas e com desperdício. Escolha a eficiência das estruturas metálicas Alumimec.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/55${COMPANY_INFO.phone1}`}
              className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Falar com Especialista
            </a>
            <Link 
              to="/#galeria"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all"
            >
              Ver Nossas Obras
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setVideoModal(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full z-10 hover:bg-red-600 transition-colors"
              onClick={() => setVideoModal(false)}
            >
              <X size={24} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Zk7W4W0l2yA?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LocationPage;