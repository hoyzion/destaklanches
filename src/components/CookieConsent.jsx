import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('destak_cookie_consent');
    if (!consent) {
      // Coloquei um pequeno atraso de 1.5s pra não aparecer jogando na cara do cliente assim que ele entra
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('destak_cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    // Transformei em um card flutuante que fica no centro no PC e se adapta no celular
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[700px] z-[9999] bg-neutral-900/90 border border-orange-500/30 p-5 md:p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col sm:flex-row items-center gap-5 md:gap-6 animate-fade-in-up">
      
      {/* Brilho interno super sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-red-600/5 rounded-3xl pointer-events-none"></div>

      <div className="text-gray-300 text-sm md:text-base flex-1 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 relative z-10">
        {/* Emoji de Cookie Animado */}
        <span className="text-4xl sm:text-3xl animate-bounce drop-shadow-[0_0_10px_rgba(234,88,12,0.5)]">🍪</span>
        <p className="leading-relaxed font-medium">
          Usamos cookies e o Google Analytics para melhorar sua experiência. Ao continuar, você concorda com nossa política.
        </p>
      </div>
      
      {/* Botão bem destacado e gordinho pro clique no celular */}
      <button 
        onClick={handleAccept} 
        className="w-full sm:w-auto whitespace-nowrap px-8 py-4 sm:py-3 bg-gradient-to-b from-orange-500 to-orange-700 hover:from-orange-400 hover:to-orange-600 text-white font-black rounded-xl transition-all shadow-[0_6px_0_#9a3412] hover:shadow-[0_4px_0_#9a3412] active:shadow-[0_0px_0_#9a3412] active:translate-y-1 relative z-10 border border-orange-400/50 uppercase tracking-wider text-sm"
      >
        Aceitar
      </button>
    </div>
  );
}