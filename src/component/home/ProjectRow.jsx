import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BrowserMockup from "../../assets/BrowserMockup";
import Button from "../../assets/Button";

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.15,
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.15,
    },
  },
};

const ProjectRow = ({ project, index }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const isReverse = index % 2 !== 0;

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      className={`
        relative
        flex
        flex-col
        lg:flex-row
        items-center
        gap-10
        lg:gap-16
        py-10
        md:py-15
        ${isReverse
          ? "lg:flex-row-reverse"
          : ""
        }
      `}
    >
      {/* ───────────────── TEXT SIDE ───────────────── */}
      <motion.div
        variants={isReverse ? fadeRight : fadeLeft}
        className="flex-1 w-full relative "
      >
        {/* Ghost Number */}
        <span
          className="
            absolute
            top-[-9rem]
            text-[90px]
            md:text-[120px]
            font-extrabold
            leading-none
            pointer-events-none
            select-none
            text-mint/10
            drop-shadow-[0_0_20px_rgba(18,247,214,0.08)]
          "
          style={{
            fontFamily: "'Syne', sans-serif",
            [isReverse ? "right" : "left"]: "-0.5rem",
          }}
        >
          {num}
        </span>

        {/* Label */}
        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.2em]
            font-semibold
            mb-2
            text-mint
            font-secondary
          "
          
        >
          {project.label}
        </p>

        {/* Title */}
        <h3
          className="
            text-aqua
            text-[2rem]
            md:text-[2.4rem]
            font-bold
            leading-tight
            mb-5
            font-primary
          "
        >
          {project.title}
        </h3>

        {/* Description Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-mint/15
            bg-bg2/80
            backdrop-blur-md
            px-5
            py-5
            text-[#d1d5db]
            leading-[1.8]
            shadow-[0_0_25px_rgba(18,247,214,0.05)]
            transition-all
            duration-300
            hover:shadow-[0_0_35px_rgba(18,247,214,0.12)]
            hover:-translate-y-1
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              -top-10
              -right-10
              w-32
              h-32
              bg-mint/10
              blur-3xl
              rounded-full
            "
          />

          <p className="relative z-10 font-secondary text-sm">
            {project.desc}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mt-5">
          {project.tech.map((t) => (
              <Button key={t.nam} name={t} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {/* Live Demo */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="
              px-5
              py-2
              rounded-xl
              bg-mint
              text-bg2
              text-sm
              font-semibold
              shadow-[0_0_20px_rgba(18,247,214,0.2)]
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(18,247,214,0.35)]
              font-primary
            "
          >
            Live Demo
          </a>

          {/* GitHub */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="
              px-5
              py-2
              rounded-xl
              border
              border-mint/40
              text-mint
              text-sm
              font-semibold
              bg-bg1/30
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-mint
              hover:text-bg2
              hover:shadow-[0_0_25px_rgba(18,247,214,0.25)]
              font-primary
            "
          >
            GitHub
          </a>
        </div>
      </motion.div>

      {/* ───────────────── MOCKUP SIDE ───────────────── */}
      <motion.div
        variants={isReverse ? fadeLeft : fadeRight}
        className="
          flex-[1.2]
          w-full
          relative
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            bg-mint/10
            blur-[120px]
            rounded-full
            scale-75
          "
        />

        <div className="relative z-10">
          <BrowserMockup
            preview={project.preview}
            color={project.color}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectRow;
