import Card from '../Card/'
import { 
  MdDesktopMac,
  MdWifi,
  MdPrint,
  MdLocalCafe,
  MdMeetingRoom
} from "react-icons/md";

export default function AdvantagesKoworking() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/gradfon.jpg" // ← твой фон
          alt="Фон преимуществ"
          className="w-full h-full object-cover"
        />
        
      </div>
      {/* Контент ПОВЕРХ фона */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
         <meta
          itemProp="name"
          content="Коворкинг пространство для продуктивной работы"
        />
        <meta
          itemProp="description"
          content="Современный коворкинг с комфортными рабочими местами, быстрым интернетом и всеми необходимыми удобствами для эффективной работы."
        />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-base sm:text-lg md:text-[20px] text-gray-600 mb-2 font-[Raleway]" itemProp="slogan">
              Мы создаём пространство для продуктивной работы
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[4vw] font-bold text-[#0E0C0A] font-[Raleway] px-2" itemProp="headline">
              Коворкинг оснащён всем необходимым для комфортной работы
            </h2>
        </div>

        
       <div className="p-4 sm:p-6 bg-white/20 backdrop-blur-md border border-white/25 rounded-2xl sm:rounded-3xl shadow-lg max-w-6xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 sm:gap-4 justify-items-center" aria-label="Удобства коворкинга">
    <Card title="Рабочие места" iconComponent={MdDesktopMac} />
    <Card title="Быстрый интернет" iconComponent={MdWifi} />
    <Card title="Принтер и сканер" iconComponent={MdPrint} />
    <Card title="Кофе-зона" iconComponent={MdLocalCafe} />
    <Card title="Переговорные" iconComponent={MdMeetingRoom} />
  </div>
</div>

      </div>
</div>
    </section>
  );
}