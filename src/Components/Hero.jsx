import React from 'react';
import { motion } from 'framer-motion';
import RubiksScene from '../animation/RubiksScene'; // আগের দেওয়া কিউব কম্পোনেন্টটি এখানে ইমপোর্ট করুন

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#030712] flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 md:px-20 py-12 overflow-hidden">
      
      {/* Background Glow (ভিডিওর মতো হালকা আভা) */}
      <div className="absolute top-[-12%] left-[-12%] w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] bg-blue-900/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-12%] right-[-12%] w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] bg-purple-900/20 blur-[100px] rounded-full" />

      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            I'm <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Shovon Das
            </span>
          </h1>
          {/* <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Building Digital <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Experiences
            </span>
          </h1> */}
          <h2 className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            Frondend Developer | ReactJS | NextJS
          </h2>
          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            I am a passionate frontend developer with expertise in ReactJS and NextJS. I create engaging and responsive web applications that provide seamless user experiences. With a strong focus on performance and design, I strive to bring ideas to life through code.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              View Projects
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border border-gray-700 text-white font-medium rounded-full hover:bg-white/5 transition-all">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Side: The 3D Cube */}
      <div className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-[600px] mt-10 md:mt-0 flex items-center justify-center">
        <motion.div 
          className="w-full h-full max-w-[560px] mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <RubiksScene />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;