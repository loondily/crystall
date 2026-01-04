import { 
    MdOndemandVideo, 
    MdOutlineScreenShare, 
    MdOutlineMic, 
    MdOutlineCastConnected, 
    MdOutlinePublic 
  } from "react-icons/md";
  
  export default function EquipmentSection() {
    return (
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 font-[Raleway]">
        <div className="max-w-6xl mx-auto mb-12">
  
          <h2 className="text-[#0E0C0A] text-[7vw] sm:text-[5vw] md:text-[3vw] font-bold leading-tight mb-10 text-center md:text-left">
            Оборудование для конференций
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
  
            {/* Блок 1 */}
            <div className="flex flex-col items-start p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="text-blue-600 mb-4 text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
                <MdOndemandVideo />
              </div>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg">
                Проекционные экраны, позволяющие получить изображение высокого качества
                даже в ярко освещенном помещении и отлично передающие тёмные и светлые оттенки.
              </p>
            </div>
  
            {/* Блок 2 */}
            <div className="flex flex-col items-start p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="text-blue-600 mb-4 text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
                <MdOutlineScreenShare />
              </div>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg">
                Мультимедийные проекторы с насыщенной цветопередачей, поддержкой 3D,
                HDMI, USB.
              </p>
            </div>
  
            {/* Блок 3 */}
            <div className="flex flex-col items-start p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="text-blue-600 mb-4 text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
                <MdOutlineMic />
              </div>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg">
                Кондиционирование помещения.
              </p>
            </div>
  
            {/* Блок 5 */}
            <div className="flex flex-col items-start p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="text-blue-600 mb-4 text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
                <MdOutlinePublic />
              </div>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg">
                Доступ в Интернет.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  