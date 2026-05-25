import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiCopy, FiCheck, FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { PROFILE, SOCIALS, EMAILJS } from "@/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err" | "mailto">(null);
  const [copied, setCopied] = useState(false);

  const emailConfigured =
    !!EMAILJS.serviceId && !!EMAILJS.templateId && !!EMAILJS.publicKey;

  function openComposeFallback() {
    const subject = `Portfolio contact${form.name ? ` from ${form.name}` : ""}`;
    const body = [
      `From: ${form.name || "(your name)"}`,
      form.email ? `Email: ${form.email}` : null,
      "",
      form.message || "(your message)",
    ]
      .filter(Boolean)
      .join("\n");

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&tf=1` +
      `&to=${encodeURIComponent(PROFILE.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setStatus("mailto");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailConfigured) {
      openComposeFallback();
      return;
    }
    try {
      setSending(true);
      setStatus(null);
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: PROFILE.firstName,
          reply_to: form.email,
        },
        { publicKey: EMAILJS.publicKey },
      );
      setStatus("ok");
      setForm(initialForm);
    } catch {
      setStatus("err");
    } finally {
      setSending(false);
    }
  }

  function onCopy() {
    navigator.clipboard.writeText(PROFILE.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <section id="contact" className="section">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something."
          subtitle="Open to fresher full-stack, Java backend, and MERN roles. Replies usually within 24 hours."
        />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={onSubmit}
            className="glass-solid rounded-3xl p-6 md:p-8 flex flex-col gap-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Field
                label="Your email"
                name="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-[0.18em] text-zinc-300">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me a bit about your project, role, or just say hi."
                className="mt-2 w-full bg-ink-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-cyan-glow/50 focus:bg-ink-950/90 transition-all resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={sending}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending
                  ? "Sending..."
                  : emailConfigured
                  ? "Send message"
                  : "Send via Gmail"}{" "}
                <FiSend />
              </button>

              {status === "ok" && (
                <span className="chip-cyan">Message sent. I'll reply soon!</span>
              )}
              {status === "err" && (
                <span className="chip text-red-300 border-red-500/30 bg-red-500/5">
                  Something went wrong. Try the email button instead.
                </span>
              )}
              {status === "mailto" && (
                <span className="chip-cyan">
                  Gmail opened in a new tab — click Send there to deliver.
                </span>
              )}
              {!emailConfigured && status === null && (
                <span className="text-[11px] text-zinc-500">
                  Opens a new Gmail tab with the message pre-filled.
                </span>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="glass-solid rounded-3xl p-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-cyan-glow mb-3">
                Direct
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${PROFILE.email}?subject=Hi%20Varsha%20%E2%80%94%20from%20your%20portfolio`}
                  className="group block w-full rounded-xl bg-ink-950/70 border border-white/10 hover:border-cyan-glow/40 transition-all"
                  title="Click to compose a new email"
                >
                  <div className="flex items-stretch">
                    <div className="flex-1 flex items-center gap-3 px-4 py-3 min-w-0 group-hover:bg-cyan-glow/5 rounded-l-xl transition-colors">
                      <HiOutlineMail className="text-cyan-glow text-lg shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase tracking-widest text-zinc-400">
                          Click to email
                        </div>
                        <div className="text-sm font-mono text-zinc-100 truncate group-hover:text-cyan-glow transition-colors">
                          {PROFILE.email}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onCopy();
                      }}
                      className="px-3.5 border-l border-white/10 text-zinc-500 hover:text-cyan-glow hover:bg-cyan-glow/5 transition-all rounded-r-xl"
                      aria-label="Copy email to clipboard"
                      title={copied ? "Copied!" : "Copy email"}
                    >
                      {copied ? <FiCheck className="text-cyan-glow" /> : <FiCopy />}
                    </button>
                  </div>
                </a>

                <div className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-ink-950/70 border border-white/10">
                  <FiMapPin className="text-cyan-glow text-lg shrink-0" />
                  <span className="text-sm text-zinc-100">
                    {PROFILE.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-solid rounded-3xl p-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-cyan-glow mb-3">
                Find me
              </div>
              <div className="grid grid-cols-1 gap-2">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-ink-950/70 border border-white/10 hover:border-cyan-glow/40 hover:bg-ink-950/90 transition-all group"
                    >
                      <Icon className="text-lg text-zinc-300 group-hover:text-cyan-glow transition-colors" />
                      <div className="flex-1">
                        <div className="text-[10px] uppercase tracking-widest text-zinc-400">
                          {s.label}
                        </div>
                        <div className="text-sm text-zinc-100 font-mono truncate">
                          {s.display}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
          <div>
            Designed & built by {PROFILE.fullName} · {new Date().getFullYear()}
          </div>
          <div className="font-mono">
            Made with React · three.js · GSAP · Tailwind
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.18em] text-zinc-300">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-ink-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-cyan-glow/50 focus:bg-ink-950/90 transition-all"
      />
    </div>
  );
}
