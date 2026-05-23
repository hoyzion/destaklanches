export default function Location() {
  return (
    <section id="localizacao" className="w-full flex flex-col items-center bg-neutral-900/60 p-8 md:p-12 rounded-[2rem] border border-neutral-800/80 shadow-xl backdrop-blur-md">
      
      <h2 className="text-2xl md:text-3xl font-black mb-6 text-white tracking-wide flex items-center justify-center gap-3">
        <span className="text-orange-500">📍</span> Onde Estamos
      </h2>
      
      <p className="text-gray-300 text-center max-w-md leading-relaxed mb-8 text-base sm:text-lg">
        R. Vítor Emanuel Imesi, 316 / 320<br />
        Parque Pinheiros<br />
        Poços de Caldas - MG, 37706-063
      </p>

      {/* Container do Mapa do Google responsivo */}
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-700 shadow-lg group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.22683587186!2d-46.498880299999996!3d-21.8101649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9e83faf8983cf%3A0xdc9245390a2a4130!2sDestak%20Lanches!5e0!3m2!1sen!2sbr!4v1779497255371!5m2!1sen!2sbr" 
          width="100%" 
          height="350" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>
      
    </section>
  );
}