import { useState } from 'react';

// Dicionário com os links do Meu Carrinho
const comboLinks = {
  1: 'https://meucarrinho.delivery/destaklanches/products/1ee4f730-1267-48c7-8a7f-60dbed290268',
  2: 'https://meucarrinho.delivery/destaklanches/products/923a10b7-e9eb-485a-99fa-f27353765c88',
  3: 'https://meucarrinho.delivery/destaklanches/products/af2e0eda-ef9c-4392-a3d0-ab48283faba4',
  4: 'https://meucarrinho.delivery/destaklanches/products/ae012da4-c209-4157-b63e-49aae34cf12b',
  5: 'https://meucarrinho.delivery/destaklanches/products/5f4de938-b0dc-45c4-9c63-51fe5517a86a',
  6: 'https://meucarrinho.delivery/destaklanches/products/f281b246-88b4-41b2-99df-e6a37cb431d3'
};

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const questions = [
    { title: "Qual o tamanho da sua fome agora?", emoji: "🤤", options: ["Fome Monstra", "Só um Lanche"] },
    { title: "Vai comer sozinho ou com a galera?", emoji: "🍕", options: ["Só eu", "Com a Galera"] }
  ];

  const handleAnswer = () => {
    if (step === 0) setStep(1);
    else generateResult();
  };

  const generateResult = () => {
    const randomCombo = Math.floor(Math.random() * 6) + 1;
    setResult({
      title: `O Combo ${randomCombo} é perfeito pra você!`,
      img: `/combo${randomCombo}.png`,
      link: comboLinks[randomCombo] // Puxa o link correspondente acima
    });
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    setIsRedirecting(true);
    setTimeout(() => { 
      window.open(result.link, "_blank"); 
      setIsRedirecting(false); 
      setStep(0); setResult(null);
    }, 1500);
  };

  return (
    <section className="w-full relative">
      <div className="max-w-xl mx-auto bg-neutral-900/80 p-8 rounded-[2rem] border border-neutral-800 text-center shadow-2xl backdrop-blur-xl relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>

        {!result ? (
          <div className="relative z-10 animate-fade-in-up">
            <span className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-2 block">Mini App</span>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-6">Adivinha sua fome</h3>
            
            <div className="bg-neutral-950/50 p-6 rounded-3xl border border-neutral-800/50 mb-2">
              <div className="text-5xl mb-4 animate-bounce">{questions[step].emoji}</div>
              <h4 className="text-xl md:text-2xl text-white font-bold mb-8">{questions[step].title}</h4>
              
              <div className="flex flex-col gap-3">
                <button onClick={handleAnswer} className="w-full py-4 bg-neutral-800 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-colors border border-neutral-700 hover:border-orange-500">
                  {questions[step].options[0]}
                </button>
                <button onClick={handleAnswer} className="w-full py-4 bg-neutral-800 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-colors border border-neutral-700 hover:border-orange-500">
                  {questions[step].options[1]}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Deu Match! 🔥</h3>
            <p className="text-orange-400 font-medium mb-6">{result.title}</p>
            
            <button onClick={handleRedirect} className="block w-full overflow-hidden rounded-2xl border border-neutral-700 hover:border-orange-500 transition-colors mb-6 cursor-pointer bg-neutral-950/50 group">
              <img src={result.img} alt="Resultado" className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </button>
            
            <div className="flex flex-col gap-3">
              <button onClick={handleRedirect} className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-xl transition-colors">
                Fazer pedido agora
              </button>
              <button onClick={() => {setStep(0); setResult(null);}} className="w-full py-3 text-gray-400 hover:text-white font-medium text-sm transition-colors">
                Refazer teste
              </button>
            </div>
          </div>
        )}
      </div>

      {isRedirecting && (
        <div className="fixed inset-0 bg-neutral-950/95 flex flex-col items-center justify-center z-[100] backdrop-blur-md">
          <img src="/logo.png" alt="Destak" className="w-40 h-auto animate-pulse-glow mb-6" />
          <h3 className="text-xl font-bold text-white tracking-widest">CARREGANDO...</h3>
        </div>
      )}
    </section>
  );
}