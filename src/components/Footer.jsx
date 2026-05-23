export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 py-8 border-t border-neutral-800 text-center text-sm text-gray-500">
      <p className="mb-2">
        &copy; {currentYear} Todos os direitos reservados pela Destak Lanches.
      </p>
      <p>
        Site desenvolvido pelo{' '}
        <a 
          href="https://grupozynsa.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-400 font-semibold transition-colors"
        >
          Grupo Zynsa
        </a>
      </p>
    </footer>
  );
}