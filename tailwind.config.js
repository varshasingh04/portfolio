/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0A0F",
          900: "#0F0F17",
          800: "#16161F",
          700: "#1C1C28",
        },
        cyan: {
          glow: "#22D3EE",
        },
        violet: {
          glow: "#A78BFA",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-cyan": "0 0 32px -4px rgba(34, 211, 238, 0.45)",
        "glow-violet": "0 0 32px -4px rgba(167, 139, 250, 0.4)",
        "glow-soft": "0 0 60px -10px rgba(34, 211, 238, 0.25)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "pulse-glow": "pulseGlow 3.5s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "scroll-cue": "scrollCue 1.8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollCue: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(34,211,238,0.08) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
