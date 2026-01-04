import HeroInfoBlock from './HeroInfoBlock'
import monitor from '../assets/icons/monitor.png'
import work from '../assets/icons/work.png'
import ruble from '../assets/icons/ruble.png'

export default function HeroBlocks() {
    return (
        <div className="relative -mt-10 z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                >
                    <HeroInfoBlock title="Оборудование" description="Конференц-зал с необходимой техникой" icon={monitor} />
                    <HeroInfoBlock title="С 8:00 до 22:00" description={<>Без перерывов<br />и выходных</>} icon={work} />
                    <HeroInfoBlock title="Приятные цены" description="Качество и комфорт за адекватную стоимость" icon={ruble} />
                </div>
            </div>
        </div>
    )
}