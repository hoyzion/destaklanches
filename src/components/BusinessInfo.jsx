export default function BusinessInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      
      {/* Horário Atualizado */}
      <div className="bg-neutral-900/60 p-8 rounded-3xl border border-neutral-800/80 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🕒</span>
          <h3 className="text-xl font-bold text-orange-500">Horário de Atendimento</h3>
        </div>
        
        <div className="flex justify-between items-center text-gray-300 font-medium mb-4 pb-4 border-b border-neutral-800">
          <span>Todos os dias:</span>
          <span className="text-white font-black">18:00 às 23:30</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-yellow-500/80 italic">
          <span>⚠️</span>
          <p>Sujeito a alteração em feriados.</p>
        </div>
      </div>

      {/* Delivery Info Atualizado (Sem Goomer) */}
      <div className="bg-neutral-900/60 p-8 rounded-3xl border border-neutral-800/80 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🛵</span>
          <h3 className="text-xl font-bold text-red-500">Delivery & Retirada</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Entregamos quentinho na sua casa! Peça pelo Meu Carrinho, iFood, 99 Food ou WhatsApp. Se preferir, você também pode pedir e vir retirar direto no balcão.
        </p>
      </div>

    </div>
  );
}