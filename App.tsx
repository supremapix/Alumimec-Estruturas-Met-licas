import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import LocationPage from "./pages/LocationPage";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";

// ScrollToTop component for route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * O Router NÃO fica aqui: index.tsx usa BrowserRouter (cliente) e
 * entry-server.tsx usa StaticRouter (pré-renderização/SSG).
 */
const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 antialiased flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main id="conteudo" tabIndex={-1} className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cidade/:locationName"
            element={<LocationPage type="city" />}
          />
          <Route
            path="/bairro/:locationName"
            element={<LocationPage type="neighborhood" />}
          />
          <Route path="/servicos/:serviceName" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;
