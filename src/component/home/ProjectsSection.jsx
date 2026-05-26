import { projects } from "../../Data/ProjectsData";
import ProjectRow from "./ProjectRow";
import SectionHeader from "../../assets/SectionHeader"; 

const ProjectsSection = () => (
  // Ekhaney bg-[#0a0a0a] (dark background) deya hoyeche jate dot-gulo fute utthe pare
 <section className="relative overflow-hidden bg-bg2 min-h-screen  px-6 sm:px-10 lg:px-20">
<SectionHeader title="My Projects" subtitle="A selection of my recent work"  >
   
    

    {/* Content Area */}
    <div className=" relative z-10 max-w-6xl mx-auto space-y-28 pt-20">
      {projects.map((project, index) => (
        <ProjectRow key={project.id} project={project} index={index} />
      ))}
    </div>
    </SectionHeader>
  </section>

);

export default ProjectsSection;