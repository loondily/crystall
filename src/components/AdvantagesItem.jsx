export default function AdvantegesItem (props) {
    return (
        <div className="flex items-start sm:items-center space-x-6 group">
            <div className="relative flex-shrink-0">
              <img
                src={props.icon}
                alt={props.title}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
              />
              <div
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-200 rounded-full transition-all duration-700 ease-out group-hover:translate-x-15 group-hover:-translate-y-15"
              ></div>
            </div>
            <div>
              <h3 className="text-[#1B1B1B] text-lg md:text-xl font-bold mb-1">
                {props.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                {props.description}
              </p>
            </div>
          </div>
    )
}