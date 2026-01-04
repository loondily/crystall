import { motion, AnimatePresence } from "framer-motion";
import whatsapp from '../assets/icons/whatsapp.png'


export default function ContactsModal({ onClose }) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          ></div>
  
          {/* Modal */}
          <motion.div
            className="relative z-10 py-10 w-full max-w-[460px] mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-6 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              onClick={onClose}
              aria-label="Close"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
  
            {/* Header */}
            <div className="relative px-10 pb-3">
              <h3 className="text-[28px] font-bold font-[Raleway] pr-10">
                Контакты
              </h3>
            </div>

              {/* Body */}
              <div className="px-13 pt-2 pb-6 space-y-5">
                {/* Icon row */}
                <div className="flex items-center justify-start gap-4">
                  {/* Email */}
                  <a
                    href="mailto:crystalluxe@mail.ru"
                    target="_blank"
                    className="relative group inline-flex items-center justify-center w-10 h-10 rounded-full"
                  >
                    <span className="absolute inset-0 rounded-full scale-0 bg-black transition-transform duration-300 ease-out group-hover:scale-100"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative z-10 w-[50px] h-[50px] text-black transition-colors duration-300 group-hover:text-white"
                      viewBox="0 0 400 400"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M233.5 197.6c-1.1-22-17.6-35.2-37.4-35.2h-.8c-22.9 0-35.6 17.9-35.6 38.2 0 22.8 15.4 37.2 35.5 37.2 22.4 0 37.2-16.4 38.3-35.7v-4.5zm-38-54.9c15.3 0 29.7 6.7 40.2 17.3 0-5.1 3.4-8.9 8.2-8.9h1.2c7.4 0 8.9 7 8.9 9.2v78.6c-.5 5.1 5.3 7.8 8.6 4.5 12.7-13 27.8-66.7-7.9-97.8-33.3-29-78-24.2-101.8-7.9-25.3 17.3-41.4 55.7-25.7 91.8 17.1 39.3 66.1 51 95.2 39.3 14.7-5.9 21.6 13.9 6.2 20.4-23.1 9.8-87.5 8.8-117.6-43-20.3-35-19.2-96.6 34.7-128.5C187 93.2 241.4 99.9 274.2 134c34.3 35.6 32.3 102.3-1.2 128.2-15.1 11.8-37.6.3-37.5-16.8l-.2-5.6c-10.5 10.4-24.6 16.5-39.9 16.5-30.2 0-56.8-26.4-56.8-56.5.1-30.4 26.7-57.1 56.9-57.1"/>
                    </svg>
                  </a>

                  {/* Website */}
                  <a
                    href="https://crystalluxe.com"
                    target="_blank"
                    className="relative group inline-flex items-center justify-center w-10 h-10 rounded-full"
                  >
                    <span className="absolute inset-0 rounded-full scale-0 bg-black transition-transform duration-300 ease-out group-hover:scale-100"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="relative z-10 w-6 h-6 text-black transition-colors duration-300 group-hover:text-white"
                      fill="currentColor"
                      stroke="none"
                    >
                      <g transform="translate(0,512) scale(0.1,-0.1)">
                    <path
                      d="M2285 4675 c-536 -71 -1019 -339 -1377 -765 -147 -175 -295 -447 -372 -681 -75 -229 -106 -422 -106 -669 0 -247 31 -440 106 -669 151 -461 457 -854 879 -1131 178 -116 454 -231 675 -280 211 -47 495 -63 705 -40 382 43 751 191 1065 428 181 137 403 387 530 596 274 455 367 1019 254 1546 -66 308 -198 591 -397 855 -73 96 -265 290 -363 367 -311 245 -700 405 -1086 447 -128 14 -388 12 -513 -4z m-175 -342 c-124 -145 -274 -375 -361 -551 l-72 -144 -76 6 c-105 9 -565 67 -570 72 -5 5 78 104 153 182 183 191 440 359 700 459 84 32 307 94 314 88 2 -2 -38 -52 -88 -112z m578 66 c106 -51 374 -397 512 -661 52 -99 59 -118 43 -118 -10 0 -85 -5 -168 -10 -274 -19 -1139 -9 -1161 12 -9 10 97 206 180 333 124 187 312 407 381 443 70 36 138 37 213 1z m471 -15 c267 -87 532 -249 744 -453 68 -65 192 -210 185 -216 -3 -4 -340 -46 -553 -70 l-51 -6 -42 94 c-83 183 -232 416 -372 582 -104 124 -102 119 -55 111 21 -4 86 -23 144 -42z m-1899 -915 c184 -23 336 -42 337 -43 2 -2 -8 -40 -22 -86 -53 -176 -105 -480 -105 -611 l0 -59 -415 0 -415 0 5 38 c2 20 9 75 15 122 25 191 90 399 181 583 34 67 55 97 67 97 9 0 168 -18 352 -41z m3019 -56 c91 -184 156 -392 181 -583 6 -47 13 -102 15 -122 l5 -38 -388 0 -388 0 -13 132 c-15 169 -51 362 -94 511 -33 116 -33 117 -13 122 12 2 104 14 206 26 102 12 228 27 280 34 171 22 153 29 209 -82z m-2037 -24 c311 -12 711 -5 1024 18 l81 6 31 -109 c56 -191 84 -343 106 -581 l5 -53 -906 0 -906 0 8 93 c14 183 54 387 111 569 l26 80 46 -5 c26 -3 194 -12 374 -18z m-772 -998 c0 -131 52 -435 105 -611 14 -46 24 -84 22 -86 -3 -3 -669 -84 -689 -84 -12 0 -33 30 -67 98 -91 183 -156 391 -181 582 -6 47 -13 102 -15 123 l-5 37 415 0 415 0 0 -59z m2014 7 c-22 -239 -50 -391 -106 -582 l-31 -108 -76 5 c-313 23 -718 30 -1028 18 -181 -6 -349 -15 -375 -18 l-46 -5 -27 83 c-54 172 -97 390 -111 572 l-7 87 906 0 906 0 -5 -52z m991 15 c-2 -21 -9 -76 -15 -123 -15 -117 -55 -276 -97 -390 -51 -136 -130 -290 -149 -290 -9 0 -127 14 -262 30 -136 17 -272 33 -302 36 -95 10 -91 0 -53 131 43 149 79 342 94 511 l13 132 388 0 388 0 -5 -37z m-1535 -898 c102 -3 215 -8 253 -12 l67 -6 -61 -116 c-109 -208 -262 -421 -418 -581 -65 -67 -84 -80 -133 -95 -104 -30 -168 -4 -280 113 -101 105 -186 213 -274 347 -64 97 -184 311 -184 328 0 3 15 9 33 12 46 9 568 22 702 18 61 -1 193 -5 295 -8z m-1215 -130 c90 -194 238 -424 384 -598 50 -59 91 -109 91 -111 0 -2 -35 5 -77 15 -391 91 -775 326 -1030 632 -36 43 -64 79 -62 81 2 2 117 18 254 35 138 17 264 32 280 34 17 2 49 5 73 6 l43 1 44 -95z m2070 60 c158 -19 290 -37 293 -40 2 -2 -25 -39 -61 -82 -240 -287 -576 -505 -937 -608 -49 -15 -95 -25 -101 -23 -7 2 12 31 41 63 147 168 316 426 408 624 25 56 51 101 57 101 6 0 141 -16 300 -35z"
                    />
                  </g>
                    </svg>
                  </a>
                </div>

                <div className="h-px bg-black/10"></div>

                {/* Телефон */}
                <div className="space-y-2">
                  <h4 className="text-[15px] font-medium">
                    Телефон:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-gray-900 text-[23px] font-bold">
                      <a href="tel:79236042350" className="hover:text-black">
                        +7 (923) 604-23-50
                      </a>
                      <a href="https://wa.me/79236042350" target="_blank" rel="noopener">
                        <img
                          src={whatsapp}
                          alt="WhatsApp"
                          className="w-6 h-6 transform transition-transform duration-300 hover:scale-150"
                        />
                      </a>
                    </div>
                    <a href="tel:79223003367" className="block text-gray-900 text-[23px] font-bold hover:text-black">
                      +7 (922) 300-33-67
                    </a>
                  </div>
                </div>

                {/* Адрес */}
                <div className="space-y-0">
                  <h4 className="text-[15px] font-[Raleway] font-medium">
                    Адрес гостиницы:
                  </h4>
                  <p className="text-[15px]">г. Кемерово, ул. Ленина, 90/2, 2 этаж</p>
                </div>

                {/* Email */}
                <div className="space-y-0">
                  <h4 className="text-[15px] font-[Raleway] font-medium">E-mail:</h4>
                  <a href="mailto:crystalluxe@mail.ru" className="text-gray-900 font-bold hover:text-black">
                    crystalluxe@mail.ru
                  </a>
                </div>

                {/* График работы */}
                <div className="space-y-1">
                  <h4 className="text-[23px] font-bold font-[Raleway]">График работы</h4>
                  <p className="text-[15px] pl-1">Пн-Вс с 8:00 до 22:00</p>
                  <p className="text-[15px] pl-1">
                    По всем вопросам обращайтесь по телефону или через мессенджер
                  </p>
                </div>
              </div>
              </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}