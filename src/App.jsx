import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

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

function SEO({ title, description, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={`https://freetool.world${canonical}`}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={`https://freetool.world${canonical}`}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="FreeToolWorld"
      />
    </Helmet>
  );
}

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

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <SEO
                  title="Free AI Tools Online - FreeToolWorld"
                  description="Explore free AI tools online for logo creation, image generation, productivity and more with FreeToolWorld."
                  canonical="/"
                />

                <Home />
              </>
            }
          />

          {/* LOGO GENERATOR */}
          <Route
            path="/logo-generator"
            element={
              <>
                <SEO
                  title="AI Logo Generator - Create Logos Online Free"
                  description="Create professional logos with AI for free. Generate unique logo ideas and designs online with FreeToolWorld."
                  canonical="/logo-generator"
                />

                <LogoGenerator
                  logoData={logoData}
                  setLogoData={setLogoData}
                />
              </>
            }
          />

          {/* IMAGE GENERATOR */}
          <Route
            path="/image-generator"
            element={
              <>
                <SEO
                  title="AI Image Generator - Create Images From Text Free"
                  description="Generate AI images from text prompts for free. Create unique artwork, illustrations and visuals with FreeToolWorld."
                  canonical="/image-generator"
                />

                <ImageGenerator />
              </>
            }
          />

          {/* MOBILE PRICE PREDICTOR */}
          <Route
            path="/mobile-price-predictor"
            element={
              <>
                <SEO
                  title="Mobile Price Predictor - Estimate Phone Price With AI"
                  description="Predict smartphone prices using AI based on RAM, storage, battery, camera, screen size and processor specifications."
                  canonical="/mobile-price-predictor"
                />

                <MobilePricePredictor />
              </>
            }
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <>
                <SEO
                  title="About FreeToolWorld - Free AI Tools"
                  description="Learn more about FreeToolWorld and our collection of free AI tools available online."
                  canonical="/about"
                />

                <About />
              </>
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={
              <>
                <SEO
                  title="Contact FreeToolWorld"
                  description="Contact FreeToolWorld for questions, feedback, suggestions or support."
                  canonical="/contact"
                />

                <Contact />
              </>
            }
          />

          {/* BLOG */}
          <Route
            path="/blog"
            element={
              <>
                <SEO
                  title="AI Tools Blog - FreeToolWorld"
                  description="Read guides, tips and articles about AI tools, productivity and artificial intelligence."
                  canonical="/blog"
                />

                <Blog />
              </>
            }
          />

          {/* PRIVACY */}
          <Route
            path="/privacy-policy"
            element={
              <>
                <SEO
                  title="Privacy Policy - FreeToolWorld"
                  description="Read the FreeToolWorld privacy policy and learn how information is handled."
                  canonical="/privacy-policy"
                />

                <Privacy />
              </>
            }
          />

          {/* TERMS */}
          <Route
            path="/terms"
            element={
              <>
                <SEO
                  title="Terms and Conditions - FreeToolWorld"
                  description="Read the terms and conditions for using FreeToolWorld."
                  canonical="/terms"
                />

                <Terms />
              </>
            }
          />

        </Routes>

        <Footer />

      </BrowserRouter>
    </Loader>
  );
}

export default App;