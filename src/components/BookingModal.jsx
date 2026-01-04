import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function BookingModal({ onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    agree: false
  });

  // Обновляем service при изменении initialService
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitSuccess(false);

    try {
      const response = await fetch('/send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          agree: formData.agree
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setSubmitMessage(result.message);
        // Очистка формы
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          agree: false
        });
        // Закрытие модального окна через 2 секунды
        setTimeout(() => {
          onClose();
        }, 2000);
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
          <div className="px-6 py-6 text-center">
            <h3 className="text-[28px] font-bold font-[Raleway] leading-[1.2]">
              Записаться<br />на консультацию
            </h3>
            <p className="mt-2 text-gray-600">
              Оставьте ваши контактные данные — и администратор с вами свяжется!
            </p>
          </div>

          {/* Body */}
          <div className="px-10 py-3">
            <form 
              className="space-y-3 max-w-md mx-auto text-left"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Ваше имя*"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full rounded-full border border-gray-300 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон*"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full rounded-full border border-gray-300 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full rounded-full border border-gray-300 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <div className="relative">
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full rounded-full border border-gray-300 px-4 py-4 pr-10 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white cursor-pointer"
                >
                  <option value="" disabled>Выберите услугу*</option>
                  <option value="Конференц-зал">Конференц-зал</option>
                  <option value="Коворкинг">Коворкинг</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <label className="group relative flex items-center gap-3 cursor-pointer text-[15px] text-gray-800 font-medium select-none">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                  required
                  className="peer w-4 h-4 appearance-none border border-gray-400 rounded-md transition-all duration-300 checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <svg
                  className="absolute left-[3px] w-3 h-3 text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="transition-colors duration-300 group-hover:text-blue-600">
                  Согласен на <a href="/personal-data" className="underline" target="_blank">обработку персональных данных</a>
                </span>
              </label>

              {submitMessage && (
                <div className={`text-center text-sm p-3 rounded-full ${
                  submitSuccess ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
                }`}>
                  {submitMessage}
                </div>
              )}

              <div className="pt-6 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center text-white px-6 py-3 cursor-pointer rounded-full font-semibold transition-colors duration-200 w-full md:w-auto ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-red-400 hover:bg-blue-400'
                  }`}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
