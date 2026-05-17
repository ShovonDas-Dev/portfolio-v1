import React from "react";
import details from "../../Data/HeroData"
import {
  FaCode,
  FaDownload,
  FaEnvelope,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";

const Hero = () => {
   const heroDetails = details[0].hero;

    
  return (
    <section className="min-h-screen bg-[#262c36] text-white flex items-center justify-center px-6 py-10">
      <div className="max-w-7xl w-full grid lg:grid-cols-3 gap-10 items-center">
        
        {/* LEFT CARD */}
        <div className="flex justify-center">
          <div className="relative border-2 border-mint rounded-tl-[120px] rounded-br-[120px] p-8 w-[320px] bg-[#1f242d] shadow-[0_0_30px_rgba(0,255,255,0.15)]">
            
            {/* Profile */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://i.ibb.co/7QpKsCX/avatar.png"
                alt="profile"
                className="w-24 h-24 rounded-full border-4 border-mint object-cover"
              />

              <h2 className="text-3xl mt-4 font-semibold">{heroDetails.name}</h2>

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
                <span
                  key={skill}
                  className="border border-mint text-mint px-3 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Button */}
            <button className="mt-8 bg-white text-black px-6 py-3 rounded-full flex items-center gap-3 hover:scale-105 duration-300">
              Download CV
              <FaDownload />
            </button>
          </div>
        </div>

        {/* MIDDLE CONTENT */}
        <div>
          <h3 className="text-mint text-6xl mb-10">Developer</h3>

          <p className="text-mint mb-3">&lt;h1&gt;</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
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
        </div>

        {/* RIGHT STATS */}
        <div className="flex justify-center">
          <div className="bg-[#1b2028] rounded-[50px] p-8 w-[240px] space-y-8 shadow-xl">
            
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-mint">
                <FaCode />
              </div>

              <div>
                <h2 className="text-mint text-4xl font-bold">4</h2>
                <p className="text-sm text-gray-300">
                  Programming <br /> Language
                </p>
              </div>
            </div>

            <hr className="border-gray-700" />

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-mint">
                <FaBriefcase />
              </div>

              <div>
                <h2 className="text-mint text-4xl font-bold">6</h2>
                <p className="text-sm text-gray-300">
                  Development <br /> Tools
                </p>
              </div>
            </div>

            <hr className="border-gray-700" />

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-mint">
                <FaTrophy />
              </div>

              <div>
                <h2 className="text-mint text-4xl font-bold">8</h2>
                <p className="text-sm text-gray-300">
                  Years of <br /> Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;