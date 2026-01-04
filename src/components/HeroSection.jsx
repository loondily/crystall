import heroImg from "../assets/hero-section.jpg";

export default function HeroSection({ isBookingOpen }) {
  return (
    <section
      className="hero relative min-h-[600px] md:min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImg})`,
      }}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="Кристалл де Люкс" />
      <meta itemProp="alternateName" content="Crystall de Luxe" />
      <meta itemProp="description" content="Аренда конференц-зала и коворкинга в центре Кемерово. Профессиональное оборудование, удобное расположение." />
      <meta itemProp="image" content="https://crystalluxe.com/hero-section.jpg" />
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="streetAddress" content="пр-кт Ленина, 90/2, 2 этаж" />
        <meta itemProp="addressLocality" content="Кемерово" />
        <meta itemProp="addressRegion" content="Кемеровская область" />
        <meta itemProp="addressCountry" content="RU" />
      </div>
      <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
        <meta itemProp="latitude" content="55.345816" />
        <meta itemProp="longitude" content="86.130110" />
      </div>
      <meta itemProp="telephone" content="+79236042350" />
      <meta itemProp="email" content="crystalluxe@mail.ru" />

      <div className="text-center text-white px-6 max-w-4xl mx-auto">
        {/* Главный SEO-заголовок */}
        <h1
          className="text-[25px] sm:text-[6vw] md:text-[5vw] font-black mb-4 leading-[1.1]"
          itemProp="headline"
        >
          Место для ваших встреч<br />и мероприятий!
        </h1>

        {/* Описание с ключевыми словами */}
        <p
          className="text-[20px] sm:text-lg md:text-[22px] mb-10 text-gray-100 opacity-85 max-w-2xl mx-auto"
          itemProp="description"
        >
          Функциональный <strong>конференц-зал</strong> комфорт-класса,<br />
          в центральном районе Кемерово.
        </p>

        {/* CTA */}
        <div
          className="bg-black/60 rounded-3xl sm:rounded-full p-4 sm:p-6 max-w-sm mx-auto"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="price" content="0" />
          <meta itemProp="priceCurrency" content="RUB" />

          <div className="flex flex-row items-center justify-between gap-3 sm:space-x-4">
            <p className="text-base sm:text-lg font-medium leading-[1.25]" itemProp="description">
              Консультация бесплатная
            </p>

            <button
                className="cursor-pointer bg-red-400 hover:bg-blue-400 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-full font-medium transition-colors duration-200 flex-shrink-0 text-sm sm:text-base"
                onClick={isBookingOpen}
                aria-label="Записаться на консультацию по аренде конференц-зала"
            >
                Записаться
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
