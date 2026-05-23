export default function Location() {
  return (
    <section id="localizacao" className="w-full flex flex-col items-center bg-neutral-900/60 p-8 md:p-12 rounded-[2rem] border border-neutral-800/80 shadow-xl backdrop-blur-md">
      
      <h2 className="text-2xl md:text-3xl font-black mb-6 text-white tracking-wide flex items-center justify-center gap-3">
        <span className="text-orange-500">📍</span> Onde Estamos
      </h2>
      
      <p className="text-gray-300 text-center max-w-md leading-relaxed mb-8 text-base sm:text-lg">
        Rua Saulo Inácio de Carvalho, 505<br />
        Itamaraty 2<br />
        Poços de Caldas - MG
      </p>

      {/* Container do Mapa do Google responsivo com o link atualizado */}
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-700 shadow-lg group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14816.432245493774!2d-46.49839225018098!3d-21.81475531947659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9e838ed402577%3A0x3abcbcbfddd8928f!2sR.%20Saulo%20In%C3%A1cio%20de%20Carvalho%2C%20505%20-%20Regi%C3%A3o%20Urbana%20Homog%C3%AAnea%20XXIV%2C%20Po%C3%A7os%20de%20Caldas%20-%20MG%2C%2037710-205!5e0!3m2!1sen!2sbr!4v1779503599599!5m2!1sen!2sbr" 
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