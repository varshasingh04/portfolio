import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-10 max-w-2xl"
    >
      <p className="section-title">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
