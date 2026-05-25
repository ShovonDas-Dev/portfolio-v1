import React from "react";
import { motion } from "framer-motion";

import SectionHeader from "../../assets/SectionHeader";
import OrbitalAnimation from "../../components/OrbitalAnimation";
import ReactLogo from "../../assets/OrbitLogo/ReactLogo.svg";
import NodeLogo from "../../assets/OrbitLogo/Node.png";
import MongoDBLogo from "../../assets/OrbitLogo/MongoDB_idxmboBE0D_0.svg";
import ExpressLogo from "../../assets/OrbitLogo/Express.com.png";
import TailwindLogo from "../../assets/OrbitLogo/Tailwind.svg";
import NextjsLogo from "../../assets/OrbitLogo/Nextjs.svg";
import JavaScriptLogo from "../../assets/OrbitLogo/Javascript.png";
import TypeScriptLogo from "../../assets/OrbitLogo/ts-logo-round-128.png";

// ✅ Skill Data
const skills = [
  { name: "JavaScript", percent: 90, color: "text-yellow-400", logo: JavaScriptLogo },
  { name: "React", percent: 85, color: "text-aqua", logo: ReactLogo },
  { name: "Node.js", percent: 80, color: "text-green-400", logo: NodeLogo },
  { name: "MongoDB", percent: 75, color: "text-green-500", logo: MongoDBLogo },
  { name: "Express", percent: 70, color: "text-gray-300", logo: ExpressLogo },
  { name: "Tailwind", percent: 88, color: "text-sky-400", logo: TailwindLogo },
  { name: "Next.js", percent: 78, color: "text-white", logo: NextjsLogo },
  { name: "TypeScript", percent: 82, color: "text-blue-400", logo: TypeScriptLogo },
];

const Skills = () => {
  return (
    <div>
      <SectionHeader
        title="Skills"
        subtitle="My technical abilities and expertise"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - ORBIT */}
          <div className="flex justify-center">
            <OrbitalAnimation />
          </div>

          {/* RIGHT SIDE - SKILLS */}
          <div className="grid grid-cols-2    gap-3 p-5 sm:p-2">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#0E121F] shadow-md hover:scale-[1.03] transition-all duration-300"
              >
                {/* Top Row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-inner">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  <div className="flex-1 flex justify-between items-center">
                    <h2 className={`text-base font-medium ${skill.color}`}>
                      {skill.name}
                    </h2>

                    <span className="text-xs text-gray-400">
                      {skill.percent}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-100 to-mint rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}  
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </SectionHeader>
    </div>
  );
};

export default Skills;