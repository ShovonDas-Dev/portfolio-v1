import letterGlitch from "../../components/LetterGlitch"
import SectionHeader from '../../assets/SectionHeader'

const Skills = () => {
    return (
        <div>
            <div className='bg-bg1'>
                <SectionHeader title="Skills" subtitle="My technical abilities and expertise">
                    <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
  <letterGlitch
    glitchColors={["#2b4539","#61dca3","#ffffff","#ffffff","#ffffff"]}
    glitchSpeed={40}
    centerVignette
    outerVignette
    smooth
  />
</div>

                </SectionHeader>

            </div>

        </div>
    )
}

export default Skills
