// components/koworking/HeroKoworking.jsx
import React from 'react';
import monitor from '../../assets/icons/monitor.png'
import work from '../../assets/icons/work.png'
import ruble from '../../assets/icons/ruble.png'

export default function HeroKoworking({ onBookingOpen }) {
    const benefits = [
        {
            icon: work,
            title: "С 8:00 до 22:00",
            description: "Без перерывов и выходных",
        },
        {
            icon: monitor,
            title: "Оборудование",
            description: "Рабочее место с необходимой техникой",
        },
        {
            icon: ruble,
            title: "Приятная цена",
            description: "Качество и комфорт за адекватную стоимость",
        }
    ];

    return (
        <section className="relative min-h-[600px] pt-10 md:min-h-[90vh] overflow-hidden">
            {/* ГРАДИЕНТНЫЙ ФОН */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-100/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row-reverse items-start gap-6 sm:gap-8 lg:gap-12 xl:gap-20">
                    
                    {/* ИЗОБРАЖЕНИЕ */}
                    <div className="w-full lg:w-1/2 order-first lg:order-last">
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
                            <img 
                                src="/images/kowzone.jpg"
                                alt="Коворкинг пространство"
                                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                            />
                            
                            {/* НОВИНКА справа */}
                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-blue-600 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-lg">
                                НОВИНКА
                            </div>
                            
                            {/* Надпись снизу */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                <div className="text-white text-lg sm:text-xl md:text-2xl font-bold">Коворкинг пространство</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* КОНТЕНТ */}
                    <div className="w-full lg:w-1/2 order-last lg:order-first">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
                            <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
                                КОВОРКИНГ
                                <span className="block text-blue-600">
                                    ДЛЯ ПРОФЕССИОНАЛОВ
                                </span>
                            </h1>
                            
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                                Современное рабочее пространство с полным комплексом услуг. 
                                Все необходимое для продуктивной работы и вдохновения в одном месте.
                            </p>
                            
                            {/* ПРЕИМУЩЕСТВА */}
                            <div className="mb-6 sm:mb-8 md:mb-10">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                    {benefits.map((benefit, index) => (
                                        <div 
                                            key={index}
                                            className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-2" />
                                            <h3 className="font-bold text-sm sm:text-sm mb-1 text-gray-900">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-xs sm:text-xs text-gray-600 leading-tight">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Кнопки */}
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
    <button 
        onClick={onBookingOpen}
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
    >
        ЗАБРОНИРОВАТЬ МЕСТО
    </button>
    
    <a 
        href="#tariffs"
        className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 text-center w-full sm:w-auto"
    >
        ПОСМОТРЕТЬ ТАРИФЫ
    </a>
</div>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
            
         

        </section>
    );
}