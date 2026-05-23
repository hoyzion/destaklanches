import { useState, useEffect, useRef } from 'react';

const combosData = [
  { id: 1, img: '/combo1.png', link: 'https://destak-lanches.goomer.app/detail/11299354', delay: 'delay-100' },
  { id: 2, img: '/combo2.png', link: 'https://destak-lanches.goomer.app/detail/11299360', delay: 'delay-200' },
  { id: 3, img: '/combo3.png', link: 'https://destak-lanches.goomer.app/detail/11299361', delay: 'delay-300' },
  { id: 4, img: '/combo4.png', link: 'https://destak-lanches.goomer.app/detail/11299362', delay: 'delay-400' },
  { id: 5, img: '/combo5.png', link: 'https://destak-lanches.goomer.app/detail/11299363', delay: 'delay-500' },
  { id: 6, img: '/combo6.png', link: 'https://destak-lanches.goomer.app/detail/11299364', delay: 'delay-600' },
];

export default function Combos() {
  const [redirectLink, setRedirectLink] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleComboClick = (e, link) => {
    e.preventDefault();
    setRedirectLink(link);
    setTimeout(() => { window.open(link, "_blank"); setRedirectLink(null); }, 1500);
  };

  return (
    <section ref={sectionRef} className="w-full flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-white flex items-center justify-center gap-3 drop-shadow-md">
          <span className="text-orange-500">⭐</span> Combos em Destaque
        </h2>
        <p className="text-gray-400 mt-2">Escolha o seu e faça o pedido com um clique.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {combosData.map((combo) => (
          <button 
            key={combo.id}
            onClick={(e) => handleComboClick(e, combo.link)}
            className={`relative w-full flex items-center justify-center bg-neutral-900 overflow-hidden rounded-2xl shadow-lg border border-neutral-800 hover:border-orange-500/50 group cursor-pointer transition-all duration-300 ${isVisible ? `animate-fade-in-up ${combo.delay}` : 'opacity-0'}`}
          >
            {/* Brilho de fundo suave na imagem */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <img src={combo.img} alt={`Combo ${combo.id}`} className="w-full h-auto object-contain transform transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-gray-300 text-[10px] px-2 py-1 rounded border border-neutral-700/50">
              *Imagem ilustrativa
            </div>
          </button>
        ))}
      </div>

      {redirectLink && (
        <div className="fixed inset-0 bg-neutral-950/95 flex flex-col items-center justify-center z-[100] backdrop-blur-md">
          <img src="/logo.png" alt="Destak" className="w-44 h-auto animate-pulse-glow mb-6" />
          <h3 className="text-2xl font-black text-white text-center">PREPARANDO SEU PEDIDO...</h3>
          <div className="w-48 h-1 bg-neutral-800 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-full animate-ping"></div>
          </div>
        </div>
      )}
    </section>
  );
}