// components/ScrollToTariffsButton.jsx
import { useState, useEffect } from 'react';

export default function ScrollToTariffsButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAboveTariffs, setIsAboveTariffs] = useState(true); // true = стрелка вниз, false = стрелка вверх

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const tariffsSection = document.querySelector('#tariffs-section') || document.getElementById('tariffs');
      const footer = document.querySelector('footer');
      
      if (!tariffsSection) {
        setIsVisible(false);
        return;
      }

      const tariffsRect = tariffsSection.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Проверяем, доскроллил ли пользователь до конца футера
      // Кнопка скрывается когда пользователь доскроллил до конца страницы
      // (когда scrollY + viewportHeight близко к documentHeight)
      const isAtBottom = scrollY + viewportHeight >= documentHeight - 50; // 50px допуск
      
      // Также проверяем, если футер виден полностью
      let isFooterVisible = false;
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // Если верх футера виден и нижняя часть футера близка к низу экрана
        isFooterVisible = footerRect.top < viewportHeight && footerRect.bottom <= viewportHeight + 50;
      }
      
      // Если пользователь доскроллил до конца футера - скрываем кнопку
      if (isAtBottom || isFooterVisible) {
        setIsVisible(false);
        return;
      }
      
      // Определяем, находится ли пользователь на секции тарифов
      // Кнопка скрывается когда секция тарифов видна на экране:
      // Верх секции достиг или прошел верх экрана, и низ секции еще виден
      const isOnTariffsSection = tariffsRect.top <= viewportHeight / 2 && tariffsRect.bottom > viewportHeight / 2;
      
      // Если пользователь находится на секции тарифов - скрываем кнопку
      if (isOnTariffsSection) {
        setIsVisible(false);
        return;
      }

      // Показываем кнопку если пользователь проскроллил больше 200px
      if (scrollY > 200) {
        setIsVisible(true);
        
        // Определяем направление стрелки
        // Если верх секции тарифов еще не достиг середины экрана - стрелка вниз
        // Если верх секции уже прошел середину экрана - стрелка вверх
        setIsAboveTariffs(tariffsRect.top > viewportHeight / 2);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTariffs = () => {
    const tariffsSection = document.querySelector('#tariffs-section') || document.getElementById('tariffs');
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
        cursor-pointer
        shadow-xl 
        flex items-center gap-2 
        transition-all duration-300
        transform
        ${isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-10 opacity-0 scale-95 pointer-events-none'
        }
        hover:scale-105
        hover:shadow-2xl
      `}
    >
      <span>Тарифы</span>
      <span 
        className={`text-lg transition-transform duration-300 ${
          isAboveTariffs ? 'rotate-0' : 'rotate-180'
        }`}
      >
        ↓
      </span>
    </button>
  );
}