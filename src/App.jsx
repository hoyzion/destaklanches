import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import Quiz from './components/Quiz';
import Combos from './components/Combos';
import AboutUs from './components/AboutUs';
import SocialMedia from './components/SocialMedia';
import OrderLinks from './components/OrderLinks';
import BusinessInfo from './components/BusinessInfo';
import Location from './components/Location';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent'; // <-- Importe aqui

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}

      <div className={`min-h-screen bg-energia text-gray-100 flex flex-col font-sans relative overflow-x-hidden ${showIntro ? 'h-screen overflow-hidden' : ''}`}>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow container mx-auto px-4 py-8 flex flex-col gap-12 md:gap-16 max-w-4xl">
            <PromoBanner />
            <OrderLinks />
            <AboutUs />
            <Quiz />
            <Combos />
            <SocialMedia />
            <BusinessInfo />
            <Location />
          </main>

          <Footer />
        </div>
        
        {/* Adicione o componente bem aqui no final */}
        <CookieConsent />
      </div>
    </>
  );
}