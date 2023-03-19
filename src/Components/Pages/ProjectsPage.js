import React from "react";
import Bootstrap_Portfolio from "../Images/bootstrap-screenshot.jpg";
import Travel_California from "../Images/travel-california.jpg";
import Landing_Page from "../Images/landing-page.jpg";
import Portfolio1 from "../Images/portfolio-01.png";
import Paris_Olympics from "../Images/Paris-Olympics.png";
import CheatSheet from "../Images/cheat-sheet.jpg";


const ProjectsPage = (props) => {
  const work = props.work
  return (
  <div className="ProjectsPage"> {/* need to find a way to link each id and title details*/}
    <div className="container">
    {work.map((work) => (
    <div className="work-element1" key={work.id}>
   <h1 className="text-center py-5">ProjectsPage</h1>
    <p> 
      Here a just a few of the projects I have made from my front end development course.
    </p>
    <div className="project-image-box">{/* now does the bootstrap code belong on the project.js??  */}
    <img className="projects" src={Travel_California} alt="Travel California..."key={work.img}></img>
   </div>
    

   {/*  */}
    <div className="project-image-box">
    <img className="projects" src={Bootstrap_Portfolio} alt="Bootstrap Project..."></img>
    </div>
   
   
    {/*  */}
    <div className="project-image-box">
    <img className="projects" src={Landing_Page} alt="Landing Page..."></img>
    </div>
 
    {/*  */}
    <div className="project-image-box">
    <img className="projects" src={Portfolio1} alt="First Portfolio..."></img>
   </div>
    {/*  */}
    <div className="project-image-box">
    <img className="projects" src={Paris_Olympics} alt="Paris Olympics site.."></img>
   </div>

   {/*  */}
   <div className="project-image-box">
    <img className="projects" src={CheatSheet} alt="Cheat Sheet Page.."></img>
   </div>

  </div>


  
    ))}


export default ProjectsPage;