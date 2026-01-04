export default function HeroInfoBlock(props) {
    return (
        <div
            className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex items-start space-x-4 transition-transform duration-300 hover:-translate-y-1"
        >
            <img src={props.icon} alt={props.title} className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
            <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-[#1A1A1A]">
                {props.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-snug">
                {props.description}
            </p>
            </div>
        </div>
    )
}