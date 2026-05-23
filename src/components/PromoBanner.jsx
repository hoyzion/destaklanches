import { useState } from 'react';

export default function PromoBanner() {
  const [redirecting, setRedirecting] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setRedirecting(true);
    setTimeout(() => {
      window.open("https://destak-lanches.goomer.app/menu?welcome=first", "_blank");
      setRedirecting(false);
    }, 1500);
  };

  return (
    <section className="w-full flex flex-col items-center">
      <button onClick={handleClick} className="w-full relative overflow-hidden rounded-2xl shadow-[0_0_20px_rgba(234,88,12,0.15)] border border-orange-500/30 group block cursor-pointer">
        <img src="/combo.png" alt="Promoção" className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105" />
      </button>

      {redirecting && (
        <div className="fixed inset-0 bg-neutral-950/95 flex flex-col items-center justify-center z-[100] backdrop-blur-md">
          <img src="/logo.png" alt="Carregando" className="w-44 h-auto animate-pulse-glow mb-6" />
          <h3 className="text-2xl font-black text-white">PREPARANDO SEU PEDIDO...</h3>
          <div className="w-48 h-1 bg-neutral-800 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full w-full animate-ping"></div>
          </div>
        </div>
      )}
    </section>
  );
}