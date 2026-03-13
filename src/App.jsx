import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partnerships from "./pages/Partnerships";
import Clients from "./pages/Clients";
import Subsidiary from "./pages/Subsidiary";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setIsSplashComplete(true);
  };

  if (!isSplashComplete) {
    return <Splash onComplete={handleSplashComplete} />;
  }

  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/subsidiary" element={<Subsidiary />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
