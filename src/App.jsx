import React from 'react';
import Navbar from './component/navbar/Navbar';
import HeroSection from './component/heroSection/HeroSection';
import ProductRange from './component/BottomSection/ProductRange';
import Spotlight from './component/BottomSection/Spotlight';
import NissanAtHome from './component/BottomSection/NissanHome';
import Footer from './component/footer/Footer';
import FloatingToolbar from './component/FloatingTool/FloatingToolbar';

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
      <NissanAtHome />
      <Footer />
    </div>
  );
}

export default App;