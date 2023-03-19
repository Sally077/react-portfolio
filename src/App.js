import React from "react";
import "./Components/Styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import NavTabs from "./Components/NavTab";
import Home from "./Components/Pages/HomePage";
import Projects from "./Components/Pages/ProjectsPage";
import Contact from "./Components/Pages/ContactPage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/ProjectsPage" element={<Projects />} />

          <Route path="/ContactPage" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// ===========================================================================//
// Things I need to do!

// 1: create json database review net ninja video >> /(done)
// 2: Routes check out how to use routes effectively to get my pages connected and working >> / (I think I've done it)
// 3: Complete my Projet/Projects page so the bootstrap and js work together sort out the syntax so
// I can a) render my six projects on the JSON file
// 4: Make a reusable component that ingests JSON data as props >> (added props & JSON data but not able to test yet)
// 5: Must utilize Router props to properly render the right project based on user selection
// 6: link linkedin CV and github to contact page
