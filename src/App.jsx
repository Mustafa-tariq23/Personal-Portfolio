// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import ProjectDetails from './Components/ProjectDetails';  // Import ProjectDetails
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/:projectId" element={<ProjectDetails />} />  {/* Add this line */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
