import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ABOUT, PROFILE } from "@/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hasReal, setHasReal] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasReal(true);
    img.onerror = () => setHasReal(false);
    img.src = PROFILE.avatarReal;
  }, []);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 8, ry: x * 10 });
  }

  function onLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <section id="about" className="section">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="About"
          title="Who's behind the keyboard."
          subtitle={ABOUT.bio}
        />

        <div className="grid md:grid-cols-[320px_1fr] gap-8 md:gap-12 items-center">
          <motion.div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[3/4] w-full max-w-[320px] mx-auto md:mx-0"
            style={{
              transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: "transform 0.25s ease-out",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute -inset-3 rounded-3xl bg-cyan-glow/15 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/15 glass-strong">
              <PortraitImage src={PROFILE.avatarAi} alt="Varsha (AI portrait)" />
              {hasReal && (
                <img
                  src={PROFILE.avatarReal}
                  alt="Varsha (real photo)"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              )}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink-950/95 via-ink-950/70 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display font-semibold text-white">
                      {PROFILE.firstName}
                    </div>
                    <div className="text-[11px] tracking-wider text-zinc-400">
                      {PROFILE.role}
                    </div>
                  </div>
                  {hasReal && (
                    <span className="chip-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                      Real
                    </span>
                  )}
                </div>
              </div>
              <div className="absolute top-3 left-3">
                <span className="chip text-[10px]">
                  <span className="h-1 w-1 rounded-full bg-emerald-400 inline-block" />
                  Available
                </span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <GlassCard>
              <p className="text-zinc-300 leading-relaxed">{ABOUT.subBio}</p>
            </GlassCard>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {ABOUT.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={clsx(
                    "glass rounded-2xl p-4 md:p-5 text-center",
                    i === 0 && "border-cyan-glow/30",
                  )}
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-zinc-400">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <InfoLine label="Location" value={PROFILE.location} />
              <InfoLine label="Status" value="Final-year B.Tech" />
              <InfoLine
                label="Email"
                value={PROFILE.email}
                mono
                className="col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortraitImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
        <div className="text-center px-6">
          <div className="font-display text-5xl text-gradient font-bold">
            VC
          </div>
          <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Drop avatar-ai.png in /public/images
          </div>
        </div>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function InfoLine({
  label,
  value,
  mono,
  className,
}: {
  label: string;
  value: string;
  mono?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("glass rounded-xl px-4 py-3", className)}>
      <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
        {label}
      </div>
      <div
        className={clsx(
          "mt-1 text-sm text-zinc-200 truncate",
          mono && "font-mono text-[13px]",
        )}
      >
        {value}
      </div>
    </div>
  );
}
