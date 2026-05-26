import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BrowserMockup from "../../assets/BrowserMockup";

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
};

const ProjectRow = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isReverse = index % 2 !== 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
        isReverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* ── Text side ── */}
      <motion.div
        variants={isReverse ? fadeRight : fadeLeft}
        className="flex-1 w-full relative"
      >
        {/* Big ghost number */}
        <span
          className={`absolute top-[-5rem] font-bold text-[5rem] leading-none pointer-events-none select-none`}
          style={{
            color: "rgba(167,139,250,0.06)",
            fontFamily: "'Syne', sans-serif",
            [isReverse ? "right" : "left"]: "-0.5rem",
          }}
        >
          {num}
        </span>

        {/* Label */}
        <p
          className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1"
          style={{ color: project.color, fontFamily: "'Syne', sans-serif" }}
        >
          {project.label}
        </p>

        {/* Title */}
        <h3
          className="text-[#f0ecff] text-[2rem] font-bold leading-tight mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {project.title}
        </h3>

        {/* Description card */}
        <div className="text-[#b4aed4] text-sm leading-[1.7] bg-white/[0.04] border border-[rgba(167,139,250,0.15)] rounded-lg px-5 py-4">
          {project.desc}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-[3px] rounded-full border border-[rgba(167,139,250,0.2)] bg-[rgba(167,139,250,0.12)] text-[#c4b5fd]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2.5 mt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[12px] font-medium px-3.5 py-1.5 rounded-md border transition-colors duration-200 hover:bg-white/5"
            style={{
              borderColor: `${project.color}80`,
              color: project.color,
              background: `${project.color}22`,
            }}
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[12px] font-medium px-3.5 py-1.5 rounded-md border border-[rgba(167,139,250,0.4)] text-[#c4b5fd] transition-colors duration-200 hover:bg-[rgba(167,139,250,0.1)]"
          >
            GitHub
          </a>
        </div>
      </motion.div>

      {/* ── Browser mockup side ── */}
      <motion.div
        variants={isReverse ? fadeLeft : fadeRight}
        className="flex-[1.2] w-full"
      >
        <BrowserMockup preview={project.preview} color={project.color} />
      </motion.div>
    </motion.div>
  );
};

export default ProjectRow;
