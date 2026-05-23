import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  // Estados para o efeito de digitação
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Frases interativas
  const phrases = [
    "Seu delivery favorito da noite!",
    "A melhor escolha pra sua fome noturna 🌙",
    "Qualidade que dá Destak ⭐⭐⭐"
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito de Digitação Profissional
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToLocation = (e) => {
    e.preventDefault();
    document.getElementById('localizacao')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRedirect = (e, url) => {
    e.preventDefault();
    setIsRedirecting(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setIsRedirecting(false);
    }, 1500);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/95 backdrop-blur-md border-b border-orange-500/20 py-3 shadow-lg translate-y-0' : 'bg-transparent py-0 -translate-y-full'}`}>
        <div className="container mx-auto px-4 max-w-4xl flex justify-center sm:justify-start">
          <a href="#" onClick={scrollToTop} className="transition-transform hover:scale-105">
            <img src="/destak.png" alt="Destak" className="h-8 object-contain drop-shadow-md" />
          </a>
        </div>
      </div>

      <header className="relative w-full pt-16 pb-12 px-4 flex flex-col items-center justify-center z-20 text-center min-h-[85vh]">
        
        {/* HORÁRIO ATUALIZADO AQUI */}
        <div className="mb-8 inline-flex items-center gap-2 bg-neutral-900/80 border border-orange-500/30 text-orange-400 px-5 py-2 rounded-full font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg backdrop-blur-sm">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
          Aberto das 18:00 às 23:30
        </div>

        <div className="flex flex-col items-center relative mb-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none"></div>
          <img src="/logo.png" alt="Mascote Destak" className="w-32 sm:w-44 h-auto object-contain drop-shadow-2xl relative z-10" />
          <img src="/destak.png" alt="Destak Lanches" className="w-56 sm:w-72 h-auto object-contain -mt-6 sm:-mt-8 relative z-20 drop-shadow-xl" />
        </div>
        
        <div className="min-h-[80px] md:min-h-[96px] flex items-center justify-center mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">{text}</span>
            <span className="animate-ping text-orange-500">|</span>
          </h1>
        </div>

        <p className="text-gray-300 max-w-2xl text-base sm:text-lg font-medium leading-relaxed mb-10 drop-shadow-md">
          Hambúrgueres, pizzas e combos preparados na hora, com ingredientes selecionados e entrega rápida em Poços de Caldas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
          <button onClick={(e) => handleRedirect(e, 'https://meucarrinho.delivery/destaklanches')} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-black text-lg rounded-xl shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2">
            <span>🛵</span> Fazer pedido agora
          </button>
          
          <button onClick={(e) => handleRedirect(e, 'https://meucarrinho.delivery/destaklanches')} className="w-full sm:w-auto px-6 py-4 bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700 hover:border-orange-500/50 text-white font-bold text-base rounded-xl transition-all backdrop-blur-sm text-center">
            Ver cardápio
          </button>

          <a href="#localizacao" onClick={scrollToLocation} className="w-full sm:w-auto px-6 py-4 bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700 hover:border-orange-500/50 text-white font-bold text-base rounded-xl transition-all backdrop-blur-sm text-center hidden md:block">
            Ver localização
          </a>
        </div>
      </header>

      {isRedirecting && (
        <div className="fixed inset-0 bg-neutral-950/95 flex flex-col items-center justify-center z-[100] backdrop-blur-md">
          <img src="/logo.png" alt="Destak" className="w-44 h-auto animate-pulse-glow mb-6" />
          <h3 className="text-2xl font-black text-white text-center">PREPARANDO SEU PEDIDO...</h3>
          <div className="w-48 h-1 bg-neutral-800 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-full animate-ping"></div>
          </div>
        </div>
      )}
    </>
  );
}