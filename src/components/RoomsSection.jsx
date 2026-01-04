import { Link } from "react-router-dom";

export default function RoomsSection() {
  return (
    <section className="bg-white py-8 sm:py-16 md:py-20 mb-16 sm:mb-24 md:mb-32 px-4 sm:px-6 md:px-12 font-[Raleway]" itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="name" content="Помещения и форматы для мероприятий" />
      <meta itemProp="description" content="Конференц-зал, переговорные, коворкинг и вспомогательные помещения для деловых мероприятий" />
      <div className="max-w-6xl mx-auto text-left mb-15">
        <p className="text-gray-500 font-medium text-lg sm:text-xl leading-relaxed" itemProp="slogan">
          Пространства для продуктивной работы и деловых встреч
        </p>
        <h2 className="text-[#0E0C0A] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[3.5vw] font-bold leading-tight" itemProp="headline">
          Форматы помещений и возможности для мероприятий
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-start">

        {/* Конференц-зал */}
        <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-500" itemScope itemType="http://schema.org/Place">
          <img
            src="https://unitsolutions.ru/blog/tc-content/uploads/2019/07/conference-room-blogpost-1024x683.jpg"
            alt="Конференц-зал для корпоративных встреч, презентаций и тренингов"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white transition-all duration-500 group-hover:-translate-y-2 sm:group-hover:-translate-y-5">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[2vw] font-bold mb-2" itemProp="name">
              Конференц-зал для корпоративных встреч
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4" itemProp="description">
              Просторное помещение для <strong>корпоративных встреч, презентаций и тренингов</strong> с современным оборудованием.
            </p>

            <Link
              to="/conference-hall"
              className="font-medium text-base sm:text-lg opacity-100 translate-y-0 md:opacity-0 md:translate-y-6 
              group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 
              underline decoration-white hover:decoration-transparent"
            >
              Подробнее
            </Link>
          </div>
        </div>

        {/* Зона кофе-брейка */}
        <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-500" itemScope itemType="http://schema.org/Place">
        <img
            src="https://ortgraph.ru/upload/medialibrary/a09/a09256edc083d812eac2dbc9dd66a0b2.jpg"
            alt="Переговорная для приватных деловых встреч"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white transition-all duration-500 group-hover:-translate-y-2 sm:group-hover:-translate-y-5">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[2vw] font-bold mb-2" itemProp="name">
              Переговорная для бизнес-встреч
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4" itemProp="description">
              Комната для <strong>приватных деловых встреч и переговоров</strong> в комфортной обстановке.
            </p>
          </div>
        </div>

        <div
        className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-500 
                  border-2 sm:border-4 border-red-600"
        itemScope
        itemType="http://schema.org/Place"
      >

        {/* Горизонтальная плашка "Новинка" */}
        <div
          className="
            absolute top-4 sm:top-5 left-0 sm:left-[-60px] 
            bg-red-600 text-white text-xs sm:text-sm font-bold 
            py-1.5 sm:py-1 pl-4 sm:pl-20 pr-4 sm:pr-6
            rounded-full sm:rounded-r-full shadow-lg z-20
            flex items-center
          "
        >
          Новинка
        </div>

        <img
          src="https://avatars.mds.yandex.net/get-altay/10445027/2a0000018be85e2bd286c906014bd9551734/L_height"
          alt="Коворкинг — аренда рабочего места"
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
          itemProp="image"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div
          className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white 
                      transition-all duration-500 group-hover:-translate-y-2 sm:group-hover:-translate-y-5"
        >
          <h3
            className="text-lg sm:text-xl md:text-2xl lg:text-[2vw] font-bold mb-2"
            itemProp="name"
          >
            Коворкинг
          </h3>

          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4"
            itemProp="description"
          >
            Современное пространство для <strong>работы, учебы и фокусных задач</strong>.  
            Комфортные рабочие места, быстрый интернет и атмосфера, в которой реально приятно работать.
          </p>

          <Link
            to="/koworking"
            className="font-medium text-base sm:text-lg opacity-100 translate-y-0 md:opacity-0 md:translate-y-6 
              group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 
              underline decoration-white hover:decoration-transparent"
          >
            Подробнее
          </Link>
        </div>
      </div>


        {/* Гардеробная */}
        <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-500" itemScope itemType="http://schema.org/Place">
          <img
            src="https://www.las.ru/media/catalog/Ofisniy-garderob-v-pomeshenii.jpg"
            alt="Гардеробная для хранения вещей участников мероприятий"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500 group-hover:-translate-y-5">
            <h3 className="text-xl sm:text-2xl md:text-[2vw] font-bold mb-2" itemProp="name">
              Гардеробная для участников
            </h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4" itemProp="description">
              Удобное помещение для <strong>хранения верхней одежды и личных вещей участников мероприятий</strong>.
            </p>
          </div>
        </div>

        {/* Повтор 1 */}
        <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-500" itemScope itemType="http://schema.org/Place">
          <img
            src="https://www.coffeemag.ru/himages/postimg/images/P8211043.JPG"
            alt="Зона кофе-брейка для деловых встреч и неформального общения"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500 group-hover:-translate-y-5">
            <h3 className="text-xl sm:text-2xl md:text-[2vw] font-bold mb-2" itemProp="name">
              Зона кофе-брейка для коллег
            </h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4" itemProp="description">
              Пространство для <strong>кофе-брейков и неформального общения</strong> во время мероприятий.
            </p>
          </div>
        </div>

        {/* Повтор 2 */}
        <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-500" itemScope itemType="http://schema.org/Place">
          <img
            src="https://ortgraph.ru/upload/medialibrary/a09/a09256edc083d812eac2dbc9dd66a0b2.jpg"
            alt="Переговорная для приватных деловых встреч"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white transition-all duration-500 group-hover:-translate-y-2 sm:group-hover:-translate-y-5">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[2vw] font-bold mb-2" itemProp="name">
              Переговорная для бизнес-встреч
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4" itemProp="description">
              Комната для <strong>приватных деловых встреч и переговоров</strong> в комфортной обстановке.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
