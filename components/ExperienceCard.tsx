"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, TrendingUp, CheckCircle2 } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  kpis: string[];
}

export default function ExperienceCard({
  exp,
  index,
  impactLabel,
}: {
  exp: Experience;
  index: number;
  impactLabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-default"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Building2 size={16} className="text-indigo-400 flex-shrink-0" />
            <span className="text-indigo-400 font-semibold text-sm">{exp.company}</span>
          </div>
          <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-slate-400 flex-shrink-0">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {exp.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {exp.location}
          </span>
        </div>
      </div>

      {/* Achievements */}
      <ul className="space-y-2 mb-5">
        {exp.achievements.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
            <CheckCircle2 size={14} className="text-emerald-500/70 flex-shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      {/* KPIs */}
      {exp.kpis.length > 0 && (
        <div className="pt-4 border-t border-slate-700/50">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              {impactLabel}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {exp.kpis.map((kpi, i) => (
              <span
                key={i}
                className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full"
              >
                {kpi}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
