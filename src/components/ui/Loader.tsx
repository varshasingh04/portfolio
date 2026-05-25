import { useEffect, useState } from "react";

type Props = {
  onDone?: () => void;
};

export function Loader({ onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1200;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / duration);
      setProgress(k);
      if (k < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setHidden(true);
          onDone?.();
        }, 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950 transition-opacity duration-500"
      style={{ opacity: progress >= 1 ? 0 : 1 }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="font-display text-3xl font-bold tracking-tight">
          <span className="text-gradient">VC</span>
        </div>
        <div className="w-56 h-px bg-white/10 overflow-hidden rounded-full">
          <div
            className="h-full bg-cyan-glow shadow-glow-cyan transition-[width]"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Booting Studio
        </div>
      </div>
    </div>
  );
}
