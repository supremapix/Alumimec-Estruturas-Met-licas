import React, { useEffect, useState, useRef } from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Instagram className="text-white" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Siga Nosso Instagram
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Acompanhe nossos projetos em tempo real, veja bastidores das obras e inspire-se com nossas estruturas metálicas.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <iframe
              src="https://www.instagram.com/alumimec/embed"
              title="Feed do Instagram da Alumimec Estruturas Metálicas"
              width="100%"
              height="750"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              className="w-full max-h-[90vh]"
              loading="lazy"
            />
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://www.instagram.com/alumimec/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <Instagram size={24} className="group-hover:rotate-12 transition-transform" />
            <span>Seguir @alumimec</span>
          </a>

          <div className="text-center sm:text-left">
            <p className="text-gray-600 text-sm">
              Mais de <span className="font-bold text-primary">850 projetos</span> realizados
            </p>
            <p className="text-gray-500 text-xs">
              Confira depoimentos reais de clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
