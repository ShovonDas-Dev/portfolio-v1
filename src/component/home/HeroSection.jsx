
import Button from "@/assets/Button";
import details from "../../Data/HeroData"
import CountUp from "../../assets/Counter"
import { motion } from "framer-motion";

import {
  FaCode,
  FaDownload,
  FaEnvelope,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";


const Hero = ( ) => {
   const heroDetails = details[0].hero;

    
  return (
    <section>
    <section className="pt-20 md:pt-20 min-h-screen bg-bg1 text-white flex items-center justify-center px-6 py-10">
      <div className="max-w-8xl w-full grid lg:grid-cols-3 gap-10 md:gap-0 items-center">
        
        {/* LEFT CARD */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center p-6">
          <div className=" relative border-2 border-mint rounded-tl-[120px] rounded-br-[120px] p-8 w-[320px] bg-[#1f242d] shadow-[0_0_30px_rgba(0,255,255,0.15)]">
            
            {/* Profile */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://i.ibb.co/7QpKsCX/avatar.png"
                alt="profile"
                className="w-24 h-24 rounded-full border-4 border-mint object-cover"
              />

              <h2 className="text-2xl mt-4 font-semibold">{heroDetails.name}</h2>

              <p className="text-gray-400 text-sm mt-1">
                {heroDetails.title}
              </p>
            </div>

            {/* Info */}
            <div className="mt-8 space-y-4 text-sm text-gray-300">
              <p>📧 {heroDetails.email}</p>
              <p>📍 {heroDetails.loacation}</p>
              <p>💼 Full-time / Freelancer</p>
              <p>🌐 {heroDetails.website}</p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {heroDetails.skills.map((skill) => (
                <Button key={skill} name={skill} />
                
              ))}
            </div>

            {/* Button */}
            <a
              href={heroDetails.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              download="Shovon_CV.pdf"
              className="mt-4 bg-white text-black px-6 w-[200px] py-3 rounded-full flex items-center gap-3 hover:scale-105 duration-300">
              Download CV
              <FaDownload />
            </a>
          </div>
        </motion.div>

        {/* MIDDLE CONTENT */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center lg:text-left space-y-6">
          <h3 className="text-mint text-5xl mb-10">Developer</h3>

          <p className="text-mint mb-3">&lt;h1&gt;</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hey <br />
            I’m <span className="text-mint">Shovon,</span> <br />
            Full-Stack Developer
          </h1>

          <p className="text-mint mt-3">&lt;/h1&gt;</p>

          <p className="text-mint mt-8">&lt;p&gt;</p>

          <p className="text-gray-300 mt-3 max-w-lg leading-relaxed">
            {heroDetails.p}
          </p>

          <p className="text-mint mt-3">&lt;/p&gt;</p>

          <button className="mt-10 text-mint text-3xl font-semibold flex items-center gap-4 hover:translate-x-2 duration-300">
            Let’s Talk
            <span className="border border-mint p-3 rounded-lg">
              <FaEnvelope size={18} />
            </span>
          </button>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-[#1b2028] rounded-[50px] p-8 w-[240px] space-y-8 shadow-xl">
            
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-mint hover:bg-mint hover:text-bg2 transition-colors duration-300 ">
                <FaCode />
              </div>

              <div>
                <CountUp className="text-mint text-4xl font-bold"  from={0} to={2} />
                <p className="text-sm text-gray-300">
                  Programming <br /> Language
                </p>
              </div>
            </div>

            <hr className="border-gray-700" />

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-mint hover:bg-mint hover:text-bg2 transition-colors duration-300  ">
                <FaBriefcase />
              </div>

              <div>
                
                <CountUp className="text-mint text-4xl font-bold"  from={10} to={4} />
                <p className="text-sm text-gray-300">
                  Development <br /> Tools
                </p>
              </div>
            </div>

            <hr className="border-gray-700" />

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-mint hover:bg-mint hover:text-bg2 transition-colors duration-300  ">
                <FaTrophy />
              </div>

              <div>
                <CountUp className="text-mint text-4xl font-bold"  from={30} to={10} />
                <p className="text-sm text-gray-300">
                  Years of <br /> Experience
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

        
    </section>
  );
};

export default Hero;