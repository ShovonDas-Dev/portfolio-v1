import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SectionHeader = ({ title, subtitle, children }) => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center center"],
  });

  // mouse UI move down
  const mouseY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  // dashed line shrink
  const lineHeight = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={sectionRef}
      className="section-header"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <div className="pt-4 flex flex-col items-center">

        {/* Scroll Indicator */}
        <div className="relative h-[160px] flex flex-col items-center">

          {/* Mouse UI Move */}
          <motion.div
            style={{
              y: mouseY,
            }}
            className="absolute top-0 flex flex-col items-center"
          >

            {/* Mouse */}
            <div className="w-6 h-10 border-2 border-mint rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="w-1 h-2 bg-mint rounded-full"
              />
            </div>

            {/* Dashed Line */}
            <motion.div
              style={{
                height: lineHeight,
              }}
              className="w-0 border-l-2 border-dashed border-mint/60 mt-2 origin-top"
            />

          </motion.div>

        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-mint font-primary text-center">
          {title}
        </h1>

        {/* Bottom line */}
        <div className="flex">
          <div className="h-[10px] w-[10px] bg-mint mt-[12px] rounded-full"></div>

          <div className="h-[3px] w-24 bg-mint mt-4"></div>

          <div className="h-[10px] w-[10px] bg-mint mt-[12px] rounded-full"></div>
        </div>

        <p className="text-mint/80 mt-4 font-secondary text-sm md:text-lg">
          {subtitle}
        </p>

      </div>

      <div>
        {children}
      </div>

    </motion.div>
  );
};

export default SectionHeader;