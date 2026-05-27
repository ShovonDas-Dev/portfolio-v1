
import HeroSection from '../component/home/HeroSection'
import AboutMe from '../component/home/AboutMe'
import Skills from "../component/home/Skills"
import ProjectsSection from '../component/home/ProjectsSection'
import SectionHeader from '../assets/SectionHeader'

const Home = () => {
  return (
<>
    <div>
        <HeroSection />
    </div>
    <div>
      <AboutMe/>
      <p></p>
    </div>
    <div className='bg-bg1 py-30'>
      <div className=' max-w-6xl center  mx-auto'>
      <Skills/>
    </div>
    </div>
    <section className="relative overflow-hidden  bg-bg2   px-6 sm:px-10 lg:px-20">
      
        <SectionHeader title="My Projects" subtitle="A selection of my recent work"  >
        <ProjectsSection/>
      </SectionHeader>
     
    </section>
    
</>
  )
}

export default Home
