import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-6 mx-auto lg:mx-0 p-0.5 overflow-hidden">
               <img
                 src="/logo-alumimec.jpg"
                 alt="Logo Alumimec Estruturas Metálicas"
                 className="w-full h-full object-cover rounded-full scale-105"
               />
            </div>
            <h3 className="text-xl font-heading font-bold mb-4">ALUMIMEC</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Especialistas em estruturas metálicas, galpões e coberturas industriais. Qualidade e compromisso desde 2010.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.facebook} target="_blank" rel="noreferrer" className="bg-primary hover:bg-accent p-2 rounded transition-colors"><Facebook size={20} /></a>
              <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className="bg-primary hover:bg-accent p-2 rounded transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Nossos Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link to={`/#servicos`} className="hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contato</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <MapPin className="text-accent flex-shrink-0" size={20} />
                <span className="text-sm">{COMPANY_INFO.addressShort}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-accent flex-shrink-0" size={20} />
                <div className="flex flex-col">
                  <span>{COMPANY_INFO.phone1Display}</span>
                  <span>{COMPANY_INFO.phone2Display}</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <span className="text-sm">{COMPANY_INFO.email}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="text-accent flex-shrink-0" size={20} />
                <span className="text-sm">{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Facebook Feed (Simulation) */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Redes Sociais</h3>
            <div className="bg-gray-800 p-4 rounded text-center">
              <p className="text-sm text-gray-400 mb-4">Siga-nos no Facebook para ver nossas últimas obras.</p>
              <a href={COMPANY_INFO.facebook} target="_blank" rel="noreferrer" className="inline-block bg-[#1877F2] text-white px-4 py-2 rounded font-bold text-sm hover:opacity-90">
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