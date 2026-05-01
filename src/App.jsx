import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

import { Home } from "./pages/Home";
import { Catalogo } from "./pages/Catalogo";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080808] text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;