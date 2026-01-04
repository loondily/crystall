import React, { useState } from "react";
import { Link } from 'react-router-dom';
import whatsapp from '../assets/icons/whatsapp.png'


const Footer = () => {
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!agree) {
      setSubmitMessage('Необходимо согласие на обработку персональных данных');
      setSubmitSuccess(false);
      return;
    }

    if (!phone.trim()) {
      setSubmitMessage('Пожалуйста, введите номер телефона');
      setSubmitSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitSuccess(false);

    try {
      const response = await fetch('/send_footer_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone.trim(),
          agree: agree
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setSubmitMessage(result.message);
        // Очистка формы
        setPhone('');
        setAgree(false);
        // Очистка сообщения через 5 секунд
        setTimeout(() => {
          setSubmitMessage('');
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitSuccess(false);
        setSubmitMessage(result.message || 'Произошла ошибка при отправке заявки');
      }
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitMessage('Произошла ошибка при отправке заявки. Попробуйте позже.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-12 sm:py-16 px-6 sm:px-10 md:px-16 font-[Raleway]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
        <div>
          <h3 className="text-[18px] sm:text-[20px] font-bold mb-6 sm:mb-8">Наши контакты</h3>
          <div className="ml-0 sm:ml-2">
            <p className="text-gray-400 text-[14px] sm:text-[15px] mb-1 font-medium">Адрес:</p>
            <p className="text-white text-[15px] sm:text-[16px] mb-4 sm:mb-6 font-normal">
              г. Кемерово, пр-кт Ленина, 90/2, 2 этаж
              <br />
              <a
                href="https://yandex.ru/maps/org/kristall_lyuks/136858856286/?from=mapframe"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Посмотреть на карте
              </a>
            </p>
            <p className="text-gray-400 text-[14px] sm:text-[15px] mb-1 font-medium">Телефон:</p>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <a href="tel:+79236042350" className="font-semibold text-[18px] sm:text-[20px] text-white">
                +7 (923) 604-23-50
              </a>
              <a
                href="https://wa.me/79236042350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:scale-125 transition-transform duration-300"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
            </div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <a href="tel:+79223003367" className="font-semibold text-[18px] sm:text-[20px] text-white">
                +7 (922) 300-33-67
              </a>
            </div>
            <a
              href="mailto:crystalluxe@mail.ru"
              className="text-gray-400 text-[14px] sm:text-[16px] leading-[1.5] underline font-medium"
            >
              crystalluxe@mail.ru
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[18px] sm:text-[20px] font-bold mb-6 sm:mb-8">График работы</h3>
          <div className="ml-0 sm:ml-2">
            <p className="text-gray-200 mb-1 text-[14px] sm:text-[15px]">Пн-Вс с 8:00 до 22:00</p>
            <p className="text-gray-400 text-[13px] sm:text-[14px]">
              По всем вопросам обращайтесь
              <br />
              по телефону или через мессенджер
            </p>
          </div>
        </div>

        {/* Консультация */}
        <div className="bg-[#2a2a2a] rounded-2xl p-4 sm:p-6 md:p-6 max-w-full md:max-w-md">
          <h3 className="text-[18px] sm:text-[20px] font-bold mb-2 sm:mb-4">
            Консультация по аренде конференц-зала
          </h3>
          <p className="text-gray-300 mb-3 sm:mb-4 text-[14px] sm:text-[16px]">
            Заполните свои контактные данные, и мы с вами свяжемся.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              placeholder="Телефон *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-3 px-4 py-3 sm:py-4 bg-white text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />

            <div className="flex items-center mb-3">
              <input 
                type="checkbox" 
                id="consent" 
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mr-2 w-4 h-4 cursor-pointer"
                required
              />
              <label htmlFor="consent" className="text-white text-[13px] sm:text-[15px] cursor-pointer">
                Согласие на <Link to="/personal-data" className="underline">обработку данных</Link>
              </label>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-60 bg-pink-500 text-[16px] sm:text-[18px] hover:bg-pink-600 disabled:bg-pink-400 disabled:cursor-not-allowed transition-colors py-3 sm:py-4 rounded-full font-extrabold text-white cursor-pointer"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </button>

            {submitMessage && (
              <div className={`mt-4 text-sm rounded-lg p-3 ${
                submitSuccess 
                  ? 'bg-green-900/50 text-green-200' 
                  : 'bg-red-900/50 text-red-200'
              }`}>
                {submitMessage}
              </div>
            )}
          </form>

          <div className="flex items-center justify-start mt-4 text-gray-500 gap-3 flex-wrap">
            <div className="flex items-center justify-start gap-1">
              <a href="mailto:crystalluxe@mail.ru" target="_blank" rel="noopener noreferrer" className="relative group inline-flex items-center justify-center w-8 h-8 rounded-full">
                <span className="absolute inset-0 rounded-full scale-0 bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-100"></span>
                {/* SVG иконка */}
              </a>
              <a href="https://crystalluxe.com" target="_blank" rel="noopener noreferrer" className="relative group inline-flex items-center justify-center w-8 h-8 rounded-full">
                <span className="absolute inset-0 rounded-full scale-0 bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-100"></span>
                {/* SVG иконка */}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 border-opacity-10 mt-12 sm:mt-20 pt-4 sm:pt-6">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 gap-2 sm:gap-3">
          <p className="text-left text-[12px] sm:text-[14px]">
            Copyright © 2025. Гостиница Кристалл Люкс, Кемерово
          </p>
          <p className="text-right text-[12px] sm:text-[14px]">
            <a href="https://t.me/loon_dy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
              Разработка сайта
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
