import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ eklendi

import Home from "./pages/Home";
import Aktiviteler from "./pages/Aktiviteler";
import Turlar from "./pages/Turlar";
import Kampanyalar from "./pages/Kampanyalar";

import Anasayfa1 from "./pages/Anasayfa1";
import Anasayfa2 from "./pages/Anasayfa2";
import Anasayfa3 from "./pages/Anasayfa3";
import Anasayfa4 from "./pages/Anasayfa4";
import Anasayfa5 from "./pages/Anasayfa5";
import Anasayfa6 from "./pages/Anasayfa6";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/aktiviteler" element={<Aktiviteler />} />
        <Route path="/turlar" element={<Turlar />} />
        <Route path="/kampanyalar" element={<Kampanyalar />} />

        {/* Anasayfa kartlarına karşılık gelen sayfalar */}
        <Route path="/anasayfa1" element={<Anasayfa1 />} />
        <Route path="/anasayfa2" element={<Anasayfa2 />} />
        <Route path="/anasayfa3" element={<Anasayfa3 />} />
        <Route path="/anasayfa4" element={<Anasayfa4 />} />
        <Route path="/anasayfa5" element={<Anasayfa5 />} />
        <Route path="/anasayfa6" element={<Anasayfa6 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop /> {/* ✅ Scroll otomatik en üste */}
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}
