import Card from './Card'
import meeting from '../assets/icons/meeting.png'
import seminar from '../assets/icons/seminar.png'
import masterclass from '../assets/icons/masterclass.png'
import clubs from '../assets/icons/clubs.png'
import miniConf from '../assets/icons/mini-conf.png'

export default function SectionCards() {
    return (
        <section
        className="py-20 bg-white"
        itemScope
        itemType="https://schema.org/ConferenceCenter"
      >
        <meta
          itemProp="name"
          content="Аренда конференц-зала для семинаров, тренингов и встреч"
        />
        <meta
          itemProp="description"
          content="Конференц-зал для бизнес-встреч, семинаров, мастер-классов, клубных мероприятий и мини-конференций. Полностью оборудованная площадка для деловых мероприятий."
        />

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[20px] text-gray-600 mb-2 font-[Raleway]" itemProp="slogan">
              Мы создаём пространство, где проходят важные встречи
            </p>

            <h2 className="text-4xl md:text-[4vw] font-bold text-[#0E0C0A] font-[Raleway]" itemProp="headline">
              Конференц-зал подходит для мероприятий любого формата
            </h2>
        </div>

        
       <div className="px-1 md:p-6 bg-white/20 backdrop-blur-md border border-white/25 rounded-3xl max-w-6xl mx-auto">
  <div className="flex flex-col items-center md:grid md:grid-cols-5 gap-10 md:gap-4" aria-label="Типы мероприятий">
    <Card title="Бизнес-встречи" icon={meeting} />
    <Card title={<>Семинары<br />и тренинги</>} icon={seminar} />
    <Card title="Мастер-классы" icon={masterclass} />
    <Card title="Клубные встречи" icon={clubs} />
    <Card title="Мини-конференции" icon={miniConf} />
  </div>
</div>

      </div>
    </section>
    )
}