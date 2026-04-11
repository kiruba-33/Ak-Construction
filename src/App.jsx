import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import SmoothScroll from './components/SmoothScroll';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div className="h-[60vh] w-full flex items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
        </div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </SmoothScroll>
  );
}

export default App;