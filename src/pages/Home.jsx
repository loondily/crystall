// pages/Home.jsx
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HeroBlocks from '../components/HeroBlocks';
import RoomsSection from '../components/RoomsSection';
import SectionCards from '../components/SectionCards';
import AdvantegesSection from '../components/AdvantegesSection';
import FacilitiesSection from '../components/FacilitiesSection';
import Contacts from '../components/Contacts';
import TariffsSection from '../components/TariffsSection';
import ContactsModal from '../components/ContactsModal';
import BookingModal from '../components/BookingModal';
import ScrollToTariffsButton from '../components/ScrollToTariffsButton'; // ← новый импорт

export default function Home() {
    const [isContactsOpen, setIsContactsOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const openContacts = () => setIsContactsOpen(true);
    const closeContacts = () => setIsContactsOpen(false);

    const openBooking = (service = '') => {
        setSelectedService(service);
        setIsBookingOpen(true);
    };
    const closeBooking = () => {
        setIsBookingOpen(false);
        setSelectedService('');
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Кристалл де Люкс",
        "alternateName": "Crystall de Luxe",
        "description": "Аренда конференц-зала и коворкинга в центре Кемерово. Профессиональное оборудование, удобное расположение. Подходит для встреч, семинаров, тренингов и мероприятий.",
        "image": "https://crystalluxe.com/hero-section.jpg",
        "url": "https://crystalluxe.com/",
        "telephone": "+79236042350",
        "email": "crystalluxe@mail.ru",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "пр-кт Ленина, 90/2, 2 этаж",
            "addressLocality": "Кемерово",
            "addressRegion": "Кемеровская область",
            "addressCountry": "RU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "55.345816",
            "longitude": "86.130110"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "08:00",
            "closes": "22:00"
        },
        "priceRange": "1000-2500 руб/час",
        "servesCuisine": "Конференц-зал, Коворкинг, Бизнес-центр",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги аренды",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Аренда конференц-зала",
                        "description": "Пространство для встреч, семинаров и мероприятий любого формата с полным оборудованием"
                    },
                    "price": "2500",
                    "priceCurrency": "RUB",
                    "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "2500",
                        "priceCurrency": "RUB",
                        "unitText": "час"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Фиксированное рабочее место (Коворкинг)",
                        "description": "Комфортное рабочее место для одного человека с быстрым интернетом"
                    },
                    "price": "1000",
                    "priceCurrency": "RUB",
                    "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "1000",
                        "priceCurrency": "RUB",
                        "unitText": "час"
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "1"
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Кристалл де Люкс — Аренда конференц-зала и коворкинга в Кемерово</title>
                <meta 
                    name="description" 
                    content="Аренда конференц-зала и рабочего места в центре Кемерово. Профессиональное оборудование, удобное расположение. Подходит для встреч, семинаров, тренингов и мероприятий." 
                />
                <meta 
                    name="keywords" 
                    content="аренда конференц-зала, коворкинг Кемерово, аренда рабочего места, конференц-зал, бизнес-центр, аренда зала для мероприятий, коворкинг центр" 
                />
                <meta property="og:title" content="Кристалл де Люкс — Аренда конференц-зала и коворкинга в Кемерово" />
                <meta property="og:description" content="Аренда конференц-зала и рабочего места в центре Кемерово. Профессиональное оборудование, удобное расположение." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:url" content="https://crystalluxe.com/" />
                <meta property="og:image" content="https://crystalluxe.com/hero-section.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Кристалл де Люкс — Аренда конференц-зала и коворкинга в Кемерово" />
                <meta name="twitter:description" content="Аренда конференц-зала и рабочего места в центре Кемерово." />
                <link rel="canonical" href="https://crystalluxe.com/" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            <Header onContactsOpen={openContacts} />
            <HeroSection isBookingOpen={openBooking} />
            <HeroBlocks />
            <SectionCards />
            <AdvantegesSection />
            <FacilitiesSection isBookingOpen={openBooking} />
            <RoomsSection />
            
            {/* Добавляем id для якорной ссылки */}
            <div id="tariffs">
                <TariffsSection onBookingOpen={openBooking} />
            </div>
            
            <Contacts />
            <Footer />

            {/* Плавающая кнопка */}
            <ScrollToTariffsButton />

            {isContactsOpen && <ContactsModal onClose={closeContacts} />}
            {isBookingOpen && <BookingModal onClose={closeBooking} initialService={selectedService} />}
        </div>
    );
}