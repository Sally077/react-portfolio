import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
     
      </li>
    </ul>
  );
}

export default NavTabs;
