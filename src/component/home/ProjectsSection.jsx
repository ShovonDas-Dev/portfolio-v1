import { projects } from "../../Data/ProjectsData";
import ProjectRow from "./ProjectRow";


const ProjectsSection = () => (

    <div className=" relative z-10 max-w-6xl mx-auto space-y-28 py-50">
      {projects.map((project, index) => (
        <ProjectRow key={project.id} project={project} index={index} />
      ))}
    </div>
   

);

export default ProjectsSection;