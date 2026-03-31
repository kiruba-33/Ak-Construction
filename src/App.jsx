import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
// Background wrapper-ah import panniruken buddy
import SmoothScroll from './components/SmoothScroll';

// Lazy loading components
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));

function App() {
  return (
    <>
    <SmoothScroll>
      {/* 1. Background Wrapper: Navbar matrum Routes-ah ithukulla wrap pannirukom */}
        <Navbar /> 
        
        {/* Navbar height-ku etha mari padding */}
        <main className="pt-20 md:pt-24 lg:pt-28">
          <Suspense fallback={
            <div className="h-[60vh] w-full flex items-center justify-center">
              <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </Suspense>
        </main>


      {/* 2. Footer: Wrapper-ku veliya irukathala background pattern inga theriyaathu */}
      <Footer/>
      </SmoothScroll>
    </>
  );
}

export default App;