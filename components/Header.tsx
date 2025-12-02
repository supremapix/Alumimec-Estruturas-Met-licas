import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
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

  // Close mobile menu on route change
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
        // Navigate to home then scroll
        window.location.hash = `#${id}`;
      }
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg py-2' : 'bg-primary shadow-md py-2 md:py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
           <div className="bg-white p-0.5 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center overflow-hidden border-2 border-accent shadow-lg">
              <img
                src="/logo-alumimec.jpg"
                alt="Logo Alumimec"
                className="w-full h-full object-cover rounded-full scale-105"
              />
           </div>
           <div className="flex flex-col">
             <span className="font-heading font-bold text-base md:text-xl leading-none text-white drop-shadow-md">ALUMIMEC</span>
             <span className="text-[10px] md:text-xs font-light tracking-wider md:tracking-widest text-gray-100 drop-shadow-md">ESTRUTURAS METÁLICAS</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className={`font-medium hover:text-accent transition-colors relative group ${scrolled ? 'text-white' : 'text-white text-shadow'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </button>
          ))}
          <a
            href={`https://wa.me/55${COMPANY_INFO.phone1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-white hover:text-accent text-white px-5 py-2 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2"
          >
            <MessageSquare size={18} /> Orçamento
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white z-50 p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-primary z-40 transform transition-transform duration-300 flex flex-col items-center justify-center gap-6 md:gap-8 pt-20 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className="text-white text-xl md:text-2xl font-heading font-bold hover:text-accent transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href={`https://wa.me/55${COMPANY_INFO.phone1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-6 md:px-8 py-3 rounded-full text-lg md:text-xl font-bold mt-4 hover:bg-white hover:text-accent transition-colors"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;