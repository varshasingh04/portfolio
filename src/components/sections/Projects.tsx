import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import { PROJECTS } from "@/constants";
import type { Project } from "@/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've actually shipped."
          subtitle="Two production projects spanning AI mobile and full-stack web."
        />

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [imgErr, setImgErr] = useState(false);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 5, ry: x * 6 });
  }
  function onLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  const hasLive = project.liveUrl && project.liveUrl !== "#";
  const hasGithub = project.githubUrl && project.githubUrl !== "#";

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: "transform 0.25s ease-out",
        transformStyle: "preserve-3d",
      }}
      className="group relative glass rounded-3xl p-5 md:p-6 flex flex-col gap-4 hover:border-cyan-glow/30 transition-all"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-ink-900">
        {imgErr ? (
          <ProjectFallback project={project} />
        ) : (
          <img
            src={project.image}
            alt={project.name}
            onError={() => setImgErr(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent pointer-events-none" />
        {project.badge && (
          <span className="absolute top-3 left-3 chip-cyan">
            {project.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 chip text-[10px] font-mono">
          {project.period}
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
            {project.name}
          </h3>
          <p className="text-sm text-cyan-glow/90 mt-0.5">{project.tagline}</p>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.slice(0, 6).map((s) => (
            <span key={s} className="chip text-[10px]">
              {s}
            </span>
          ))}
          {project.stack.length > 6 && (
            <span className="chip text-[10px]">
              +{project.stack.length - 6}
            </span>
          )}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
          {hasLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !px-4 !py-2 !text-xs"
            >
              Live <FiExternalLink />
            </a>
          ) : (
            <span
              className="btn-ghost !px-4 !py-2 !text-xs opacity-50 cursor-not-allowed"
              title="Live demo coming soon"
            >
              Live · soon
            </span>
          )}
          {hasGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !px-4 !py-2 !text-xs"
            >
              <FiGithub /> Code
            </a>
          ) : (
            <span
              className="btn-ghost !px-4 !py-2 !text-xs opacity-50 cursor-not-allowed"
              title="Repo coming soon"
            >
              <FiGithub /> Code · soon
            </span>
          )}
          <a
            href="#contact"
            className="ml-auto text-xs text-zinc-400 hover:text-cyan-glow flex items-center gap-1 transition-colors"
          >
            Ask me about it <FiArrowUpRight />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectFallback({ project }: { project: Project }) {
  return <GenericHero name={project.name} />;
}

function GenericHero({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(34,211,238,0.25), transparent 60%), radial-gradient(ellipse at 80% 90%, rgba(167,139,250,0.25), transparent 60%), #0F0F17",
        }}
      />
      <div className="relative font-display text-3xl text-gradient font-bold">
        {name}
      </div>
    </div>
  );
}

