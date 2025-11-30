import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';

// ScrollToTop component for route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="font-sans text-gray-800 antialiased flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cidade/:locationName" element={<LocationPage type="city" />} />
            <Route path="/bairro/:locationName" element={<LocationPage type="neighborhood" />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </HashRouter>
  );
};

export default App;