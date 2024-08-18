import React from "react";
import { BrowswerRouter as Router, Routes, Route } from "react router dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
          <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<About />} />
                <Route path="/" element={<Services />} />
                <Route path="/" element={<Contact />} />


            </Routes>
            </div>

            <Footer />


        </Router>

    );
}

export default App;