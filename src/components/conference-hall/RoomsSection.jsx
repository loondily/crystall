import { useState } from "react";

export default function RoomsSection() {
  const [modalImage, setModalImage] = useState(null);

  const rooms = [
    { 
      name: "Конференц-зал", 
      img: "https://unitsolutions.ru/blog/tc-content/uploads/2019/07/conference-room-blogpost-1024x683.jpg", 
      translate: "lg:translate-y-0 hover:-translate-y-4" 
    },
    { 
      name: "Зона кофе-брейка", 
      img: "https://www.coffeemag.ru/himages/postimg/images/P8211043.JPG", 
      translate: "lg:translate-y-8 hover:-translate-y-4" 
    },
    { 
      name: "Переговорная", 
      img: "https://ortgraph.ru/upload/medialibrary/a09/a09256edc083d812eac2dbc9dd66a0b2.jpg", 
      translate: "lg:translate-y-16 hover:-translate-y-4" 
    },
    { 
      name: "Гардеробная", 
      img: "https://www.las.ru/media/catalog/Ofisniy-garderob-v-pomeshenii.jpg", 
      translate: "lg:translate-y-0 hover:-translate-y-4" 
    },
    { 
      name: "Зона кофе-брейка", 
      img: "https://www.coffeemag.ru/himages/postimg/images/P8211043.JPG", 
      translate: "lg:translate-y-8 hover:-translate-y-4" 
    },
    { 
      name: "Переговорная", 
      img: "https://ortgraph.ru/upload/medialibrary/a09/a09256edc083d812eac2dbc9dd66a0b2.jpg", 
      translate: "lg:translate-y-16 hover:-translate-x-4" 
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-16 md:py-20 mb-16 sm:mb-24 md:mb-32 px-4 sm:px-6 md:px-12 font-[Raleway]">
      <div className="max-w-6xl mx-auto text-left mb-12">
        <h2 className="text-[#0E0C0A] text-[6vw] sm:text-[4vw] md:text-[3vw] font-bold leading-tight">
          Ознакомьтесь с нашей площадью
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
        {rooms.map((room, index) => (
          <div
            key={index}
            className={`group relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 cursor-pointer ${room.translate}`}
            onClick={() => setModalImage(room.img)}
          >
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-3xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center">
              <h3 className="text-xl sm:text-2xl md:text-[2vw] font-bold text-white opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {room.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-[90%] max-h-[90%]">
            <img src={modalImage} className="w-full h-full object-contain rounded-xl" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalImage(null);
              }}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
