import React from "react";
import Bootstrap_Portfolio from "../Images/bootstrap-screenshot.jpg";
import Travel_California from "../Images/travel-california.jpg";
import Landing_Page from "../Images/landing-page.jpg";
import Portfolio1 from "../Images/portfolio-01.png";
import Paris_Olympics from "../Images/Paris-Olympics.png";
import CheatSheet from "../Images/cheat-sheet.jpg";
import Project from "./Project";

const workJson =  [
  {
      "title": "CSS Portfolio",
      "body" : "My first Portfolio",
      "img"  :  Portfolio1,
      "id"   : 1

  },
  {
      "title": "Landing Page",
      "body" : "My first Landing Page",
      "img"  : Landing_Page,
      "id"   : 2

  },
  {
      "title": "Paris Olympics",
      "body" : "My first Team Project",
      "img"  : Paris_Olympics,
      "id"   : 3

  },
  {
    "title": "Bootsrap Portfolio",
    "body" : "My first Bootstrap Portfolio",
    "img"  : Bootstrap_Portfolio,
    "id"   : 4
  },
  {
    "title": "Travel California",
    "body" : "My first Travel Page",
    "img"  : Travel_California,
    "id"   : 5
  },
  {
    "title": "Cheatsheet",
    "body" : "A Cheatsheet Page",
    "img"  : CheatSheet,
    "id"   : 6

  }

  
]


const ProjectsPage = () => {
 
  return (
    <Project work={workJson}/>
    )
}


export default ProjectsPage;