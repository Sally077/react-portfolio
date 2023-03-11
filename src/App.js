import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavTabs from "./Components/Header";
import Home from "./Components/Pages/HomePage";
import Projects from "./Components/Pages/ProjectsPage";
import Contact from "./Components/Pages/ContactPage";

function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          {/* Wrap Route elements in a Routes component */}
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/" element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            {/* <Route path="Contact" element={<Contact />} /> */}
            {/* Define a route that will have descendant routes */}
            <Route path="contact/*" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
  