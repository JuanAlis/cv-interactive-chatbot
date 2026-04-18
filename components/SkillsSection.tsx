"use client";

import { motion } from "framer-motion";
import {
  HeadphonesIcon, Wrench, Globe2, Code2, Bot, Plug, Cpu,
} from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const iconMap: Record<string, React.ElementType> = {
  support: HeadphonesIcon,
  tools: Wrench,
  apis: Plug,
  automation: Bot,
  dev: Code2,
  industrial: Cpu,
};

type ColorKey = "indigo" | "cyan" | "violet" | "emerald" | "amber" | "rose";

const palette: Record<ColorKey, {
  badge: string; cardBorder: string; headerBg: string;
  headerText: string; glow: string; gradFrom: string;
}> = {
  indigo: {
    badge: "bg-indigo-500/10 border-indigo-500/18 text-indigo-300 hover:bg-indigo-500/18 hover:border-indigo-400/50 hover:text-indigo-200",
    cardBorder: "hover:border-indigo-500/25 hover:shadow-indigo-500/10",
    headerBg: "bg-indigo-500/10 border-indigo-500/20",
    headerText: "text-indigo-400",
    glow: "group-hover:shadow-indigo-500/12",
    gradFrom: "from-indigo-500/4",
  },
  cyan: {
    badge: "bg-cyan-500/10 border-cyan-500/18 text-cyan-300 hover:bg-cyan-500/18 hover:border-cyan-400/50 hover:text-cyan-200",
    cardBorder: "hover:border-cyan-500/25 hover:shadow-cyan-500/10",
    headerBg: "bg-cyan-500/10 border-cyan-500/20",
    headerText: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/12",
    gradFrom: "from-cyan-500/4",
  },
  violet: {
    badge: "bg-violet-500/10 border-violet-500/18 text-violet-300 hover:bg-violet-500/18 hover:border-violet-400/50 hover:text-violet-200",
    cardBorder: "hover:border-violet-500/25 hover:shadow-violet-500/10",
    headerBg: "bg-violet-500/10 border-violet-500/20",
    headerText: "text-violet-400",
    glow: "group-hover:shadow-violet-500/12",
    gradFrom: "from-violet-500/4",
  },
  emerald: {
    badge: "bg-emerald-500/10 border-emerald-500/18 text-emerald-300 hover:bg-emerald-500/18 hover:border-emerald-400/50 hover:text-emerald-200",
    cardBorder: "hover:border-emerald-500/25 hover:shadow-emerald-500/10",
    headerBg: "bg-emerald-500/10 border-emerald-500/20",
    headerText: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/12",
    gradFrom: "from-emerald-500/4",
  },
  amber: {
    badge: "bg-amber-500/10 border-amber-500/18 text-amber-300 hover:bg-amber-500/18 hover:border-amber-400/50 hover:text-amber-200",
    cardBorder: "hover:border-amber-500/25 hover:shadow-amber-500/10",
    headerBg: "bg-amber-500/10 border-amber-500/20",
    headerText: "text-amber-400",
    glow: "group-hover:shadow-amber-500/12",
    gradFrom: "from-amber-500/4",
  },
  rose: {
    badge: "bg-rose-500/10 border-rose-500/18 text-rose-300 hover:bg-rose-500/18 hover:border-rose-400/50 hover:text-rose-200",
    cardBorder: "hover:border-rose-500/25 hover:shadow-rose-500/10",
    headerBg: "bg-rose-500/10 border-rose-500/20",
    headerText: "text-rose-400",
    glow: "group-hover:shadow-rose-500/12",
    gradFrom: "from-rose-500/4",
  },
};

