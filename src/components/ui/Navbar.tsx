import { motion } from "framer-motion";
import clsx from "clsx";
import { SECTIONS, PROFILE } from "@/constants";
import type { SectionId } from "@/constants";

type Props = {
  active: SectionId;
};

const NAV_ITEMS = SECTIONS.filter((s) => s.id !== "hero" && s.id !== "resume");

export function Navbar({ active }: Props) {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-2 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass rounded-full pl-3 pr-2 py-2 md:pl-4 md:pr-2.5 md:py-2.5 flex items-center justify-between gap-2 w-full max-w-[1100px] pointer-events-auto"
      >
        <a
          href="#hero"
          className="flex items-center gap-2 group shrink-0"
          aria-label="Home"
        >
          <span className="relative h-7 w-7 rounded-full grid place-items-center bg-ink-900 border border-cyan-glow/40">
            <span className="absolute inset-0 rounded-full bg-cyan-glow/10 blur-md" />
            <span className="relative font-display text-cyan-glow text-xs font-bold">
              V
            </span>
          </span>
          <span className="hidden xl:inline text-sm font-medium text-zinc-200">
            {PROFILE.firstName}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={clsx(
                  "px-2.5 py-1.5 rounded-full text-[11.5px] font-medium tracking-wide transition-all whitespace-nowrap",
                  active === s.id
                    ? "text-cyan-glow bg-cyan-glow/10"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={PROFILE.resumePath}
          target="_blank"
          rel="noreferrer"
          className="btn-primary !px-3.5 !py-1.5 !text-[11px] shrink-0"
        >
          Resume
        </a>
      </motion.nav>
    </header>
  );
}
