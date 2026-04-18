"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import {
  ChevronLeft, ChevronRight,
  Building2, Calendar, MapPin, TrendingUp, CheckCircle2,
} from "lucide-react";
import { useLang } from "@/contexts/LangContext";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: readonly string[];
  kpis: readonly string[];
}

interface Props {
  jobs: readonly Job[];
  accentColor: string;
}

const palette: Record<string, {
  company: string; kpi: string; dot: string; dotActive: string;
  glow: string; border: string; gradFrom: string;
}> = {
  indigo: {
    company: "bg-indigo-500/12 border-indigo-500/25 text-indigo-300",
    kpi: "bg-indigo-500/12 border-indigo-500/20 text-indigo-200",
    dot: "bg-slate-700 hover:bg-slate-500",
    dotActive: "bg-indigo-400",
    glow: "shadow-indigo-500/15",
    border: "hover:border-indigo-500/25",
    gradFrom: "from-indigo-500/5",
  },
  cyan: {
    company: "bg-cyan-500/12 border-cyan-500/25 text-cyan-300",
    kpi: "bg-cyan-500/12 border-cyan-500/20 text-cyan-200",
    dot: "bg-slate-700 hover:bg-slate-500",
    dotActive: "bg-cyan-400",
    glow: "shadow-cyan-500/15",
    border: "hover:border-cyan-500/25",
    gradFrom: "from-cyan-500/5",
  },
  violet: {
    company: "bg-violet-500/12 border-violet-500/25 text-violet-300",
    kpi: "bg-violet-500/12 border-violet-500/20 text-violet-200",
    dot: "bg-slate-700 hover:bg-slate-500",
    dotActive: "bg-violet-400",
    glow: "shadow-violet-500/15",
    border: "hover:border-violet-500/25",
    gradFrom: "from-violet-500/5",
  },
};

/* ─── card variants ─── */
const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 28 },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.22, ease: "easeIn" as const },
  }),
};

/* ─── Job card body ─── */
function JobCard({
  job,
  c,
  impactLabel,
}: {
  job: Job;
  c: (typeof palette)[string];
  impactLabel: string;
}) {
  return (
    <div
      className={`
        relative h-full flex flex-col
        bg-gradient-to-br from-slate-900 to-slate-900/90
        border border-white/8 ${c.border}
        rounded-2xl sm:rounded-3xl p-5 sm:p-7
        transition-all duration-300
        hover:shadow-2xl ${c.glow}
        overflow-hidden
      `}
    >
      {/* Subtle gradient top-left accent */}
      <div className={`absolute top-0 left-0 w-48 h-48 bg-gradient-to-br ${c.gradFrom} to-transparent rounded-full blur-3xl pointer-events-none`} />

      {/* Header */}
      <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
        <div className="min-w-0">
          <div className={`inline-flex items-center gap-2 border px-3 py-1.5 rounded-full mb-3 text-xs font-semibold ${c.company}`}>
            <Building2 size={12} className="flex-shrink-0" />
            <span className="truncate">{job.company}</span>
          </div>
          <h3 className="text-white font-bold text-lg sm:text-xl leading-tight">{job.role}</h3>
        </div>
        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-1.5 flex-shrink-0 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar size={11} className="flex-shrink-0" />
            {job.period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={11} className="flex-shrink-0" />
            {job.location}
          </span>
        </div>
      </div>

      {/* Achievements */}
      <ul className="relative space-y-2.5 flex-1">
        {job.achievements.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
            <CheckCircle2 size={13} className="text-emerald-500/50 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* KPIs */}
      {job.kpis.length > 0 && (
        <div className="relative mt-5 pt-4 border-t border-white/6">
          <div className="flex items-center gap-2 mb-2.5">
            <TrendingUp size={12} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              {impactLabel}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {job.kpis.map((kpi, i) => (
              <span key={i} className={`border text-xs font-medium px-3 py-1.5 rounded-full ${c.kpi}`}>
                {kpi}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Arrow button ─── */
function Arrow({
  dir,
  onClick,
  disabled,
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.1 }}
      whileTap={disabled ? {} : { scale: 0.92 }}
      className={`
        relative z-10 flex items-center justify-center
        w-10 h-10 sm:w-12 sm:h-12 rounded-full
        bg-slate-800/80 backdrop-blur border border-white/10
        text-slate-400 hover:text-white
        hover:bg-slate-700/80 hover:border-white/20
        transition-all duration-200
        disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0
      `}
    >
      {dir === "left" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
    </motion.button>
  );
}

/* ─── Main carousel ─── */
export default function ExperienceCarousel({ jobs, accentColor }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const c = palette[accentColor] ?? palette.indigo;
  const { t } = useLang();
  const impactLabel = t.experience.impact;
  const dragX = useMotionValue(0);
  const dragConstraintRef = useRef(null);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === activeIndex) return;
      setDirection(idx > activeIndex ? 1 : -1);
      setActiveIndex(idx);
    },
    [activeIndex]
  );

  const prev = () => goTo(activeIndex > 0 ? activeIndex - 1 : jobs.length - 1);
  const next = () => goTo(activeIndex < jobs.length - 1 ? activeIndex + 1 : 0);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  return (
    <div className="w-full">
      {/* Card area */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Left arrow */}
        <Arrow dir="left" onClick={prev} disabled={jobs.length <= 1} />

        {/* Slide viewport */}
        <div className="flex-1 overflow-hidden rounded-2xl sm:rounded-3xl" ref={dragConstraintRef}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={dragConstraintRef}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
              style={{ x: dragX }}
              className="cursor-grab active:cursor-grabbing"
            >
              <JobCard job={jobs[activeIndex]} c={c} impactLabel={impactLabel} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow */}
        <Arrow dir="right" onClick={next} disabled={jobs.length <= 1} />
      </div>

      {/* Navigation bar */}
      <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 mt-5">
        {/* Counter */}
        <span className="flex-shrink-0 text-slate-600 text-xs font-mono tabular-nums w-14 text-right select-none">
          {String(activeIndex + 1).padStart(2, "0")} / {String(jobs.length).padStart(2, "0")}
        </span>

        {/* Dot indicators */}
        <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
          {jobs.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? `w-6 h-2 ${c.dotActive}`
                  : `w-2 h-2 ${c.dot}`
              }`}
            />
          ))}
        </div>

        {/* Company name */}
        <motion.span
          key={activeIndex}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-shrink-0 text-slate-600 text-xs w-20 sm:w-28 truncate select-none"
        >
          {jobs[activeIndex].company}
        </motion.span>
      </div>
    </div>
  );
}
