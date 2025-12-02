import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Play, ChevronDown, ChevronRight, X, Phone, User, Building, MapPin, MessageCircle } from 'lucide-react';
import { SERVICES, GALLERY_IMAGES, VIDEOS, FAQs, TESTIMONIALS, CITIES, NEIGHBORHOODS, COMPANY_INFO, COMPARISON_DATA } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import InstagramFeed from '../components/InstagramFeed';
import { Project } from '../types';

const Home: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [galleryModal, setGalleryModal] = useState<Project | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: 'Galpão Industrial',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Novo Orçamento via Site*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Cidade:* ${formData.city}\n*Interesse:* ${formData.service}\n*Mensagem:* ${formData.message}`;
    window.open(`https://wa.me/55${COMPANY_INFO.phone1}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <EnhancedSEO
        title="Alumimec Estruturas Metálicas | Galpões e Coberturas em Curitiba"
        description="Especialistas em estruturas metálicas, galpões industriais e coberturas em Curitiba. Mais de 14 anos de experiência. Orçamento Grátis!"
        canonical="/"
        keywords="estruturas metálicas curitiba, galpões industriais, cobertura metálica, mezanino metálico, serralheria industrial, construção metálica, estruturas pré-fabricadas"
        ogImage="/galpoes-metalicos-pre-fabricados-hero-imagem.jpg"
        schemaType="WebPage"
        isHomePage={true}
        breadcrumbs={[
          { name: 'Início', url: '/' }
        ]}
        faqItems={FAQs.map(faq => ({ question: faq.question, answer: faq.answer }))}
        services={SERVICES.map(service => ({
          name: service.title,
          description: service.description
        }))}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-12">
        {/* Background Image with Animation */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 hero-bg-animate"
          style={{ backgroundImage: `url('/galpoes-metalicos-pre-fabricados-hero-imagem.jpg')` }}
        ></div>

        {/* Gradient Overlay with Pattern */}
        <div className="absolute inset-0 gradient-overlay z-10"></div>
        <div className="absolute inset-0 hero-pattern z-10"></div>

        {/* Animated Floating Elements */}
        <div className="absolute top-32 left-4 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-32 h-32 md:w-40 md:h-40 bg-accent/10 rounded-full blur-3xl animate-float delay-300"></div>

        {/* Main Content */}
        <div className="container mx-auto px-4 z-20 text-center relative">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="animate-fade-in-down mb-4 md:mb-6">
              <span className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/50 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider text-accent animate-pulse">
                +14 Anos de Excelência
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 md:mb-6 leading-tight animate-fade-in-up opacity-0 delay-100 px-2">
              Estruturas Metálicas de <span className="text-accent bg-clip-text">Alta Performance</span> em Curitiba
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-100 font-light animate-fade-in-up opacity-0 delay-200 leading-relaxed px-4">
              Especialistas em Galpões Industriais, Coberturas e Soluções Estruturais. Qualidade, segurança e prazo garantido.
            </p>

            {/* Features Pills */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 animate-fade-in-up opacity-0 delay-300 px-4">
              <span className="bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm border border-white/20 flex items-center gap-1.5 md:gap-2">
                <Check size={14} className="text-accent flex-shrink-0" /> ART e Engenharia
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm border border-white/20 flex items-center gap-1.5 md:gap-2">
                <Check size={14} className="text-accent flex-shrink-0" /> Equipe Certificada
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm border border-white/20 flex items-center gap-1.5 md:gap-2">
                <Check size={14} className="text-accent flex-shrink-0" /> Entrega no Prazo
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-scale-in opacity-0 delay-400 px-4">
              <a
                href={`https://wa.me/55${COMPANY_INFO.phone1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-accent hover:bg-white text-white hover:text-accent px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-2xl transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Fale Conosco Agora</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Nossos Serviços</span>
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Stats Bar */}
            <div className="mt-10 md:mt-16 grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto animate-fade-in opacity-0 delay-500 px-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">+850</div>
                <div className="text-xs sm:text-sm text-gray-300">Projetos</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">14+</div>
                <div className="text-xs sm:text-sm text-gray-300">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-300">Satisfação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
          <div className="animate-bounce">
            <ChevronDown size={28} className="text-white/70 md:w-8 md:h-8" />
          </div>
          <p className="text-xs text-white/60 mt-2 animate-pulse">Role para baixo</p>
        </div>
      </section>

      {/* 2. ABOUT & METRICS */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold uppercase tracking-wider text-sm">Sobre Nós</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-6">
                Alumimec Estruturas Metálicas<br/>Excelência desde 2010
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fundada com o compromisso de entregar soluções estruturais de alta qualidade, a Alumimec se consolidou como referência em Curitiba e Região Metropolitana. 
                Nossa equipe é formada por profissionais altamente capacitados, garantindo segurança e precisão em cada projeto.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm border-b-4 border-accent">
                  <span className="block text-3xl font-bold text-primary">+850</span>
                  <span className="text-sm text-gray-500">Projetos</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm border-b-4 border-accent">
                  <span className="block text-3xl font-bold text-primary">14+</span>
                  <span className="text-sm text-gray-500">Anos</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm border-b-4 border-accent">
                  <span className="block text-3xl font-bold text-primary">100%</span>
                  <span className="text-sm text-gray-500">Satisfação</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2"><Check className="text-accent" size={18} /> Equipe Certificada (NR-35)</div>
                <div className="flex items-center gap-2"><Check className="text-accent" size={18} /> Engenharia e ART</div>
                <div className="flex items-center gap-2"><Check className="text-accent" size={18} /> Atendimento Personalizado</div>
                <div className="flex items-center gap-2"><Check className="text-accent" size={18} /> Entrega no Prazo</div>
              </div>

              <a href="#contato" className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition-colors inline-block">Conheça Nossa Equipe</a>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              <img
                src="/cobertura-metalica-alumimec.png"
                alt="Obras Alumimec Estruturas Metálicas"
                className="rounded-lg shadow-2xl relative z-10 w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded shadow-lg z-20 border-l-4 border-accent">
                <p className="italic text-gray-600 mb-2">"A Alumimec transformou nosso projeto em realidade com uma agilidade impressionante."</p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                  <span className="text-sm font-bold text-primary">- Carlos Mendes</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Process Section - MODERNIZED */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-accent font-bold uppercase tracking-wider text-sm">Como Trabalhamos</span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-3">
                Nosso Processo de Trabalho
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Da consultoria inicial à entrega final, cada etapa é cuidadosamente planejada para garantir excelência e satisfação total.
              </p>
            </div>

            {/* Process Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                {
                  step: 'Consultoria',
                  icon: '💬',
                  description: 'Entendemos suas necessidades',
                  details: ['Visita técnica gratuita', 'Análise do projeto', 'Viabilidade técnica']
                },
                {
                  step: 'Projeto',
                  icon: '📐',
                  description: 'Desenvolvimento personalizado',
                  details: ['Desenho técnico detalhado', 'Cálculos estruturais', 'ART e documentação']
                },
                {
                  step: 'Aprovação',
                  icon: '✓',
                  description: 'Validação com o cliente',
                  details: ['Revisão do projeto', 'Aprovação de materiais', 'Cronograma definido']
                },
                {
                  step: 'Fabricação',
                  icon: '🏭',
                  description: 'Produção de alta qualidade',
                  details: ['Matéria-prima certificada', 'Controle de qualidade', 'Tecnologia avançada']
                },
                {
                  step: 'Montagem',
                  icon: '🔧',
                  description: 'Instalação profissional',
                  details: ['Equipe especializada', 'Segurança rigorosa', 'Prazo cumprido']
                },
                {
                  step: 'Garantia',
                  icon: '🛡️',
                  description: 'Suporte e assistência',
                  details: ['Garantia estrutural', 'Manutenção preventiva', 'Suporte contínuo']
                }
              ].map((process, idx) => (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-accent/50 overflow-hidden min-h-[280px] flex flex-col animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {/* Progress Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-full bg-white/50 animate-shimmer"></div>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                    <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%231e3c72" fill-opacity="1" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")'}}></div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300 z-10">
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {process.step}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 font-medium">
                      {process.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2 mt-auto">
                      {process.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-start text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0 group-hover:animate-pulse"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary via-blue-800 to-primary-dark rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                  Pronto para Iniciar Seu Projeto?
                </h3>
                <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                  Nossa equipe está preparada para transformar sua ideia em realidade. Solicite um orçamento sem compromisso e receba atendimento personalizado.
                </p>
                <a
                  href={`https://wa.me/55${COMPANY_INFO.phone1}?text=${encodeURIComponent('Olá! Vi o processo de trabalho no site e gostaria de solicitar um orçamento.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-white text-white hover:text-accent px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <MessageCircle size={20} />
                  <span>Solicite um Orçamento Agora</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-wider text-sm">O Que Fazemos</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Soluções Completas em Aço</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm h-16">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <Check size={16} className="text-accent mr-2" /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`https://wa.me/55${COMPANY_INFO.phone1}?text=Tenho interesse em ${encodeURIComponent(service.title)}`}
                    className="block w-full text-center bg-primary text-white py-3 rounded font-bold hover:bg-accent transition-colors"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECT (FORVIA) */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="bg-accent text-xs font-bold px-4 py-2 rounded-full inline-block mb-4 animate-pulse">ÚLTIMA OBRA REALIZADA</div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Barracão Industrial para Forvia</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              A Alumimec tem orgulho de apresentar mais uma obra concluída com excelência: o barracão industrial desenvolvido especialmente para a unidade da Forvia em São José dos Pinhais.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img
                  src="/barracao-sao-jose-dos-pinhais-barracao-forvia.jpg"
                  alt="Barracão Industrial Forvia - São José dos Pinhais"
                  className="relative rounded-lg shadow-2xl border-4 border-white/20 w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <p className="text-white font-bold text-lg mb-1">Barracão Industrial para Forvia</p>
                  <p className="text-gray-300 text-sm">São José dos Pinhais/PR</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <p className="text-gray-200 leading-relaxed">
                  Projetado com foco em <strong className="text-white">eficiência, segurança e durabilidade</strong>, o espaço atende às necessidades operacionais da empresa, contribuindo diretamente para a otimização de seus processos produtivos.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  A estrutura metálica, fornecida e instalada pela Alumimec, segue os mais altos padrões de qualidade e resistência, garantindo confiabilidade e agilidade na execução da obra. Todo o projeto foi realizado em conformidade com normas técnicas, dentro do prazo estipulado e com o compromisso de entregar soluções sob medida.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Esse projeto reforça a parceria de confiança entre a Alumimec e empresas líderes do setor automotivo, como a <strong className="text-accent">Forvia</strong>, demonstrando a capacidade da nossa equipe em entregar construções industriais com alto desempenho e excelência técnica.
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-accent">Destaques Técnicos</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    <li className="flex items-center gap-2"><Check className="text-accent flex-shrink-0" size={18} /> Área superior a 2.000m²</li>
                    <li className="flex items-center gap-2"><Check className="text-accent flex-shrink-0" size={18} /> Vãos livres amplos</li>
                    <li className="flex items-center gap-2"><Check className="text-accent flex-shrink-0" size={18} /> Pé-direito duplo</li>
                    <li className="flex items-center gap-2"><Check className="text-accent flex-shrink-0" size={18} /> Prep. ponte rolante</li>
                    <li className="flex items-center gap-2"><Check className="text-accent flex-shrink-0" size={18} /> Aço estrutural ASTM</li>
                    <li className="flex items-center gap-2"><Check className="text-accent flex-shrink-0" size={18} /> Cobertura termoacústica</li>
                    <li className="flex items-center gap-2"><Check className="text-accent flex-shrink-0" size={18} /> Prazo recorde</li>
                    <li className="flex items-center gap-2"><Check className="text-accent flex-shrink-0" size={18} /> Normas técnicas</li>
                  </ul>
                </div>

                <a href="#contato" className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all shadow-lg inline-flex items-center gap-2 group">
                  Quero um Projeto Similar
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-heading font-bold text-primary">Por que escolher Estrutura Metálica?</h2>
             <p className="text-gray-600 mt-2">Comparativo entre construção tradicional e nossos modelos</p>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full max-w-4xl mx-auto border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
               <thead className="bg-primary text-white">
                 <tr>
                   <th className="p-4 text-left">Característica</th>
                   <th className="p-4 text-left bg-primary-dark/50">Construção Tradicional</th>
                   <th className="p-4 text-left bg-accent text-white">Padrão Alumimec</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200">
                 {COMPARISON_DATA.map((row, idx) => (
                   <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                     <td className="p-4 font-bold text-gray-700">{row.feature}</td>
                     <td className="p-4 text-gray-500">{row.modelA}</td>
                     <td className="p-4 text-primary font-semibold flex items-center gap-2">
                       <Check size={16} className="text-accent" /> {row.modelB}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* 6. GALLERY */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-wider text-sm">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Nossas Obras Recentes</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((project) => (
              <div 
                key={project.id} 
                className="group relative h-64 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setGalleryModal(project)}
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                  <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                  <p className="text-sm">{project.category}</p>
                  <span className="mt-4 bg-accent px-4 py-2 rounded-full text-xs font-bold uppercase">Ver Detalhes</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VIDEOS */}
      <section id="videos" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Em Ação</h2>
            <p className="text-gray-400 mt-2">Veja nossos projetos ganhando vida</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
              <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
                <div className="relative h-48 cursor-pointer" onClick={() => setVideoModal(video.videoId)}>
                  <img 
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play fill="white" className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">O Que Dizem Nossos Clientes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{t.name}</h4>
                    <span className="text-xs text-gray-500">{t.location}</span>
                  </div>
                </div>
                <div className="absolute top-8 right-8 text-gray-200">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.0547 15.1953 15.0039 17.5508 14.5039V12.5C14.017 12.5 14.017 10.999 14.017 9.5C14.017 8.00098 15.1953 6.94922 17.5508 6.44922V4.5C13.5508 4.5 11.5508 6.94922 11.5508 9.5V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.0547 6.19531 15.0039 8.55078 14.5039V12.5C5.0166 12.5 5.0166 10.999 5.0166 9.5C5.0166 8.00098 6.19531 6.94922 8.55078 6.44922V4.5C4.55078 4.5 2.55078 6.94922 2.55078 9.5V21H5.0166Z" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOCATIONS (CITIES & NEIGHBORHOODS) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <MapPin className="text-accent" /> Cidades Atendidas (RMC)
              </h3>
              <div className="flex flex-wrap gap-2 h-64 overflow-y-auto content-start pr-2 custom-scrollbar">
                {CITIES.map(city => (
                  <Link 
                    key={city} 
                    to={`/cidade/${encodeURIComponent(city.toLowerCase())}`}
                    className="bg-white hover:bg-primary hover:text-white px-3 py-1 rounded text-sm text-gray-600 transition-colors border border-gray-200"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <MapPin className="text-accent" /> Bairros de Curitiba
              </h3>
              <div className="flex flex-wrap gap-2 h-64 overflow-y-auto content-start pr-2 custom-scrollbar">
                {NEIGHBORHOODS.map(hood => (
                  <Link 
                    key={hood} 
                    to={`/bairro/${encodeURIComponent(hood.toLowerCase())}`}
                    className="bg-white hover:bg-primary hover:text-white px-3 py-1 rounded text-sm text-gray-600 transition-colors border border-gray-200"
                  >
                    {hood}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {FAQs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left font-bold text-gray-700"
                >
                  {faq.question}
                  <div className={`transform transition-transform duration-300 ${activeAccordion === idx ? 'rotate-45 text-accent' : 'text-primary'}`}>
                    <X size={20} className={activeAccordion === idx ? "" : "rotate-45"} />
                  </div>
                </button>
                <div className={`bg-white px-4 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${activeAccordion === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. INSTAGRAM FEED */}
      <InstagramFeed />

      {/* 12. CONTACT */}
      <section id="contato" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-accent font-bold uppercase tracking-wider text-sm">Fale Conosco</span>
              <h2 className="text-4xl font-heading font-bold mb-8 mt-2">Vamos iniciar seu projeto?</h2>
              <p className="mb-8 text-gray-300">Preencha o formulário para receber um contato imediato via WhatsApp ou utilize nossos canais diretos.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded text-accent"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Localização</h4>
                    <p className="text-gray-300 text-sm">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded text-accent"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Telefones</h4>
                    <p className="text-gray-300">{COMPANY_INFO.phone1Display}</p>
                    <p className="text-gray-300">{COMPANY_INFO.phone2Display}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded text-accent"><User size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Responsável Técnico</h4>
                    <p className="text-gray-300">{COMPANY_INFO.responsible}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Orçamento Rápido</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-1 text-gray-600">Seu Nome</label>
                  <input required type="text" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-accent" 
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1 text-gray-600">Telefone</label>
                    <input required type="tel" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-accent"
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1 text-gray-600">Cidade</label>
                    <input required type="text" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-accent"
                      value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1 text-gray-600">Tipo de Serviço</label>
                  <select className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-accent"
                    value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                    {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1 text-gray-600">Detalhes do Projeto</label>
                  <textarea rows={3} className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-accent"
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="w-full bg-accent text-white font-bold py-4 rounded hover:bg-accent/90 transition-colors shadow-lg">
                  Enviar para WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MODALS */}
      {videoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in" onClick={() => setVideoModal(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <button className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full z-10 hover:bg-red-600 transition-colors" onClick={() => setVideoModal(null)}>
              <X size={24} />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${videoModal}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {galleryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in" onClick={() => setGalleryModal(null)}>
          <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-800 bg-white/80 p-2 rounded-full z-10 hover:bg-red-600 hover:text-white transition-colors" onClick={() => setGalleryModal(null)}>
              <X size={24} />
            </button>
            <img src={galleryModal.image} alt={galleryModal.title} className="w-full h-auto max-h-[70vh] object-contain bg-gray-100" />
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-2">{galleryModal.title}</h3>
              <p className="text-gray-600 mb-4">{galleryModal.description}</p>
              <a 
                href={`https://wa.me/55${COMPANY_INFO.phone1}?text=Gostei do projeto ${encodeURIComponent(galleryModal.title)}, gostaria de um orçamento similar.`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-accent text-white px-6 py-2 rounded font-bold hover:bg-opacity-90"
              >
                Solicitar Orçamento Deste Modelo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;