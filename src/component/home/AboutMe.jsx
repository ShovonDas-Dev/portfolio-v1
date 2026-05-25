
import SectionHeader from "@/assets/SectionHeader";
import AboutMeBg from "../../../public/CV/image/AboutMeBg.png";
import { motion } from "framer-motion";
const AboutMe = () => {
  // টপোগ্রাফিক ব্যাকগ্রাউন্ডের জন্য একটি ক্লিন SVG প্যাটার্ন (Base64)
  const topoBackground = {
    backgroundImage: `url(${AboutMeBg})`,
  };

  return (

    
    <section 
      style={topoBackground} 
      className="relative min-h-screen bg-center bg-cover bg-[#111622] text-gray-300 py-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      
     <SectionHeader>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* বাম দিকের কন্টেন্ট এরিয়া (Column spans 7 on large screens) */}
        <motion.div className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          
          {/* কাস্টম কর্নার টাইটেল ফ্রেম (About Me) */}
          <div className="inline-block border-2 border-[#00ffcc] text-white font-semibold text-xl px-6 py-2 rounded-tl-[24px] rounded-br-[24px] bg-[#1f242d] shadow-[0_0_15px_rgba(0,255,255,0.1)]">
            About Me
          </div>

          {/* কোড এডিটর স্টাইল টেক্সট বক্স */}
          <div className="bg-[#171c26]/90 border border-gray-800 p-6 md:p-8 rounded-2xl font-mono text-sm md:text-base leading-relaxed shadow-xl backdrop-blur-sm">
            {/* ওপেনিং ট্যাগ */}
            <p className="text-[#ff9100] mb-2 font-semibold">&lt;p&gt;</p>
            
            <div className="pl-4 space-y-4 text-gray-300">
              <h3 className="text-[#00ffcc] text-2xl font-sans font-bold tracking-wide">Hello!</h3>
              
              <p>
                My name is <span className="text-[#00ffcc] font-bold">Sinan</span> and I specialize in web development that utilizes{' '}
                <span className="text-[#00ffcc]">HTML</span>, <span className="text-[#00ffcc]">CSS</span>,{' '}
                <span className="text-[#00ffcc]">JS</span>, and <span className="text-[#00ffcc]">REACT</span> etc.
              </p>
              
              <p>
                I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
              </p>
              
              <p>
                When I'm not coding, I am <span className="text-[#00ffcc] underline decoration-wavy">writing blogs</span>, reading, or picking up some new hands-on art project like <span className="text-[#00ffcc]">photography</span>.
              </p>
              
              <p>
                I like to have my perspective and belief systems challenged so that I see the world through new eyes.
              </p>
            </div>

            {/* ক্লোজিং ট্যাগ */}
            <p className="text-[#ff9100] mt-4 font-semibold">&lt;/p&gt;</p>
          </div>
        </motion.div>

        {/* ডান দিকের ইমেজ কার্ড (Column spans 5 on large screens) */}
        <motion.div className="lg:col-span-5 w-full flex justify-center" 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          
        >
          <div className="relative group max-w-sm lg:max-w-full overflow-hidden rounded-2xl border-2 border-[#00ffcc]/30 shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all duration-300 hover:border-[#00ffcc] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" // আপনার ইমেজ পাথ এখানে দিন
              alt="Laptop Coding"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
     </SectionHeader>

      {/* ২. মেইন রেস্পন্সিভ গ্রিড কন্টেইনার */}

    </section>
  
  );
};

export default AboutMe;