import React from "react";
import "./Components/Styles/App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Components/Header";
import NavTabs from "./Components/NavTab";
import Home from "./Components/Pages/HomePage";
import Projects from "./Components/Pages/ProjectsPage";
import Contact from "./Components/Pages/ContactPage";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
    return (
      <>
       <Header />
      <NavTabs />
      <div className="App">

      <Home />
      {/* <Projects />
      <Contact />
      */}
       </div>
      </>
     
      
    );
}
  
  export default App;
  

  // <Router>
  //       <div>
  //         <>
  //         <Header />
  //         <NavTabs /> 
  //         {/* {/* <ProjectsPage />     */}
  //         </>
  //         {/* Wrap Route elements in a Routes component */}
  //         <Routes>
  //           {/* Define routes using the Route component to render different page components at different paths */}
  //           {/* Define a default route that will render the Home component */}
  //           {/* <Route path="Header" element={<Header />}/> */}
  //           <Route path="/" element={<Home />} />
  //           <Route path="Projects" element={<Projects />} />
           
  //           {/* <Route path="Contact" element={<Contact />} /> */}
  //           {/* Define a route that will have descendant routes */}
  //           <Route path="contact" element={<Contact />} />
  //         </Routes>
  //       </div>
  //     </Router> 
  //   );
  // }