import { motion } from "framer-motion";
import { EDUCATION } from "@/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Education"
          title="The formal stuff."
          subtitle="Bachelor of Technology in Computer Science & Engineering."
        />

        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="glass-strong rounded-3xl p-6 md:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-glow mb-2">
                  {edu.degree}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">
                  {edu.field}
                </h3>
                <div className="mt-2 text-zinc-300">{edu.school}</div>
                <div className="text-sm text-zinc-500 mt-0.5">{edu.location}</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm md:text-base text-zinc-200">
                  {edu.period}
                </div>
                <div className="mt-2 chip-cyan">{edu.status}</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Relevant Coursework
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
