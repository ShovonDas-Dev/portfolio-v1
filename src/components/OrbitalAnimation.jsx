import React from 'react';
import { motion } from 'framer-motion';
import NextjsLogo from "../assets/OrbitLogo/nextjs.svg";
import TailwindLogo from "../assets/OrbitLogo/tailwind.svg";
import ReactLogo from "../assets/OrbitLogo/ReactLogo.svg";
import NodeLogo from "../assets/OrbitLogo/Node.png";
import MongoDBLogo from "../assets/OrbitLogo/MongoDB_idxmboBE0D_0.svg";
import ExpressLogo from "../assets/OrbitLogo/ExpressJS_id74npXgk8_1.svg";

// Replace these URL with your own logo images
const LOGO_PATHS = {
  nextjs: NextjsLogo,
  react: ReactLogo,
  node: NodeLogo,
  mongodb: MongoDBLogo,
  express: ExpressLogo,
  tailwind: TailwindLogo,
};

// Orbital configuration data
const orbits = [
  {
    radius: 70, // Inner orbit
    duration: 10, // Faster
    logos: [
      { img: LOGO_PATHS.nextjs, size: 40, initialOffset: 0 },
      { img: LOGO_PATHS.react, size: 30, initialOffset: 120 }
    ],
  },
  {
    radius: 120, // Middle orbit
    duration: 15,
    logos: [
      
      { img: LOGO_PATHS.mongodb, size: 40, initialOffset: 225 },
        { img: LOGO_PATHS.node, size: 30, initialOffset: 45 },
    ],
  },

  {
    radius: 170, // Outer orbit
    duration: 20, // Slower
    logos: [
      { img: LOGO_PATHS.express, size: 35, initialOffset: 160 },
      { img: LOGO_PATHS.tailwind, size: 35, initialOffset: 300 },
    ],
  },
];

const OrbitalAnimation = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      
      {/* Central Base Node */}
      <div className="absolute w-24 h-24 bg-black rounded-full border border-gray-700 flex items-center justify-center shadow-2xl z-10">
        <span className="text-5xl font-mono font-black text-white transform -scale-x-100">
          N
        </span>
      </div>

      {/* Orbits and Logos */}
      {orbits.map((orbit, index) => (
        <div
          key={index}
          className="absolute flex items-center justify-center"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          
          {/* Static Dotted Orbit Ring */}
          <div
            className="absolute border border-dashed border-gray-600 rounded-full"
            style={{
              width: `${orbit.radius * 2}px`,
              height: `${orbit.radius * 2}px`,
            }}
          />

          {/* Animated Logos Group (revolving on the path) */}
          {orbit.logos.map((logo, logoIndex) => (
            <motion.div
              key={logoIndex}
              className="absolute"
              style={{
                width: `${logo.size}px`,
                height: `${logo.size}px`,
              }}
              // Orbital Animation Logic
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: orbit.duration,
                ease: 'linear',
                repeat: Infinity,
                delay: -(orbit.initialOffset / 360) * orbit.duration, // Stagger initial positions
              }}
            >
              {/* Actual Logo Image, offset from the center to its orbital path */}
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden p-1 shadow-md bg-[#0E121F]"
                style={{
                  top: '50%',
                  left: `${50 + (orbit.radius / logo.size) * 100}%`, // Position logo out from center
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* Counter-rotation to keep the logo upright */}
                <motion.img
                  src={logo.img}
                  alt="stack logo"
                  className="w-full h-full object-contain"
                  animate={{
                    rotate: -360, // Reverse orbit rotation
                  }}
                  transition={{
                    duration: orbit.duration,
                    ease: 'linear',
                    repeat: Infinity,
                    delay: -(logo.initialOffset / 360) * orbit.duration,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrbitalAnimation;