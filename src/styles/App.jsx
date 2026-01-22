import "./styles/App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Games from "./components/Games";
import Learning from "./components/Learning";
import Videos from "./components/Videos";

import Login from "./auth/Login";
import Register from "./auth/Register";

export default function App() {
  const location = useLocation();

  // Hide footer and navbar on auth pages
  const hideAuthUI =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideAuthUI && <Navbar />}

      <div
        className="app-content"
        style={{
          paddingTop: "100px",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/games" element={<Games />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/learning" element={<Learning />} />

          {/* Auth pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      {!hideAuthUI && <Footer />}
    </>
  );
}
