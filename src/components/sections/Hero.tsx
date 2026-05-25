import { motion } from "framer-motion";
import { PROFILE } from "@/constants";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="section min-h-[100svh] flex-col justify-center md:justify-end pb-32"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-2xl lg:max-w-[44rem]"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-glow-cyan animate-pulse-glow" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">
            Open to fresher & internship roles · {PROFILE.location.split(",")[0]}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-bold leading-[0.95] tracking-[-0.04em]"
        >
          <span className="block text-[clamp(2.5rem,8vw,7rem)] text-white">
            VARSHA
          </span>
          <span className="block text-[clamp(2rem,6vw,5rem)] text-gradient mt-1">
            CHOUHAN
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-base md:text-lg text-zinc-300 leading-relaxed"
        >
          {PROFILE.tagline}.{" "}
          <span className="text-zinc-400">
            Building production payment, webhook, and full-stack systems with
            Java 17, Spring Boot 3, and the MERN stack.
          </span>
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            See my work
            <FiArrowDown />
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
          <div className="flex items-center gap-1 ml-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-cyan-glow hover:border-cyan-glow/40 transition-all"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-cyan-glow hover:border-cyan-glow/40 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="h-10 w-10 grid place-items-center rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-cyan-glow hover:border-cyan-glow/40 transition-all"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Scroll
        </span>
        <div className="h-8 w-px bg-white/10 relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-2 bg-cyan-glow animate-scroll-cue" />
        </div>
      </motion.div>
    </section>
  );
}
