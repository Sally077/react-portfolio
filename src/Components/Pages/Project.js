import { useState } from "react";
import ProjectsPage from "./Components/Pages/ProjectsPage";

const Project = () => {
    const [work, setWork] = useState ([
        {title: 'Landing Page', body: 'My first HTML Doc', img: '../Images/landing-page.jpg', id: 1 },
        {title: 'BootStrap Portfolio', body: 'My first Bootstrap Portfolio', img: '../Images/bootstrap-screenshot.jpg', id: 2 }
    ])

    return (
        <div className="Projects">
            <ProjectsPage work={work} />
        </div>
    );
}

useEffect(() => {
    console.log("UseEffect has run");
}, [];

return(
    <div className="Projects">
        <ProjectsPage work={work} title="All work"/>
    </div>
),


export default Project;