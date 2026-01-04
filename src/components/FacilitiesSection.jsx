import { useState } from 'react'

export default function ({isBookingOpen}) {
const [active, setActive] = useState(0)
const sections = [
    {
      title: 'Сервис',
      items: [
        'Необходимое оборудование и стабильный Wi-Fi',
        'Поддержка с 8:00 до 22:00 — всегда поможем',
        'Оснащено: проектор, экран, флипчарт'
      ]
    },
    {
      title: 'Комфорт',
      items: [
        'Удобные кресла',
        'Кондиционирование',
        'Теплая атмосфера и стильный интерьер'
      ]
    },
    {
      title: 'Инфраструктура',
      items: [
        'Общая площадь 100 м² — идеально для презентаций и тренингов',
        'Вместимость 30 человек',
        '4 помещения: конференц-зал, переговорная, зона кофе-брейка и гардероб с санузлом',
        'Гибкая рассадка под формат вашего мероприятия'
      ]
    },
    {
      title: 'Локация',
      items: [
        'В центральном районе города',
        'Всегда свободная бесплатная парковка рядом со зданием',
        'Остановка «Юбилейный» прямо напротив (все виды транспорта)',
        'Ресторан на первом этаже'
      ]
    }
  ]

  return (
    <section className="relative bg-gray-50 min-h-screen font-[Raleway] pb-12 md:pb-20 overflow-hidden" itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content="Условия и удобства конференц-зала" />
      <meta itemProp="description" content="Сервис, комфорт, инфраструктура и удобная локация конференц-зала в центре Кемерово" />
      {/* Синий фон */}
      <div className="absolute top-0 right-0 h-full w-full md:w-3/5 bg-blue-900 z-0"></div>

      {/* Заголовок */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 md:px-16 pt-12 md:pt-16 flex justify-center md:justify-end">
        <div className="flex flex-col justify-start items-center md:items-start">
          <p className="text-base sm:text-lg md:text-[20px] leading-[1.5em] text-gray-200 md:text-gray-300 text-center md:text-left" itemProp="slogan">
            Все условия для продуктивных встреч
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[3.2vw] font-bold text-white leading-[1] mt-2" itemProp="headline">
            Максимум удобства
          </h2>
        </div>
      </div>

      {/* Основная часть */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 md:pl-40 mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-15 transition-all duration-300">

          {/* Левая колонка — кнопки */}
          <div className="w-full md:w-2/6 flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-6 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`py-4 md:py-7 px-4 md:px-4 rounded-xl md:rounded-2xl text-left cursor-pointer transition-all duration-300 whitespace-nowrap md:whitespace-normal text-base sm:text-lg md:text-[21px] font-semibold ${
                  active === index
                    ? "bg-gray-100 text-blue-600 md:pl-6"
                    : "text-[#252321] hover:md:pl-3 hover:text-blue-500"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Правая колонка — контент */}
          <div className="w-full md:w-3/4 relative overflow-hidden">
            <ul
              key={active}
              className="text-base sm:text-lg md:text-[20px] text-gray-700 leading-[1.5em] space-y-6 md:space-y-10 pl-0 md:pl-5"
            >
              {sections[active].items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0 flex-none mt-0.5"
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
                  <span className="leading-[1.4em]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижний текст */}
        <div className="mt-8 md:mt-14 flex justify-center md:justify-end">
          <div className="text-center md:text-left max-w-[550px] px-4">
            <p className="text-lg sm:text-xl md:text-[24px] text-white leading-[1.5em] mb-6">
              Хотите провести{" "}
              <strong>конференцию, мастер-класс или деловую встречу</strong>?
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Оставьте заявку администратору прямо сейчас.
            </p>

            <button
              className="cursor-pointer inline-block bg-rose-500 hover:bg-blue-500 text-white text-base sm:text-lg md:text-[18px] px-8 sm:px-10 py-4 sm:py-5 md:py-6 rounded-full transition-all duration-300 w-full sm:w-auto"
              onClick={isBookingOpen}
            >
              Забронировать зал
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}