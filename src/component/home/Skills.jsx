import React from "react";
import { motion } from "framer-motion";

import SectionHeader from "../../assets/SectionHeader";
import OrbitalAnimation from "../../components/OrbitalAnimation";
import skills from "../../Data/skill";
import CodeLogo from "../../assets/OrbitLogo/CodeLogo.png";

// ✅ Skill Data


const Skills = () => {

  return (
    <div>
      <SectionHeader
        title="Skills"
        subtitle="My technical abilities and expertise"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - ORBIT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center">
            <div>
              <motion.img
                src={CodeLogo}
                alt="Code Logo"
                className="w-15 h-15 md:w-40 md:h-40  absolute sm:relative rounded-full flex items-center justify-center "
                animate={{
                  y: [0, -20, 0] 
                }}
                transition={{
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
            <OrbitalAnimation />
          </motion.div>

          {/* RIGHT SIDE - SKILLS */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-2    gap-3 p-5 sm:p-2">
            
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

          </motion.div>
        </div>
      </SectionHeader>
    </div>
  );
};

export default Skills;