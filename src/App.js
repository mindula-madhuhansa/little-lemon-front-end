import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import MobileNav from "./components/MobileNav";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
