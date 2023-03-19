import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import contact from './ContactPage';

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
      <Routes>
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Contact;
