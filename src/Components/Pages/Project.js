import { useState } from "react";
import ProjectsPage from "./Components/Pages/ProjectsPage";

const Project = () => {
    const [work, setWork] = useState (null)

    return (
        <div className="Projects">
            <ProjectsPage work={work} />
        </div>
    );
}

useEffect(() => {
    fetch("http://localhost:8000/work")
}, []);

return(
    <div className="Projects">
        <ProjectsPage work={work} title="All work"/>
    </div>
)


export default Project;