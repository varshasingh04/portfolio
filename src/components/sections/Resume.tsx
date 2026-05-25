import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { PROFILE } from "@/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Resume() {
  return (
    <section id="resume" className="section !min-h-[80vh]">
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Resume"
          title="Built from projects, curiosity, and continuous learning."
          subtitle="Formatted for recruiters and ATS platforms alike."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-strong rounded-3xl p-6 md:p-10 grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center"
        >
          <motion.a
            href={PROFILE.resumePath}
            target="_blank"
            rel="noreferrer"
            initial={{ rotate: -4, y: 12 }}
            whileInView={{ rotate: 0, y: 0 }}
            whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative block aspect-[3/4] w-full max-w-[280px] mx-auto"
            aria-label="Open resume PDF in a new tab"
          >
            <div className="absolute -inset-4 bg-cyan-glow/15 rounded-2xl blur-2xl transition-opacity group-hover:opacity-80" />
            <div className="relative h-full w-full glass rounded-2xl border-glow overflow-hidden bg-white">
              <iframe
                src={`${PROFILE.resumePath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&page=1`}
                title="Resume preview"
                className="absolute inset-0 h-full w-full pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 text-[8px] uppercase tracking-widest text-white/80 mix-blend-difference">
                PDF · 2 pages
              </div>
            </div>
          </motion.a>

          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">
              Get the full picture.
            </h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              Skills, experience, projects, and education — all in a single
              recruiter-friendly PDF. ATS-optimized and updated for {new Date().getFullYear()}.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={PROFILE.resumePath}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <FiExternalLink /> View Resume
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="glass rounded-xl px-3 py-2.5">
                <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Format
                </div>
                <div className="mt-0.5 text-zinc-200 font-mono">PDF / A4</div>
              </div>
              <div className="glass rounded-xl px-3 py-2.5">
                <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Length
                </div>
                <div className="mt-0.5 text-zinc-200 font-mono">2 pages</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
