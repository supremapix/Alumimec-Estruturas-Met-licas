import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
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

  const handleCall = () => {
    window.open(`tel:${COMPANY_INFO.phone1}`, '_self');
  };

  return (
    <>
      {/* Left Bottom Stack: WhatsApp and Phone */}
      <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex flex-col gap-3 md:gap-4">

        {/* Call Button */}
        <button
          onClick={handleCall}
          className="bg-primary hover:bg-primary-dark text-white p-3 md:p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 group relative"
          aria-label="Ligar Agora"
        >
          <Phone size={22} className="md:w-7 md:h-7" />
          <span className="absolute left-14 md:left-16 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-2 md:px-3 py-1 rounded-md shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs md:text-sm font-bold pointer-events-none hidden md:block">
            Ligar Agora
          </span>
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 md:p-4 rounded-full shadow-lg transition-transform duration-300 animate-bounce group relative"
          aria-label="Fale no WhatsApp"
        >
          <MessageCircle size={26} className="md:w-8 md:h-8" />
          <span className="absolute left-14 md:left-16 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-2 md:px-3 py-1 rounded-md shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs md:text-sm font-bold pointer-events-none hidden md:block">
            Orçamento Online
          </span>
        </button>
      </div>

      {/* Right Bottom: Scroll Top */}
      <button
        onClick={scrollTop}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gray-700 hover:bg-gray-900 text-white p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} className="md:w-6 md:h-6" />
      </button>
    </>
  );
};

export default FloatingButtons;