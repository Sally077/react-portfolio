import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import contact from './ContactPage';
// import LinkedIn from 'https://www.linkedin.com/feed/';
// import GitHub from "https://github.com/Sally077";
// import CV from "./Components/Sally Hedges CV pdf";

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
       Below are some buttons to contact me.
      </p>
      <Link to="contact" role="button" className="btn btn-link">
        LinkedIn
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        My CV
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        GitHub
      </Link>
      <Routes>
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Contact;
