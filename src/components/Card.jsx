export default function Card(props) {
    const IconComponent = props.iconComponent;
    
    return (
      <div className="text-center w-full sm:w-auto">
        <div className="w-32 h-32 sm:w-28 sm:h-28 md:w-23 md:h-23 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group cursor-pointer transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
          {IconComponent ? (
            <IconComponent className="w-20 h-20 sm:w-16 sm:h-16 md:w-13 md:h-13 text-gray-700 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          ) : (
            <img
              src={props.icon}
              alt={props.title}
              className="w-20 h-20 sm:w-16 sm:h-16 md:w-13 md:h-13 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
        <h3 className="text-2xl sm:text-xl md:text-[18px] font-bold text-[#1B1B1B] leading-[1.05]">
          {props.title}
        </h3>
      </div>
    )
}