import LetterGlitch from "../../components/LetterGlitch";
import SectionHeader from "../../assets/SectionHeader";
import OrbitalAnimation from "../../components/OrbitalAnimation";

const Skills = () => {
  return (
    <div>
      <div>
        <SectionHeader
          title="Skills"
          subtitle="My technical abilities and expertise"
        >
          {/* Skill section Body */}
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10  ">
            <div className="">
                <OrbitalAnimation />
              {/* <div className=" w-full h-74 bg-[#1f242d] relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.15)] flex items-center justify-center">
                <LetterGlitch
                  glitchColors={[
                    "#2b4539",
                    "#61dca3",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                  ]}
                  glitchSpeed={40}
                  centerVignette
                  outerVignette
                  smooth
                />
              </div> */}
            </div>
            <div>
              <h1>skill</h1>
            </div>
          </div>
        </SectionHeader>
      </div>
    </div>
  );
};

export default Skills;
