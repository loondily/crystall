import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ConferenceHall from './pages/ConferenceHall';
import Koworking from './pages/Koworking';
import PersonalData from './pages/PersonalData';



    


function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conference-hall" element={<ConferenceHall />} />
          <Route path="/koworking" element={<Koworking />} />
          <Route path="/personal-data" element={<PersonalData />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}
export default App;