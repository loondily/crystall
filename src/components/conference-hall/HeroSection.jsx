import { Link } from "react-router-dom";

export default function HeroSection({isBookingOpen}) {

  return (
    <>
      <section
        className="relative min-h-[350px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url("https://mos-pro-coworking.21.oml.ru/thumb/2/aCeKq_hFFcb0s6W6F9eidw/2000r810/d/tpl25_pic177.jpg")
          `,
        }}
      >
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-[3vw] md:text-[3vw] font-bold mb-6 leading-[1.05]"> Конференции и мероприятия </h1>

          <nav
            className="text-lg md:text-[16px] mb-12 text-gray-100 opacity-85 max-w-2xl mx-auto flex justify-center flex-wrap gap-1" aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-white transition underline-offset-4 hover:underline"
            >
              Главная
            </Link>
            <span>/</span>
            <span className="text-gray-300 cursor-default">Конференц-зал</span>
          </nav>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80"
              alt="Конференц-зал"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Современный конференц-зал для встреч и презентаций
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Просторный и светлый зал, рассчитанный на комфортное размещение до{" "}
              <span className="font-semibold">30 человек</span>. Оснащён
              проектором, экраном, доской для записей, системой
              кондиционирования и всем необходимым для продуктивных
              мероприятий.
            </p>

            <ul className="space-y-2 text-gray-700 mb-8">
              {[
                "Гибкая рассадка — под презентации, тренинги, переговоры",
                "Полностью оборудовано — проектор, экран, интернет, флипчарт",
                "Кофе-брейк и гардероб включены",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-600"
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
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={isBookingOpen}
              className="cursor-pointer inline-block bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-800 transition"
            >
              Забронировать зал
            </button>
          </div>
        </div>
      </section>

    </>
  );
}
