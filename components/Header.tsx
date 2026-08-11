import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/#servicos' },
    { name: 'Galeria', path: '/#galeria' },
    { name: 'Vídeos', path: '/#videos' },
    { name: 'Sobre', path: '/#sobre' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Contato', path: '/#contato' },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname !== '/') {
        window.location.hash = `#${id}`;
      }
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-xl py-2' : 'bg-primary py-3 md:py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
           <div className="bg-white p-0.5 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center overflow-hidden border-2 border-accent shadow-lg">
              <img
                src="/logo-alumimec.jpg"
                alt="Logo Alumimec"
                className="w-full h-full object-cover rounded-full scale-105"
              />
           </div>
           <div className="flex flex-col leading-none">
             <span className="font-heading font-bold text-base md:text-xl text-white tracking-wide">ALUMIMEC</span>
             <span className="text-[9px] md:text-[10px] font-light tracking-[0.2em] md:tracking-[0.25em] text-gray-300 mt-0.5">ESTRUTURAS METÁLICAS</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className="font-medium text-white/90 hover:text-accent transition-colors relative group text-[15px]"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <a
            href={`https://wa.me/55${COMPANY_INFO.phone1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-white hover:text-accent text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2 text-sm"
          >
            <MessageSquare size={18} /> Orçamento
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white z-50 p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-primary z-40 transition-transform duration-300 flex flex-col lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Top bar with close */}
          <div className="flex justify-between items-center px-6 pt-6 pb-4 border-b border-white/10">
            <span className="text-white font-heading font-bold text-lg">Menu</span>
            <button onClick={() => setIsOpen(false)} aria-label="Fechar menu" className="text-white p-2">
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link, idx) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className="text-white text-xl font-heading font-semibold hover:text-accent transition-colors py-4 border-b border-white/5 flex items-center justify-between text-left"
              >
                <span className="flex items-center gap-4">
                  <span className="text-accent text-sm font-bold w-6">{String(idx + 1).padStart(2, '0')}</span>
                  {link.name}
                </span>
                <ChevronRight size={20} className="text-white/30" />
              </button>
            ))}
          </nav>

          {/* Quick Contact Buttons for Elderly Accessibility */}
          <div className="mt-auto px-6 pb-8 space-y-4">
            <p className="text-white/50 text-xs uppercase tracking-wider font-bold">Contatos Rápidos</p>
            <a
              href={`tel:${COMPANY_INFO.phone1Display.replace(/\D/g, '')}`}
              className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-5 py-4 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/60 text-xs">Ligar agora</span>
                <span className="text-white font-bold text-lg">{COMPANY_INFO.phone1Display}</span>
              </div>
            </a>
            <a
              href={`https://wa.me/55${COMPANY_INFO.phone1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-accent hover:bg-accent/90 rounded-xl px-5 py-4 transition-colors shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageSquare size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/70 text-xs">Solicitar Orçamento</span>
                <span className="text-white font-bold text-lg">WhatsApp</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
