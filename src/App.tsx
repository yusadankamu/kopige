import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import MenuSection from "./components/Menu/MenuSection";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <AboutUs />
      <MenuSection />
      <Gallery />
      <Partners />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
