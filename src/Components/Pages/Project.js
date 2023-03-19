import { useState } from "react";
import ProjectsPage from "./Components/Pages/ProjectsPage";

const Project = () => {
    const [work, setWork] = useState (null)
    // add loading message
    const [isPending, setIsPending] = useState(true)

    return (
        <div className="Projects">
            <ProjectsPage work={work} />
        </div>
    );
}

useEffect(() => {
    setTimeout(() => {
    fetch("http://localhost:8000/work")
    .then(res =>{
        return res.json()
    })
    .then(data => {
        setWork(data);
        setIsPending(false);
    });
},1000);

}, []);

return(
    <div className="Projects">
        {isPending && <div>Loading... </div>}
    {work && <ProjectsPage work={work} title="All work"/>}
    </div>
)


export default Project;