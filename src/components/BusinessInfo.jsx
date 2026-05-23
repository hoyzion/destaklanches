export default function BusinessInfo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Card Horários */}
      <div className="bg-neutral-800/40 p-8 rounded-2xl border border-neutral-700/50 backdrop-blur-sm shadow-lg hover:border-orange-500/50 transition-colors">
        <h3 className="text-xl font-bold mb-5 text-orange-500 flex items-center gap-3">
          <span className="text-2xl">🕒</span> Horário de Atendimento
        </h3>
        
        <ul className="text-gray-300 space-y-3 font-medium">
          <li className="flex justify-between items-center pb-2">
            <span>Todos os dias:</span> 
            <span className="text-white font-bold tracking-wide">18:00 às 00:00</span>
          </li>
        </ul>

        {/* Aviso de feriado com uma divisória sutil */}
        <div className="mt-4 pt-4 border-t border-neutral-700/50">
          <p className="text-sm text-neutral-400 italic flex items-center gap-2">
            <span>⚠️</span> Sujeito a alteração em feriados.
          </p>
        </div>
      </div>

      {/* Card Delivery */}
      <div className="bg-neutral-800/40 p-8 rounded-2xl border border-neutral-700/50 backdrop-blur-sm shadow-lg hover:border-red-500/50 transition-colors">
        <h3 className="text-xl font-bold mb-4 text-red-500 flex items-center gap-3">
          <span className="text-2xl">🛵</span> Delivery & Retirada
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Entregamos quentinho na sua casa! Peça pelo iFood, Goomer ou WhatsApp. Se preferir, você também pode pedir e vir retirar direto no balcão.
        </p>
      </div>
    </section>
  );
}