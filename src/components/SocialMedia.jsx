export default function SocialMedia() {
  return (
    <section className="w-full bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12 rounded-3xl border border-neutral-800 text-center shadow-lg relative overflow-hidden flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
        Acompanhe a gente! 📸
      </h2>
      <p className="text-gray-400 mb-8 max-w-lg text-sm sm:text-base">
        Fique por dentro das nossas novidades, veja os bastidores e aproveite promoções exclusivas que rolam lá no nosso Instagram.
      </p>
      
      {/* COLOQUE O LINK REAL DO INSTAGRAM NO HREF ABAIXO */}
      <a 
        href="https://instagram.com/destaklanches" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex items-center gap-4 bg-neutral-800 hover:bg-neutral-700 p-4 pr-8 rounded-2xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] border border-neutral-700 hover:border-orange-500/50"
      >
        <img 
          src="/insta.png" 
          alt="Instagram" 
          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
        />
        <div className="text-left">
          <p className="text-white font-bold text-lg">@destaklanches</p>
          <p className="text-orange-500 text-sm font-medium">Siga nosso perfil</p>
        </div>
      </a>
    </section>
  );
}