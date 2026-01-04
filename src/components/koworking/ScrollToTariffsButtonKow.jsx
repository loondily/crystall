// components/ScrollToTariffsButton.jsx (для коворкинга)
import { useState, useEffect } from 'react';

export default function ScrollToTariffsButtonKow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      // Показываем кнопку когда проскроллили больше 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTariffs = () => {
    const tariffsSection = document.getElementById('tariffs');
    if (tariffsSection) {
      tariffsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Не рендерим на сервере
  if (!isMounted) return null;

  return (
    <button
      onClick={scrollToTariffs}
      className={`
        fixed bottom-8 right-8 z-50 
        bg-blue-600 
        hover:bg-blue-700 
        text-white 
        font-semibold 
        px-5 py-3 
        rounded-full 
        shadow-xl 
        flex items-center gap-2 
        transition-all duration-300
        transform
        ${isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-10 opacity-0 scale-95'
        }
        hover:scale-105
        hover:shadow-2xl
      `}
    >
      <span>Тарифы</span>
      <span className="text-lg">↓</span>
    </button>
  );
}