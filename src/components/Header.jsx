import hostellogo from '../assets/hostellogo.png';
import { useState, useEffect } from 'react';

export default function Header({ onContactsOpen }) {
  const [isInHero, setIsInHero] = useState(true);
  const [isInTariffs, setIsInTariffs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const tariffsSection = document.querySelector('#tariffs-section') || document.querySelector('#tariffs');
      
      let inTariffs = false;
      let inHero = false;

      // Проверяем TariffsSection - только когда пользователь находится внутри секции
      if (tariffsSection) {
        const tariffsRect = tariffsSection.getBoundingClientRect();
        // Белый цвет только когда:
        // - Верх секции тарифов достиг или прошел верх экрана (top <= 0)
        // - Нижняя граница секции еще видна на экране (bottom > 0)
        // Это гарантирует, что цвет меняется только когда пользователь вошел в секцию
        inTariffs = tariffsRect.top <= 0 && tariffsRect.bottom > 0;
      }

      // Проверяем HeroSection
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Если верх HeroSection виден на экране
        inHero = rect.bottom > 100;
      }

      setIsInTariffs(inTariffs);
      setIsInHero(inHero);
    };

    // Проверяем при монтировании
    handleScroll();

    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        backdrop-blur-md
        bg-white/4
        border-b border-white/20
        font-[Raleway]
        rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl
      "
      style={{
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
      }}
    >

      <nav className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 flex justify-between items-center gap-2 sm:gap-4">
        {/* логотип */}
        <a href="/" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 min-w-0 flex-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 bg-white/30 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
            <img src={hostellogo} alt="" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" />
          </div>
          <div className="min-w-0">
            <h1 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-500 truncate ${
              isInTariffs 
                ? 'text-white' 
                : isInHero 
                  ? 'text-white' 
                  : 'text-indigo-600'
            }`}>
              Кристалл де Люкс
            </h1>
            <p className={`text-xs sm:text-sm md:text-[17px] transition-colors duration-500 hidden sm:block ${
              isInTariffs || isInHero ? 'text-gray-200' : 'text-slate-600'
            }`}>
              Аренда конференц-зала и рабочего места
            </p>
          </div>
        </a>

       {/* Кнопка связаться */}
       <div
         className={`
          backdrop-blur-lg
          rounded-full
          shadow-[0_0_0_1px_rgba(255,255,255,0.15)]
          transition-all duration-300
          hover:shadow-[0_0_15px_5px_rgba(0,120,255,0.5)]
          px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 shrink-0
          bg-white/30 sm:bg-white/3 border border-black/20
        `}
        style={{
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
        }}
      >
        <div className="flex items-center">
          <button
            className={`cursor-pointer group flex items-center space-x-1 sm:space-x-2 transition-colors duration-500 ${
              isInTariffs || isInHero
                ? 'text-black sm:text-white' 
                : 'text-black'
            } hover:text-red-500`}
            onClick={onContactsOpen}
            aria-label="Открыть контакты"
          >
            <span className="text-sm sm:text-base md:text-[20px] font-medium transition-colors duration-500 whitespace-nowrap">Связаться</span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition-all duration-500 group-hover:rotate-360"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
       </div>
      </nav>
    </header>
  );
}
