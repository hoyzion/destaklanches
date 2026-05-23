import { useState, useEffect } from 'react';

export default function IntroScreen({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequência de animações (tempos em milissegundos)
    const timer1 = setTimeout(() => setStep(1), 300);  // Mostra o mascote
    const timer2 = setTimeout(() => setStep(2), 1500); // Mostra a frase
    const timer3 = setTimeout(() => setStep(3), 2800); // Mostra a logo Destak
    const timer4 = setTimeout(() => setStep(4), 4500); // Começa a apagar a tela toda
    const timer5 = setTimeout(() => onComplete(), 5000); // Tira a tela de introdução do código

    return () => {
      clearTimeout(timer1); clearTimeout(timer2);
      clearTimeout(timer3); clearTimeout(timer4); clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-neutral-950 flex flex-col items-center justify-center px-4 transition-opacity duration-500 ease-out ${
        step === 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Brilho de fundo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-600/10 to-transparent pointer-events-none"></div>

      <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-sm text-center">
        
        {/* 1. O Mascote (Aparece primeiro) */}
        <img
          src="/logo.png"
          alt="Mascote Destak"
          className={`w-32 sm:w-40 h-auto object-contain transition-all duration-700 transform ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        />

        {/* 2. Frase de Impacto (Aparece depois) */}
        <h2 
          className={`text-xl sm:text-2xl font-medium text-gray-300 mt-6 mb-2 transition-all duration-700 transform ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Onde a sua fome ganha um verdadeiro...
        </h2>

        {/* 3. A Logo com o nome (Completa a frase) */}
        <img
          src="/destak.png"
          alt="Destak Lanches"
          className={`w-64 sm:w-80 h-auto object-contain transition-all duration-[800ms] transform drop-shadow-[0_0_25px_rgba(234,88,12,0.6)] ${
            step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
      </div>
    </div>
  );
}