import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"; 


function NavTabs() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
  <a classNameName="navbar-brand" href="#"><img className="logo" src={logo} alt="Avatar logo..."></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color: "#DF678C"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
    </div>
  </div>
</nav>
  
  );
}


export default  NavTabs;



{/* <ul className="nav nav-tabs">
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
</ul> */}