export default function GuaranteeSection() {
    return (
      <section className="bg-gray-50 py-20 font-[Raleway]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-start md:gap-12">
            {/* Левая колонка */}
            <div className="md:w-1/2 text-left mb-12 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Деловые встречи и мероприятия на самом высоком уровне
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Ежегодно мы принимаем <strong>множество мероприятий</strong>{" "}
                различного уровня. <br />
                Мы убеждены, что <strong>время – главная ценность</strong>. И
                считаем своим долгом сделать всё необходимое для успешного
                проведения вашего мероприятия.
              </p>
            </div>
  
            {/* Правая колонка */}
            <div className="md:w-1/2 text-left">
              <h3 className="inline-block text-2xl md:text-3xl font-bold mb-6 bg-blue-800 text-white px-4 py-2 rounded-lg">
                Мы гарантируем
              </h3>
  
              <ul className="space-y-4">
                {[
                  "Быстрое и профессиональное решение сложных ситуаций.",
                  "Индивидуализированные решения, разработанные в соответствии с вашими целями и требованиями.",
                  "Высокоскоростной Wi-Fi и необходимое оборудование.",
                  "Профессиональную поддержку и сопровождение на всех этапах планирования и проведения мероприятия.",
                  "Широкий ассортимент меню: кофе-брейки, бизнес-ланчи, фуршеты.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  