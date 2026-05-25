import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { SKILL_CATEGORIES } from "@/constants";
import type { SkillCategoryId } from "@/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Skills() {
  const [active, setActive] = useState<SkillCategoryId>("backend");
  const cat = SKILL_CATEGORIES.find((c) => c.id === active)!;

  return (
    <section id="skills" className="section">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="The tools I wield."
          subtitle="Five stacks. Java backend is where I write my cleanest code; MERN is where I move fastest."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {SKILL_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={clsx(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                "border",
                active === c.id
                  ? "bg-cyan-glow text-ink-950 border-cyan-glow shadow-glow-cyan"
                  : "bg-white/[0.03] text-zinc-300 border-white/10 hover:bg-white/[0.06] hover:text-white",
                c.id === "ai" && active !== c.id && "border-cyan-glow/40 text-cyan-glow",
              )}
            >
              {c.label}
              {c.id === "ai" && active !== c.id && (
                <span className="ml-1.5 text-[10px] opacity-70">★</span>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="mb-5">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                {cat.label}
              </h3>
              <p className="text-sm text-zinc-400 mt-1">{cat.blurb}</p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02, duration: 0.4 }}
                    className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-glow/40 hover:bg-white/[0.07] transition-all"
                  >
                    {Icon ? (
                      <Icon
                        className="text-[18px] shrink-0"
                        style={{ color: s.color ?? "#22D3EE" }}
                      />
                    ) : (
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ background: s.color ?? "#22D3EE" }}
                      />
                    )}
                    <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
                      {s.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
