export default function SocialMedia() {
  const handleRedirect = (e) => {
    e.preventDefault();
    window.open('https://www.instagram.com/destak02/', '_blank');
  };

  return (
    <section className="w-full flex justify-center">
      <div className="bg-neutral-900/60 p-8 md:p-12 rounded-[2rem] border border-neutral-800/80 shadow-xl backdrop-blur-md w-full max-w-4xl text-center relative overflow-hidden group">
        
        {/* Brilho no fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-600/10 to-orange-500/10 rounded-full blur-[80px] pointer-events-none group-hover:from-pink-600/20 transition-all duration-700"></div>
        
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Acompanhe a gente! 📸</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Fique por dentro das nossas novidades, veja os bastidores e aproveite promoções exclusivas que rolam lá no nosso Instagram.
        </p>

        <button 
          onClick={handleRedirect}
          className="inline-flex items-center gap-4 px-8 py-4 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-pink-500/50 rounded-2xl transition-all duration-300 shadow-lg group-hover:scale-105"
        >
          {/* Ícone do Instagram */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/></svg>
            </div>
          </div>
          <div className="text-left">
            <p className="text-white font-bold text-lg leading-tight">@destak02</p>
            <p className="text-orange-500 text-xs font-medium uppercase tracking-wider">Siga nosso perfil</p>
          </div>
        </button>
        
      </div>
    </section>
  );
}