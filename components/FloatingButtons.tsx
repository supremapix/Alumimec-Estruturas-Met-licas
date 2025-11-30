import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const FloatingButtons: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vim pelo site e gostaria de um orçamento.");
    window.open(`https://wa.me/55${COMPANY_INFO.phone1}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button - Left Bottom */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce group"
        aria-label="Fale no WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-md shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-bold">
          Orçamento Online
        </span>
      </button>

      {/* Scroll Top Button - Right Bottom */}
      <button
        onClick={scrollTop}
        className={`fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

export default FloatingButtons;