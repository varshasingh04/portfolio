import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FiAward } from "react-icons/fi";

export function Certifications() {
  return (
    <section id="certifications" className="section !min-h-[80vh]">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Certifications & Achievements"
          title="Always learning."
          subtitle="Self-driven study + LeetCode reps."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-3xl p-6 hover:border-cyan-glow/30 transition-all"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-glow/0 via-cyan-glow/0 to-cyan-glow/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow">
                  <FiAward />
                </div>
                <span className="chip-cyan">{c.highlight}</span>
              </div>

              <h3 className="font-display text-lg font-semibold text-white leading-snug">
                {c.title}
              </h3>
              <div className="text-sm text-cyan-glow/90 mt-0.5">{c.issuer}</div>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {c.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
