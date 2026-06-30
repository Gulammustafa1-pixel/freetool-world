import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import LogoGenerator from "./pages/LogoGenerator";
import ImageGenerator from "./pages/ImageGenerator";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";

import "./App.css";

function App() {
  const [logoData, setLogoData] = useState(null);

  return (
    <BrowserRouter>
      <Background />

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

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;