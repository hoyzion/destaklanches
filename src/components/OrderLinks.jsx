import { useState } from 'react';

export default function OrderLinks() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRedirect = (e, url) => {
    e.preventDefault();
    setIsRedirecting(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setIsRedirecting(false);
    }, 1500);
  };

  return (
    <section className="flex flex-col items-center bg-neutral-900/60 p-8 md:p-10 rounded-[2rem] border border-neutral-800/80 shadow-xl backdrop-blur-md relative">
      <h2 className="text-2xl md:text-3xl font-black mb-8 text-white text-center tracking-wide">
        Faça seu Pedido
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
        {/* Botão Goomer */}
        <button 
          onClick={(e) => handleRedirect(e, 'https://destak-lanches.goomer.app/')}
          className="flex items-center justify-center px-6 py-4 bg-blue-600 hover:bg-blue-500 transition-all transform hover:scale-105 active:scale-95 rounded-xl font-bold text-white shadow-lg w-full sm:w-auto border border-blue-500/50"
        >
          <img src="/goomer.png" alt="Goomer" className="w-6 h-6 mr-3 object-contain" />
          Cardápio Goomer
        </button>

        {/* Botão iFood */}
        <button 
          onClick={(e) => handleRedirect(e, 'https://www.ifood.com.br/delivery/pocos-de-caldas-mg/destak-lanches-e-pizzas-jardim-itamaraty-ii/f459dc9f-2359-4734-bedf-a2c7087fe3b6')}
          className="flex items-center justify-center px-6 py-4 bg-red-600 hover:bg-red-500 transition-all transform hover:scale-105 active:scale-95 rounded-xl font-bold text-white shadow-lg w-full sm:w-auto border border-red-500/50"
        >
          <img src="/ifood.jpg" alt="iFood" className="w-6 h-6 rounded-full mr-3 object-cover" />
          Pedir no iFood
        </button>

        {/* Botão WhatsApp */}
        <button 
          onClick={(e) => handleRedirect(e, 'https://wa.me/5535988835804')}
          className="flex items-center justify-center px-6 py-4 bg-green-600 hover:bg-green-500 transition-all transform hover:scale-105 active:scale-95 rounded-xl font-bold text-white shadow-lg w-full sm:w-auto border border-green-500/50"
        >
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.148 1.604 5.952L.152 23.473l5.657-1.484c1.737.95 3.673 1.45 5.674 1.45 6.646 0 12.031-5.385 12.031-12.031C23.514 5.385 18.129 0 11.483 0zm4.568 16.924c-.2.565-1.155 1.09-1.583 1.134-.411.042-.942.14-2.883-.666-2.336-.97-3.83-3.342-3.945-3.495-.116-.152-.94-1.253-.94-2.39 0-1.137.587-1.696.797-1.928.21-.23.456-.288.608-.288.152 0 .304 0 .441.006.14.006.326-.053.51.396.19.462.656 1.611.714 1.727.058.116.096.252.02.404-.076.152-.116.246-.23.376-.114.13-.244.29-.344.382-.11.104-.226.216-.1.432.126.216.562.926 1.202 1.5 8.23 7.37 1.528 8.016 1.748.22.22.46.208.634.062.776-.146.462-.538 1.572-.538 1.572s-.13.26-.376.152c-.246-.11-1.144-.422-1.144-.422z"/></svg>
          (35) 98883-5804
        </button>
      </div>

      {/* TELA DE REDIRECIONAMENTO AQUI TAMBÉM */}
      {isRedirecting && (
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