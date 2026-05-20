
import HeroSection from '../component/home/HeroSection'
import AboutMe from '../component/home/AboutMe'
import Skills from "../component/home/Skills"

const Home = () => {
  return (
<>
    <div>
        <HeroSection />
    </div>
    <div>
      <AboutMe/>
    </div>
    <div>
      <Skills/>
    </div>
</>
  )
}

export default Home
