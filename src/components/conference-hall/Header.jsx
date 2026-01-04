import React from 'react';
import logo from '../../assets/hostellogo.png';

export default function Header({ onContactsOpen }) {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        backdrop-blur-md
        bg-white/4
        border-b border-white/20
        font-[Raleway]
        rounded-b-3xl
        px-6 py-4
      "
    >
      <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 max-w-6xl mx-auto">
        
        {/* Логотип с названием и описанием */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Иконка */}
          <div className="w-12 h-12 sm:w-15 sm:h-15 bg-white/20 rounded-xl flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
          </div>

          {/* Название и описание */}
          <div className="text-white leading-tight">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Crystall de Luxe</h2>
            <p className="text-sm sm:text-[17px] text-gray-200">Аренда конференц-зала</p>
          </div>
        </div>

        {/* Кнопка "Связаться" */}
        <div
          className="
            backdrop-blur-lg
            bg-white/3
            border border-white/20
            rounded-full
            shadow-[0_0_0_1px_rgba(255,255,255,0.15)]
            transition-all duration-300
            hover:bg-white/3
            hover:shadow-[0_0_15px_5px_rgba(0,120,255,0.5)]
            px-6 py-3
          "
        >
          <button
            className="cursor-pointer group flex items-center space-x-2 text-black hover:text-red-500 transition-colors duration-300"
            onClick={onContactsOpen}
            aria-label="Открыть контакты"
          >
            <span className="text-[20px] font-medium">Связаться</span>
            <svg
              className="w-6 h-6 transition-transform duration-500 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
