// src/pages/ConferenceHall.jsx
import { Helmet } from 'react-helmet-async';
import Header from '../components/conference-hall/Header'
import EquipmentSection from '../components/conference-hall/EquipmentSection'
import HeroSection from '../components/conference-hall/HeroSection'
import RoomsSection from '../components/conference-hall/RoomsSection'
import GuaranteeSection from '../components/conference-hall/GuaranteeSection'
import Footer from '../components/Footer'
import BookingModal from '../components/BookingModal'
import ContactsModal from '../components/ContactsModal'
import { useState } from 'react'

export default function ConferenceHall() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true)
  const closeBooking = () => setIsBookingOpen(false)

  const openContacts = () => setIsContactsOpen(true);
    const closeContacts = () => setIsContactsOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Аренда конференц-зала в Кемерово — Кристалл де Люкс</title>
        <meta 
          name="description" 
          content="Аренда конференц-зала с полным оборудованием в центре Кемерово. Проектор, экран, флипчарт, Wi-Fi. Подходит для встреч, семинаров, презентаций и мероприятий." 
        />
        <meta 
          name="keywords" 
          content="аренда конференц-зала Кемерово, конференц-зал, аренда зала для мероприятий, бизнес-встречи, семинары, презентации, тренинги, оборудованный конференц-зал" 
        />
        <meta property="og:title" content="Аренда конференц-зала в Кемерово — Кристалл де Люкс" />
        <meta property="og:description" content="Аренда конференц-зала с полным оборудованием в центре Кемерово. Проектор, экран, флипчарт, Wi-Fi." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <link rel="canonical" href="https://crystalluxe.com/conference-hall" />
      </Helmet>
      <Header onContactsOpen={openContacts} />
      <HeroSection isBookingOpen={openBooking} />
      <GuaranteeSection />
      <RoomsSection />
      <Footer />
      {isBookingOpen && <BookingModal onClose={closeBooking} />}
      {isContactsOpen && <ContactsModal onClose={closeContacts} />}
    </div>
  )
}
