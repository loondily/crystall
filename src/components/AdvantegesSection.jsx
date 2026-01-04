import AdvantegesItem from "./AdvantagesItem"
import technique from '../assets/icons/sovremennaya-tekhnika.png'
import atmosphere from '../assets/icons/professionalnaya-atmosfera.png'
import space from '../assets/icons/prostor-i-uyedineniye.png'
import conditions from '../assets/icons/gibkiye-usloviya.png'


export default function AdvantegesSection () {
    return (
    <section className="py-16 px-4 md:px-0 md:py-20 bg-blue-50" itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content="Преимущества аренды конференц-зала и коворкинга" />
      <meta itemProp="description" content="Профессиональное оборудование, удобная атмосфера, гибкие условия аренды конференц-зала и коворкинга в Кемерово" />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div className="relative order-2 lg:order-1">
        <img
          src="https://avatars.mds.yandex.net/get-altay/4043748/2a00000176c359b040e6b5eea60bd459d96c/XXXL"
          alt="Офисное пространство"
          className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[680px] object-cover rounded-2xl shadow-md"
          itemProp="image"
        />
      </div>

      <div className="order-1 lg:order-2 space-y-8">
        <h2
          className="text-3xl sm:text-4xl md:text-[2.6vw] font-bold text-[#0E0C0A] leading-tight"
          itemProp="headline"
        >
          У нас <span className=" text-blue-800">эффективнее</span>, чем в офисе.
          Почему?
        </h2>

        <div className="space-y-8">
            <AdvantegesItem
                icon={technique}
                title="Необходимая для работы техника"
                description="Всё готово, чтобы вы могли сразу начать презентацию или
                совещание — без лишней настройки и технических пауз." />
        </div>
        <div className="space-y-8">
            <AdvantegesItem
                icon={atmosphere}
                title="Профессиональная атмосфера"
                description="Уют и комфорт вдохновляют на идеи — никаких отвлекающих мелочей, только концентрация." />
        </div>
        <div className="space-y-8">
            <AdvantegesItem
                icon={space}
                title="Простор и уединение"
                description="Идеальное место для встреч, тренингов и переговоров в спокойной и продуктивной обстановке." />
        </div>
        <div className="space-y-8">
            <AdvantegesItem
                icon={conditions}
                title="Гибкие условия"
                description="Выбирайте удобное время, длительность и опции — всё под ваши задачи и бюджет." />
        </div>
      </div>
    </div>
  </div>
</section>
)
}