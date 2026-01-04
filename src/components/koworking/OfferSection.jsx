// components/koworking/OfferSection.jsx
import { 
  MdEventSeat,
  MdCreditCard,
  MdBusinessCenter
} from "react-icons/md";

export default function OfferSection({ onBookingOpen }) {
  return (
    <section className="relative overflow-hidden">

{/* ВОЛНА СВЕРХУ ГЕРОЯ - СМОТРИТ СНИЗУ ВВЕРХ */}
<div className="absolute top-0 left-0 w-full h-12 sm:h-16 z-30 overflow-hidden">
  <svg 
    className="w-full h-full"
    preserveAspectRatio="none" 
    viewBox="0 0 1200 120" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: 'scaleY(-1)' }}
  >
    <defs>
      <linearGradient id="topWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#DBEAFE" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F3E8FF" />
      </linearGradient>
    </defs>
    
    <path 
      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V92.65A600.21,600.21,0,0,0,321.39,56.44Z" 
      fill="url(#topWaveGradient)"
      opacity="0.95"
    />
  </svg>
</div>

      {/* Фоновое изображение gradfon.jpg */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/gradfon.jpg" // ← ПУТЬ К ТВОЕМУ ИЗОБРАЖЕНИЮ
          alt="Градиентный фон"
          className="w-full h-full object-cover"
        />
        
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        {/* верхний текст – влево */}
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Что мы предлагаем
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600">
            Современное рабочее пространство с полным комплексом услуг для продуктивной работы.
            Все необходимое для комфортной работы и вдохновения в одном месте.
          </p>
          <p className="mt-1 mb-4 sm:mb-5 text-base sm:text-lg text-slate-600">
          <strong>Бесплатная консультация</strong>. Узнайте все подробности об условиях аренды и выберите подходящий вариант рабочего места.
          </p>
          <button 
          onClick={onBookingOpen}
          className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-3.5 rounded-full cursor-pointer bg-white text-blue-600 font-semibold shadow-lg hover:bg-slate-100 transition-all duration-300 text-sm sm:text-base"
        >
          Записаться на консультацию
        </button>
        </div>
        
        {/* 3 блока – иконка+текст, в ряд, выравнивание влево */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
          {[
            { 
              title: 'Уют и комфорт', 
              desc: 'Удобные рабочие места с эргономичной мебелью и комфортной атмосферой',
              Icon: MdEventSeat
            },
            { 
              title: 'Гибкие условия', 
              desc: 'Выбирайте удобное время, длительность и опции — всё под ваши задачи и бюджет',
              Icon: MdCreditCard
            },
            { 
              title: 'Профессиональная атмосфера', 
              desc: 'Рабочая среда, способствующая продуктивности и сосредоточенности',
              Icon: MdBusinessCenter
            },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-3 sm:gap-4 bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-gray-200/50 shadow-sm">
              {/* иконка / картинка */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <c.Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              {/* текст */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">{c.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    <svg 
  className="absolute bottom-0 left-0 w-full h-24 sm:h-32 text-blue-600 z-5 transform rotate-180" 
  preserveAspectRatio="none" 
  viewBox="0 0 1200 120" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
    opacity=".99" 
    fill="currentColor"
  />
</svg>
    </section>
  );
}