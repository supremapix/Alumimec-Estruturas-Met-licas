import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Col 1: Brand */}
          <div className="text-center sm:text-left">
            <div className="bg-white rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 md:mb-6 mx-auto sm:mx-0 p-0.5 overflow-hidden">
               <img
                 src="/logo-alumimec.jpg"
                 alt="Logo Alumimec Estruturas Metálicas"
                 className="w-full h-full object-cover rounded-full scale-105"
               />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-bold mb-3 md:mb-4">ALUMIMEC</h3>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm leading-relaxed">
              Especialistas em estruturas metálicas, galpões e coberturas industriais. Qualidade e compromisso desde 2010.
            </p>
            <div className="flex gap-3 md:gap-4 justify-center sm:justify-start">
              <a href={COMPANY_INFO.facebook} target="_blank" rel="noreferrer" className="bg-primary hover:bg-accent p-2 rounded transition-colors"><Facebook size={18} className="md:w-5 md:h-5" /></a>
              <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className="bg-primary hover:bg-accent p-2 rounded transition-colors"><Instagram size={18} className="md:w-5 md:h-5" /></a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 border-b border-gray-700 pb-2 inline-block">Nossos Serviços</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link to={`/#servicos`} className="hover:text-accent transition-colors flex items-center gap-2 justify-center sm:justify-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span> {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 border-b border-gray-700 pb-2 inline-block">Contato</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-300 text-sm">
              <li className="flex gap-2 md:gap-3 items-start justify-center sm:justify-start">
                <MapPin className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <span className="text-xs md:text-sm">{COMPANY_INFO.addressShort}</span>
              </li>
              <li className="flex gap-2 md:gap-3 items-start justify-center sm:justify-start">
                <Phone className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <div className="flex flex-col text-xs md:text-sm">
                  <span>{COMPANY_INFO.phone1Display}</span>
                  <span>{COMPANY_INFO.phone2Display}</span>
                </div>
              </li>
              <li className="flex gap-2 md:gap-3 items-start justify-center sm:justify-start">
                <Mail className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <span className="text-xs md:text-sm break-all">{COMPANY_INFO.email}</span>
              </li>
              <li className="flex gap-2 md:gap-3 items-start justify-center sm:justify-start">
                <Clock className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <span className="text-xs md:text-sm">{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 border-b border-gray-700 pb-2 inline-block">Redes Sociais</h3>
            <div className="bg-gray-800 p-4 rounded text-center">
              <p className="text-xs md:text-sm text-gray-400 mb-4">Siga-nos no Facebook para ver nossas últimas obras.</p>
              <a href={COMPANY_INFO.facebook} target="_blank" rel="noreferrer" className="inline-block bg-[#1877F2] text-white px-4 py-2 rounded font-bold text-xs md:text-sm hover:opacity-90 transition-opacity">
                Ver Página
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 mb-4">
            <p>&copy; {new Date().getFullYear()} Alumimec Estruturas Metálicas. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-2 flex-wrap justify-center md:justify-end">
              Desenvolvido com
              <span className="text-red-500 animate-heartbeat text-lg">❤️</span>
              pela
              <a
                href="https://www.supremasite.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-accent transition-colors underline"
              >
                Suprema Sites Express
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;