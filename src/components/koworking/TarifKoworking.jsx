import React from 'react'


export default function TarifKoworking({ onBookingOpen }) {
   const tariffs = [
       {
         desc: "Фиксированное рабочее место",
         price: "1000",
         serviceType: "Коворкинг",
         body:
           "Комфортное рабочее место для одного человека: спокойная атмосфера, удобное кресло и быстрый интернет для продуктивной работы.",
         features: [
           "Рабочий стол и удобное кресло",
           "Высокоскоростной интернет",
           "Тихая атмосфера",
           "Сканирование и ч/б печать",
         ],
       },
       {
         desc: "Зал для проведения мероприятий",
         price: "2500",
         serviceType: "Конференц-зал",
         body:
           "Пространство для встреч, семинаров и мероприятий любого формата — с нужным оборудованием и поддержкой администратора.",
         features: [
           "Проектор, экран, флипчарт",
           "Стабильный Wi-Fi",
           "Помощь администратора с 8:00 до 22:00",
           "Кофе-брейк зона, переговорная и гардероб с санузлом",
         ],
       },
     ];
   
     return (
       <section id="tariffs" className="relative bg-blue-600 pt-12 sm:pt-15 pb-16 sm:pb-20 md:pb-28 font-[Raleway] overflow-hidden">
         {/* Заголовок */}
         <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
           <h2 className="text-white text-2xl sm:text-[32px] md:text-[38px] lg:text-[46px] xl:text-[4vw] font-extrabold leading-tight tracking-tight drop-shadow-lg">
             Тарифы
           </h2>
           <span className="text-gray-200 font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 block mt-3 sm:mt-4">
             Аренда конференц-зала и рабочего места по часам
           </span>
         </div>
   
         {/* Карточки */}
         {/* Карточки */}
   <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6">
     {tariffs.map((t, i) => (
       <div
         key={i}
         className="
           w-full sm:w-[450px] bg-white rounded-2xl sm:rounded-3xl 
           border-8 sm:border-10 border-white
           shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] 
           hover:shadow-[0_25px_50px_-8px_rgba(0,0,0,0.25)]
           transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2
           overflow-hidden flex flex-col
           min-h-[500px] sm:min-h-[550px] md:min-h-[600px]
         "
       >
         {/* Шапка карточки */}
         <div className="bg-gray-100 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 text-center">
           <h3 className="text-base sm:text-[17px] md:text-[18px] font-semibold text-[#0E0C0A] leading-[1.6em] sm:leading-[1.8em] opacity-90 mb-3 sm:mb-4">
             {t.desc}
           </h3>
           <p className="text-base sm:text-[17px] md:text-[18px] font-normal text-[#0E0C0A]">
             <span className="font-extrabold text-3xl sm:text-[34px] md:text-[38px] tracking-tight">
               {t.price}
             </span>{" "}
             ₽/час
           </p>
         </div>
   
         {/* Тело карточки */}
         {/* Тело карточки */}
   <div className="py-6 sm:py-8 md:py-10 px-4 sm:px-5 flex flex-col flex-1">
     <div className="flex flex-col flex-1 mb-4 sm:mb-5 md:mb-6">
       <p className="text-gray-600 text-sm sm:text-[15px] md:text-[16px] leading-relaxed mb-4 sm:mb-5 md:mb-6">{t.body}</p>
       <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-gray-700 text-sm sm:text-base md:text-[17px]">
         {t.features.map((f, fi) => (
           <li key={fi} className="flex items-start gap-2 sm:gap-3">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 shrink-0 drop-shadow-sm mt-0.5"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M5 13l4 4L19 7"
               />
             </svg>
             <span className="leading-[1.5em]">{f}</span>
           </li>
         ))}
       </ul>
     </div>
   
     <button
       onClick={() => onBookingOpen && onBookingOpen(t.serviceType)}
       className="
         w-full bg-red-400 hover:bg-blue-400
         text-white py-3 sm:py-4 rounded-full 
         text-lg sm:text-xl font-semibold 
         shadow-md hover:shadow-lg 
         transition-all duration-300 cursor-pointer
         mt-auto
       "
     >
       Выбрать
     </button>
   </div>
   
       </div>
     ))}
   </div>
       </section>
  )
}
