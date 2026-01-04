import whatsapp from '../assets/icons/whatsapp.png'

const ContactsSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 sm:px-10 md:px-15 font-[Raleway]" itemScope itemType="https://schema.org/ContactPage">
      <meta itemProp="name" content="Контакты Кристалл де Люкс" />
      <div className="max-w-6xl mx-auto text-left mb-8">
        <h2 className="text-[#0E0C0A] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[3.5vw] font-bold" itemProp="headline">
          Контакты
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
        <div className="bg-white rounded-2xl p-4 sm:p-6 text-left flex flex-col justify-between min-h-[180px] md:min-h-[160px] lg:h-40">
          <h3 className="text-[14px] sm:text-[16px] font-normal mb-4 sm:mb-6 text-[#1a1a1a]">
            Телефон и мессенджеры
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <a
                href="tel:+79236042350"
                className="text-[20px] sm:text-[22px] font-medium text-[#1a1a1a] font-[Manrope]"
              >
                +7 (923) 604-23-50
              </a>
              <a
                href="https://wa.me/79236042350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:scale-125 transition-transform duration-300"
              >
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  className="w-5 h-5 sm:w-6 sm:h-6 inline-block"
                />
              </a>
            </div>
            <a
              href="tel:+79223003367"
              className="text-[20px] sm:text-[22px] font-medium text-[#1a1a1a] font-[Manrope]"
            >
              +7 (922) 300-33-67
            </a>
          </div>
        </div>

        {/* Адрес */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 text-left flex flex-col justify-between min-h-[180px] md:min-h-[160px] lg:h-40">
          <h3 className="text-[14px] sm:text-[16px] font-normal mb-4 sm:mb-6 text-[#1a1a1a]">
            Адрес
          </h3>
          <p className="text-[20px] sm:text-[22px] font-medium text-[#1a1a1a] leading-relaxed font-[Manrope]">
            г. Кемерово,
            <br />
            ул. Ленина, 90/2, 2 этаж
          </p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 text-left flex flex-col justify-between min-h-[180px] md:min-h-[160px] lg:h-40">
          <h3 className="text-[14px] sm:text-[16px] font-normal mb-4 sm:mb-6 text-[#1a1a1a]">
            E-mail
          </h3>
          <a
            href="mailto:crystalluxe@mail.ru"
            className="text-[20px] sm:text-[22px] font-medium text-[#1a1a1a] leading-relaxed font-[Manrope]"
          >
            crystalluxe@mail.ru
          </a>
          <p className="text-[12px] sm:text-[14px] font-medium text-[#1a1a1a] leading-relaxed font-[Manrope]">
            Пн-Вс с 8:00 до 22:00
          </p>
        </div>
      </div>

      {/* Яндекс Карта */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
      <iframe
  src="https://yandex.ru/map-widget/v1/?ll=86.130110%2C55.345816&mode=search&oid=136858856286&ol=biz&z=16"
  className="w-full h-full border-0"
  allowFullScreen
  title="Yandex Map"
/>

      </div>
    </section>
  );
};

export default ContactsSection;
