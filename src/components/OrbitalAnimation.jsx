import React from "react";
import { motion } from "framer-motion";

import NextjsLogo from "../assets/OrbitLogo/nextjs.svg";
import TailwindLogo from "../assets/OrbitLogo/tailwind.svg";
import ReactLogo from "../assets/OrbitLogo/ReactLogo.svg";
import NodeLogo from "../assets/OrbitLogo/Node.png";
import MongoDBLogo from "../assets/OrbitLogo/MongoDB_idxmboBE0D_0.svg";
import ExpressLogo from "../assets/OrbitLogo/Express.com.png";

const LOGO_PATHS = {
  nextjs: NextjsLogo,
  react: ReactLogo,
  node: NodeLogo,
  mongodb: MongoDBLogo,
  express: ExpressLogo,
  tailwind: TailwindLogo,
};

// Responsive scaling (important part)
const orbits = [
  {
    radius: 60,
    duration: 10,
    logos: [
      { img: LOGO_PATHS.nextjs, size: 38, initialOffset: 0 },
      { img: LOGO_PATHS.react, size: 30, initialOffset: 120 },
    ],
  },
  {
    radius: 100,
    duration: 14,
    logos: [
      { img: LOGO_PATHS.mongodb, size: 38, initialOffset: 225 },
      { img: LOGO_PATHS.node, size: 30, initialOffset: 55 },
    ],
  },
  {
    radius: 140,
    duration: 18,
    logos: [
      { img: LOGO_PATHS.express, size: 34, initialOffset: 160 },
      { img: LOGO_PATHS.tailwind, size: 34, initialOffset: 300 },
    ],
  },
];

const OrbitalAnimation = () => {
  return (
    <div className="flex items-center justify-center w-full  overflow-hidden">
      <div className="relative w-[320px] sm:w-[420px] md:w-[520px] aspect-square flex items-center justify-center">

        {/* Center Node */}
        <div className="absolute w-10 h-10 sm:w-15 sm:h-15 bg-black rounded-full border border-gray-700 flex items-center justify-center z-10 shadow-lg" />

        {/* Orbits */}
        {orbits.map((orbit, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center"
          >
            {/* Orbit ring */}
            <div
              className="absolute border border-dashed border-gray-600 rounded-full"
              style={{
                width: `${orbit.radius * 2}px`,
                height: `${orbit.radius * 2}px`,
              }}
            />

            {/* Logos */}
            {orbit.logos.map((logo, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  width: 0,
                  height: 0,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: orbit.duration,
                  ease: "linear",
                  repeat: Infinity,
                  delay: -(logo.initialOffset / 360) * orbit.duration,
                }}
              >
                <div
                  className="absolute bg-[#0E121F] p-1 rounded-full shadow-md"
                  style={{
                    width: `${logo.size}px`,
                    height: `${logo.size}px`,
                    top: "50%",
                    left: `${orbit.radius}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.img
                    src={logo.img}
                    className="w-full h-full object-contain"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: orbit.duration,
                      ease: "linear",
                      repeat: Infinity,
                      delay:
                        -(logo.initialOffset / 360) * orbit.duration,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrbitalAnimation;