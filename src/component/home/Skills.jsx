// import LetterGlitch from "../../components/LetterGlitch";
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
