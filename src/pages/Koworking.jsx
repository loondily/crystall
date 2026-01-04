// pages/Koworking.jsx
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroKoworking from '../components/koworking/HeroKoworking';
import AdvantagesKoworking from '../components/koworking/AdvantagesKoworking';
import BookingModal from '../components/BookingModal';
import ContactsModal from '../components/ContactsModal';
import OfferSection from '../components/koworking/OfferSection';  
import { useState } from 'react';
import TarifKoworking from '../components/koworking/TarifKoworking';

export default function Koworking() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openBooking = (service = '') => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };
  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  const openContacts = () => setIsContactsOpen(true);
  const closeContacts = () => setIsContactsOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Коворкинг в Кемерово — Фиксированное рабочее место | Кристалл де Люкс</title>
        <meta 
          name="description" 
          content="Коворкинг в центре Кемерово. Фиксированное рабочее место, высокоскоростной интернет, тихая атмосфера. Аренда рабочего места по часам. Комфортные условия для работы." 
        />
        <meta 
          name="keywords" 
          content="коворкинг Кемерово, рабочее место, аренда рабочего места, коворкинг центр, фиксированное рабочее место, коворкинг по часам, рабочее пространство" 
        />
        <meta property="og:title" content="Коворкинг в Кемерово — Фиксированное рабочее место | Кристалл де Люкс" />
        <meta property="og:description" content="Коворкинг в центре Кемерово. Фиксированное рабочее место, высокоскоростной интернет, тихая атмосфера." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <link rel="canonical" href="https://crystalluxe.com/koworking" />
      </Helmet>
      <Header onContactsOpen={openContacts} />
      <HeroKoworking onBookingOpen={openBooking} />
      <AdvantagesKoworking />
      <OfferSection onBookingOpen={openBooking}/>
      <TarifKoworking onBookingOpen={openBooking} />
      <Footer/>
      

      {isBookingOpen && <BookingModal onClose={closeBooking} initialService={selectedService} />}
      {isContactsOpen && <ContactsModal onClose={closeContacts} />}
    </div>
  );
}