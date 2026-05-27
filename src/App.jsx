import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/Navbar";
import HeroSection from "./component/heroSection/HeroSection";
import ProductRange from "./component/BottomSection/ProductRange";
import Spotlight from "./component/BottomSection/Spotlight";
import NissanAtHome from "./component/BottomSection/NissanHome";
import Footer from "./component/footer/Footer";
import FloatingToolbar from "./component/FloatingTool/FloatingToolbar";
import NissanHome from "./component/BottomSection/NissanHome";
import Carousel from "./component/BottomSection/Carousel";
import Vehicles from "./ExternalComponent/NavbarComponet/Vehicles";

function App() {
  const [showToolbar, setShowToolbar] = useState(false);
  const [showVehicles, setShowVehicles] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      setShowToolbar(!entries.isIntersecting);
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen antialiased select-none font-sans">
      <Navbar onVehiclesClick={() => setShowVehicles(true)} />
      {showVehicles && <Vehicles onClose={() => setShowVehicles(false)} />}
      {showToolbar && <FloatingToolbar />}
      <main>
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <ProductRange />
        <Spotlight />
        <NissanHome />
        <Carousel />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
