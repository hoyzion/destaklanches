export default function AboutUs() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-neutral-900/60 p-8 md:p-12 rounded-[2rem] border border-orange-500/10 shadow-xl backdrop-blur-md">
      
      <div className="flex-1 space-y-5">
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
          Sua noite merece um <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">sabor Destak.</span>
        </h2>
        
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          A partir das 18h, a Destak Lanches entra em ação para deixar seu jantar muito mais gostoso. Preparamos tudo com capricho, ingredientes selecionados e combinações que conquistam logo na primeira mordida.
        </p>
        
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          Tem hambúrguer suculento, pizza caprichada, combos especiais e aquele atendimento rápido para você aproveitar o melhor da noite sem sair de casa.
        </p>
        
        <p className="text-orange-400 font-semibold leading-relaxed text-base sm:text-lg pt-2 border-l-2 border-orange-500 pl-4 mt-4">
          Destak Lanches: sabor de verdade, feito para o seu momento.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 w-full md:w-auto mt-4 md:mt-0">
        <div className="bg-neutral-950/80 p-6 rounded-2xl border border-neutral-800/80 text-center flex flex-col items-center justify-center hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-orange-500 mb-3"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
          <span className="text-white font-bold text-sm tracking-wide">Tudo Quentinho</span>
        </div>
        <div className="bg-neutral-950/80 p-6 rounded-2xl border border-neutral-800/80 text-center flex flex-col items-center justify-center hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-orange-500 mb-3"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <span className="text-white font-bold text-sm tracking-wide">Entrega Rápida</span>
        </div>
        <div className="bg-neutral-950/80 p-6 rounded-2xl border border-neutral-800/80 text-center flex flex-col items-center justify-center hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-orange-500 mb-3"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          <span className="text-white font-bold text-sm tracking-wide">C/ Capricho</span>
        </div>
        <div className="bg-neutral-950/80 p-6 rounded-2xl border border-neutral-800/80 text-center flex flex-col items-center justify-center hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-orange-500 mb-3"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
          <span className="text-white font-bold text-sm tracking-wide">Qualidade Top</span>
        </div>
      </div>
    </section>
  );
}