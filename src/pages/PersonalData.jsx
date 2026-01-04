// src/pages/PersonalData.jsx
import { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactsModal from '../components/ContactsModal'
import { Link } from 'react-router-dom'

export default function PersonalData() {
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  const openContacts = () => setIsContactsOpen(true);
  const closeContacts = () => setIsContactsOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white pt-10">
      <Helmet>
        <title>Политика обработки персональных данных — Кристалл де Люкс</title>
        <meta 
          name="description" 
          content="Политика обработки персональных данных гостиницы Кристалл де Люкс. Информация о сборе, хранении и использовании персональных данных пользователей." 
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://crystalluxe.com/personal-data" />
      </Helmet>
      <Header onContactsOpen={openContacts} />
      
      <main className="flex-1 py-12 sm:py-16 px-6 sm:px-10 md:px-16 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 text-sm sm:text-base inline-flex items-center gap-2 mb-6"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Вернуться на главную
          </Link>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Политика обработки персональных данных
          </h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              1. Общие положения
            </h2>
            <p className="leading-relaxed mb-4">
              Настоящая Политика обработки персональных данных (далее — «Политика») разработана в соответствии с 
              Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки 
              и защиты персональных данных пользователей сайта (далее — «Сайт»), принадлежащего Гостинице «Кристалл де Люкс».
            </p>
            <p className="leading-relaxed mb-4">
              Используя Сайт, вы предоставляете свое согласие на обработку ваших персональных данных в соответствии 
              с настоящей Политикой.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              2. Основные понятия
            </h2>
            <ul className="list-disc pl-6 space-y-3 leading-relaxed">
              <li>
                <strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно 
                определенному или определяемому физическому лицу (субъекту персональных данных).
              </li>
              <li>
                <strong>Обработка персональных данных</strong> — любое действие или совокупность действий, 
                совершаемых с персональными данными, включая сбор, запись, систематизацию, накопление, 
                хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, 
                удаление, уничтожение персональных данных.
              </li>
              <li>
                <strong>Оператор</strong> — Гостиница «Кристалл де Люкс», организующий обработку персональных данных.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              3. Какие данные мы собираем
            </h2>
            <p className="leading-relaxed mb-4">
              При использовании Сайта мы можем собирать следующие персональные данные:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Фамилия, имя, отчество</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты (email)</li>
              <li>Информация о запросе на консультацию или бронирование</li>
              <li>Данные, автоматически передаваемые при посещении Сайта (IP-адрес, данные cookies, информация о браузере)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              4. Цели обработки персональных данных
            </h2>
            <p className="leading-relaxed mb-4">
              Мы обрабатываем ваши персональные данные для следующих целей:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Предоставление консультаций по услугам аренды конференц-зала и коворкинга</li>
              <li>Обработка заявок на бронирование и консультации</li>
              <li>Связь с вами для уточнения деталей заказа</li>
              <li>Улучшение качества предоставляемых услуг</li>
              <li>Информирование о специальных предложениях и акциях (только с вашего согласия)</li>
              <li>Соблюдение требований законодательства Российской Федерации</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              5. Правовые основания обработки
            </h2>
            <p className="leading-relaxed mb-4">
              Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Согласия субъекта персональных данных на обработку его персональных данных</li>
              <li>Исполнения договора, стороной которого является субъект персональных данных</li>
              <li>Выполнения возложенных законодательством Российской Федерации на оператора обязанностей</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              6. Способы и сроки обработки
            </h2>
            <p className="leading-relaxed mb-4">
              Обработка персональных данных осуществляется с использованием средств автоматизации и без использования 
              таких средств. Персональные данные обрабатываются в течение срока, необходимого для достижения целей 
              обработки, или до отзыва согласия субъектом персональных данных.
            </p>
            <p className="leading-relaxed mb-4">
              После достижения целей обработки персональные данные подлежат уничтожению или обезличиванию, 
              если иное не предусмотрено законодательством Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              7. Меры по защите персональных данных
            </h2>
            <p className="leading-relaxed mb-4">
              Мы принимаем необходимые правовые, организационные и технические меры для защиты персональных данных 
              от неправомерного доступа, уничтожения, изменения, блокирования, копирования, предоставления, 
              распространения, а также от иных неправомерных действий:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Ограничение доступа к персональным данным</li>
              <li>Использование современных средств защиты информации</li>
              <li>Обучение персонала правилам работы с персональными данными</li>
              <li>Контроль за действиями с персональными данными</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              8. Права субъектов персональных данных
            </h2>
            <p className="leading-relaxed mb-4">
              В соответствии с законодательством Российской Федерации вы имеете право:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Получать информацию, касающуюся обработки ваших персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения ваших персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия или бездействие оператора в уполномоченный орган по защите прав субъектов персональных данных</li>
              <li>Получить информацию о сроках хранения персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              9. Передача персональных данных третьим лицам
            </h2>
            <p className="leading-relaxed mb-4">
              Мы не передаем ваши персональные данные третьим лицам, за исключением случаев:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Когда передача необходима для исполнения договора или оказания услуги</li>
              <li>Когда передача предусмотрена законодательством Российской Федерации</li>
              <li>Когда вы дали явное согласие на передачу данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              10. Изменения в Политике
            </h2>
            <p className="leading-relaxed mb-4">
              Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия Политики 
              всегда размещена на данной странице с указанием даты последнего обновления.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
              11. Контактная информация
            </h2>
            <p className="leading-relaxed mb-4">
              По всем вопросам, связанным с обработкой персональных данных, вы можете обращаться:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="leading-relaxed mb-2">
                <strong>Гостиница «Кристалл де Люкс»</strong>
              </p>
              <p className="leading-relaxed mb-2">
                <strong>Адрес:</strong> г. Кемерово, пр-кт Ленина, 90/2, 2 этаж
              </p>
              <p className="leading-relaxed mb-2">
                <strong>Телефон:</strong> +7 (923) 604-23-50, +7 (922) 300-33-67
              </p>
              <p className="leading-relaxed">
                <strong>Email:</strong> <a href="mailto:crystalluxe@mail.ru" className="text-blue-600 hover:text-blue-800 underline">crystalluxe@mail.ru</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      {isContactsOpen && <ContactsModal onClose={closeContacts} />}
    </div>
  )
}

