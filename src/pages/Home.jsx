
import HeroSection from '../component/home/HeroSection'
import AboutMe from '../component/home/AboutMe'
import Skills from "../component/home/Skills"
import ProjectsSection from '../component/home/ProjectsSection'

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
    <div className='bg-bg1'>
      <div className=' max-w-6xl center  mx-auto'>
      <Skills/>
    </div>
    </div>
    <div>
      <ProjectsSection/>
    </div>
</>
  )
}

export default Home
