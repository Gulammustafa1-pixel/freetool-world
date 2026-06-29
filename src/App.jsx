import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [logoData, setLogoData] = useState(null);

  return (
    <Home
      logoData={logoData}
      setLogoData={setLogoData}
    />
  );
}

export default App;