function FlagSVG({ langKey }: { langKey: string }) {
  const shared = { style: { borderRadius: 2, display: "block", flexShrink: 0 } as React.CSSProperties };
  switch (langKey) {
    case "es":
      return (
        <svg width="20" height="14" viewBox="0 0 20 14" {...shared}>
          <rect width="20" height="3.5" fill="#c60b1e" />
          <rect y="3.5" width="20" height="7" fill="#ffc400" />
          <rect y="10.5" width="20" height="3.5" fill="#c60b1e" />
        </svg>
      );
    case "ca":
      return (
        <svg width="20" height="14" viewBox="0 0 20 14" {...shared}>
          <rect width="20" height="14" fill="#fcdd09" />
          <rect y="1.556" width="20" height="1.556" fill="#da121a" />
          <rect y="4.667" width="20" height="1.556" fill="#da121a" />
          <rect y="7.778" width="20" height="1.556" fill="#da121a" />
          <rect y="10.889" width="20" height="1.556" fill="#da121a" />
        </svg>
      );
    case "fr":
      return (
        <svg width="20" height="14" viewBox="0 0 20 14" {...shared}>
          <rect width="6.667" height="14" fill="#002395" />
          <rect x="6.667" width="6.667" height="14" fill="#ffffff" />
          <rect x="13.333" width="6.667" height="14" fill="#ed2939" />
        </svg>
      );
    case "en":
      return (
        <svg width="20" height="14" viewBox="0 0 20 14" {...shared}>
          <rect width="20" height="14" fill="#012169" />
          <polygon points="0,0 3,0 20,11 20,14 17,14 0,3" fill="white" />
          <polygon points="17,0 20,0 20,3 3,14 0,14 0,11" fill="white" />
          <polygon points="0,0 1.5,0 20,12.5 20,14 18.5,14 0,1.5" fill="#c8102e" />
          <polygon points="18.5,0 20,0 20,1.5 1.5,14 0,14 0,12.5" fill="#c8102e" />
          <rect x="8" y="0" width="4" height="14" fill="white" />
          <rect x="0" y="5" width="20" height="4" fill="white" />
          <rect x="9" y="0" width="2" height="14" fill="#c8102e" />
          <rect x="0" y="6" width="20" height="2" fill="#c8102e" />
        </svg>
      );
    case "it":
      return (
        <svg width="20" height="14" viewBox="0 0 20 14" {...shared}>
          <rect width="6.667" height="14" fill="#009246" />
          <rect x="6.667" width="6.667" height="14" fill="#ffffff" />
          <rect x="13.333" width="6.667" height="14" fill="#ce2b37" />
        </svg>
      );
    default:
      return null;
  }
}

const levelStyles: Record<string, string> = {
  Native:  "bg-emerald-500/15 border-emerald-500/25 text-emerald-300",
  Nativo:  "bg-emerald-500/15 border-emerald-500/25 text-emerald-300",
  C1: "bg-indigo-500/15 border-indigo-500/25 text-indigo-300",
  C2: "bg-indigo-500/15 border-indigo-500/25 text-indigo-300",
  B2: "bg-blue-500/15 border-blue-500/25 text-blue-300",
  B1: "bg-blue-500/15 border-blue-500/25 text-blue-300",
  A2: "bg-slate-500/15 border-slate-500/25 text-slate-400",
};

export default function SkillsSection() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="text-violet-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            {t.skills.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-slate-500 mt-4 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {t.skills.categories.map((cat, i) => {
            const Icon = iconMap[cat.key];
            const p = palette[cat.color as ColorKey] ?? palette.indigo;

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`
                  group relative overflow-hidden
                  bg-slate-900/70 border border-white/7 rounded-2xl p-5 sm:p-6
                  hover:-translate-y-1 transition-all duration-300
                  hover:shadow-xl ${p.glow} ${p.cardBorder}
                `}
              >
                {/* Ambient gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${p.gradFrom} to-transparent rounded-full blur-2xl pointer-events-none`} />

                {/* Header pill */}
                <div className="relative flex flex-col items-center mb-5">
                <div className="flex items-center gap-2 mb-3">
                  {Icon && <Icon size={16} className={p.headerText} />}
                  <span className={`text-sm font-bold ${p.headerText}`}>{cat.label}</span>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

                {/* Badges */}
                <div className="relative flex flex-wrap gap-1.5 justify-center">
                  {cat.items.map((skill, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.82 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.22, delay: i * 0.03 + j * 0.02 }}
                      className={`
                        border text-xs font-medium px-2.5 py-1.5 rounded-full
                        cursor-default transition-all duration-200 hover:scale-105 select-none
                        ${p.badge}
                      `}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Languages card — NO progress bars */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: t.skills.categories.length * 0.07 }}
            className="
              group relative overflow-hidden
              bg-slate-900/70 border border-white/7 rounded-2xl p-5 sm:p-6
              hover:-translate-y-1 transition-all duration-300
              hover:shadow-xl group-hover:shadow-sky-500/10
              hover:border-sky-500/20
            "
          >
            {/* Ambient gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-500/4 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="relative flex justify-center mb-5">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 px-3 py-2 rounded-xl">
                <Globe2 size={14} className="text-sky-400" />
                <span className="text-xs font-bold text-sky-400">{t.skills.languages}</span>
              </div>
            </div>

            {/* Language rows — flag + name + badge only */}
            <div className="relative space-y-2.5">
              {t.skills.languageList.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                  className="flex items-center justify-between py-1 px-2 rounded-lg hover:bg-white/4 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <FlagSVG langKey={item.key} />
                    <span className="text-slate-200 text-sm font-medium">{item.lang}</span>
                  </div>
                  <span
                    className={`
                      border text-xs font-semibold px-2.5 py-1 rounded-full select-none
                      ${levelStyles[item.level] ?? "bg-slate-700 text-slate-300"}
                    `}
                  >
                    {item.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
