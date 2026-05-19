import React from 'react';
import Navbar from './component/navbar/Navbar';
import HeroSection from './component/heroSection/HeroSection';
import ProductRange from './component/BottomSection/ProductRange';
import Spotlight from './component/BottomSection/Spotlight';
import NissanAtHome from './component/BottomSection/NissanHome';
import Footer from './component/footer/Footer';
import FloatingToolbar from './component/FloatingTool/FloatingToolbar';
import NissanHome from './component/BottomSection/NissanHome';

function App() {
  return (
    <div className="relative w-full min-h-screen antialiased select-none font-sans">
      <Navbar />
      
      <main>
        <HeroSection />
      </main>
      {/* <FloatingToolbar /> */}

      <ProductRange />
      <Spotlight />
      <NissanHome />
      <Footer />
    </div>
  );
}

export default App;