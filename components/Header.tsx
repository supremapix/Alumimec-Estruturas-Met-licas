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
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
           {/* Fallback text if image fails or placeholder needed */}
           <div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center overflow-hidden border-2 border-accent">
              <span className="font-heading font-bold text-primary text-2xl">A</span>
           </div>
           <div className="flex flex-col">
             <span className={`font-heading font-bold text-xl leading-none ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>ALUMIMEC</span>
             <span className={`text-xs font-light tracking-widest ${scrolled ? 'text-gray-300' : 'text-gray-100 drop-shadow-md'}`}>ESTRUTURAS METÁLICAS</span>
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
          className="lg:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-primary/95 backdrop-blur-sm z-40 transform transition-transform duration-300 flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className="text-white text-2xl font-heading font-bold hover:text-accent"
            >
              {link.name}
            </button>
          ))}
          <a
            href={`https://wa.me/55${COMPANY_INFO.phone1}`}
            className="bg-accent text-white px-8 py-3 rounded-full text-xl font-bold mt-4"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;