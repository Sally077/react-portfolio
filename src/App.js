import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavTabs from "./Components/NavTabs";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

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
  