import React from "react";
import Bootstrap_Portfolio from "../Images/bootstrap-screenshot.jpg";
import Travel_California from "../Images/travel-california.jpg";
import Landing_Page from "../Images/landing-page.jpg";
import Portfolio1 from "../Images/portfolio-01.png";
import Paris_Olympics from "../Images/Paris-Olympics.png";
import CheatSheet from "../Images/cheat-sheet.jpg";


const ProjectsPage = () => {
  return (
  <div className="ProjectsPage">
    <div className="container">
    <h1 className="text-center py-5">ProjectsPage</h1>
    <p>
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
      ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta.
    </p>
   <div className="image-box-wrapper row justify-content-center">
    <img className="projects" src={Travel_California} alt="Travel California..."></img>
    <div className="image-box-wrapper row justify-content-center">
    </div>
   </div>
   {/*  */}
   <div className="image-box-wrapper row justify-content-center">
    <img className="projects" src={Bootstrap_Portfolio} alt="Bootstrap Project..."></img>
    <div className="image-box-wrapper row justify-content-center">
    </div>
   </div>
    {/*  */}
    <div className="image-box-wrapper row justify-content-center">
    <img className="projects" src={Landing_Page} alt="Landing Page..."></img>
    <div className="image-box-wrapper row justify-content-center">
    </div>
   </div>
    {/*  */}
   <div className="image-box-wrapper row justify-content-center">
    <img className="projects" src={Portfolio1} alt="First Portfolio..."></img>
    <div className="image-box-wrapper row justify-content-center">
    </div>
   </div>
    {/*  */}
    <div className="image-box-wrapper row justify-content-center">
    <img className="projects" src={Paris_Olympics} alt="Paris Olympics site.."></img>
    <div className="image-box-wrapper row justify-content-center">
    </div>
   </div>
   {/*  */}
   <div className="image-box-wrapper row justify-content-center">
    <img className="projects" src={CheatSheet} alt="Cheat Sheet Page.."></img>
    <div className="image-box-wrapper row justify-content-center">
    </div>
   </div>


  </div>
  </div>
)
}

export default ProjectsPage;