import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import LogoGenerator from "./pages/LogoGenerator";
import ImageGenerator from "./pages/ImageGenerator";
import MobilePricePredictor from "./pages/MobilePricePredictor";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";
import MouseGlow from "./components/MouseGlow";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {
  const [logoData, setLogoData] = useState(null);

  return (
    <Loader>
      <BrowserRouter>
        <ScrollToTop />

        <ScrollProgress />

        <Cursor />

        <MouseGlow />

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/logo-generator"
            element={
              <LogoGenerator
                logoData={logoData}
                setLogoData={setLogoData}
              />
            }
          />

          <Route
            path="/image-generator"
            element={<ImageGenerator />}
          />

          <Route
            path="/mobile-price-predictor"
            element={<MobilePricePredictor />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/privacy-policy"
            element={<Privacy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Loader>
  );
}

export default App;