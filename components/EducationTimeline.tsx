"use client";

import { motion } from "framer-motion";
import { GraduationCap, ExternalLink, Award, Sparkles } from "lucide-react";
import { cvData } from "@/lib/cv-data";
import { useLang } from "@/contexts/LangContext";

const tagColor: Record<string, string> = {
  "Upcoming":        "bg-slate-500/10 border-slate-500/20 text-slate-400",
  "Próximo":         "bg-slate-500/10 border-slate-500/20 text-slate-400",
  "PHP":             "bg-violet-500/10 border-violet-500/20 text-violet-400",
  "Laravel":         "bg-red-500/10 border-red-500/20 text-red-400",
  "Backend":         "bg-orange-500/10 border-orange-500/20 text-orange-400",
  "SQL":             "bg-blue-500/10 border-blue-500/20 text-blue-400",
  "Databases":       "bg-blue-500/10 border-blue-500/20 text-blue-400",
  "Bases de datos":  "bg-blue-500/10 border-blue-500/20 text-blue-400",
  "React":           "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  "TypeScript":      "bg-blue-500/10 border-blue-500/20 text-blue-400",
  "Tailwind":        "bg-teal-500/10 border-teal-500/20 text-teal-400",
  "PLCs":            "bg-amber-500/10 border-amber-500/20 text-amber-400",
  "Robotics":        "bg-amber-500/10 border-amber-500/20 text-amber-400",
  "Robótica":        "bg-amber-500/10 border-amber-500/20 text-amber-400",
  "TIA Portal":      "bg-amber-500/10 border-amber-500/20 text-amber-400",
  "REBT":            "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  "Automation":      "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  "Automatización":  "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  "Electrical":      "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  "Electricidad":    "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
};
const defaultTag = "bg-indigo-500/10 border-indigo-500/20 text-indigo-400";

const certStyle: Record<string, string> = {
  "Google":       "border-blue-500/25 bg-blue-500/5 hover:border-blue-400/50 hover:shadow-blue-500/10",
  "AWS":          "border-orange-500/25 bg-orange-500/5 hover:border-orange-400/50 hover:shadow-orange-500/10",
  "Gornal Activa":"border-emerald-500/25 bg-emerald-500/5 hover:border-emerald-400/50 hover:shadow-emerald-500/10",
};

export default function EducationTimeline() {
  const { education: eduData } = cvData;
  const { t } = useLang();
  const education = t.education.items;
  const certifications = t.education.certs;

  return (
    <section id="education" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            {t.education.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.education.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 sm:left-6 top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/40 via-emerald-500/20 to-transparent" />

          <div className="space-y-4 sm:space-y-5">
            {education.map((item, i) => {
              const projectUrl = eduData[i]?.projectUrl ?? null;
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="relative flex gap-4 sm:gap-6 group"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.18 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 border-2 border-slate-700 group-hover:border-indigo-500/60 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <GraduationCap size={15} className="text-slate-500 group-hover:text-indigo-400 transition-colors duration-300" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
                  className="
                    flex-1 relative bg-slate-800/40 border border-white/6 rounded-2xl p-4 sm:p-5 mb-2
                    group-hover:bg-slate-800/70 group-hover:border-indigo-500/22
                    group-hover:shadow-xl group-hover:shadow-indigo-500/8
                    transition-all duration-300 cursor-default overflow-hidden
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-violet-500/0 group-hover:from-indigo-500/4 group-hover:to-violet-500/3 transition-all duration-500 rounded-2xl pointer-events-none" />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map((tag, t_) => (
                      <span key={t_} className={`border text-xs font-medium px-2.5 py-0.5 rounded-full ${tagColor[tag] ?? defaultTag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white font-bold text-sm sm:text-base leading-snug mb-1 group-hover:text-indigo-50 transition-colors duration-300">
                    {item.degree}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-1">{item.institution}</p>
                  <p className="text-indigo-400/60 text-xs font-medium mb-3">{item.period}</p>

                  {item.description && (
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                      {item.description}
                    </p>
                  )}

                  {item.highlight && (
                    <div className="mt-3 bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-3 group-hover:border-emerald-400/30 transition-colors duration-300">
                      <div className="flex items-start gap-2">
                        <Sparkles size={12} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <p className="text-emerald-300/80 text-xs leading-relaxed">{item.highlight}</p>
                      </div>
                      {projectUrl && (
                        <a
                          href={projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 text-xs font-semibold mt-2 transition-colors"
                        >
                          {t.education.viewProject} <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
            })}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Award size={18} className="text-amber-400" />
            <h3 className="text-white font-bold text-lg sm:text-xl">{t.education.certifications}</h3>
            <div className="flex-1 h-px bg-slate-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                className={`flex flex-col gap-3 border rounded-2xl p-4 sm:p-5 cursor-default transition-all duration-300 hover:shadow-xl ${certStyle[cert.issuer] ?? "border-slate-700/50 bg-slate-800/30"}`}
              >
                <div className="flex items-center gap-2">
                  <Award size={13} className="text-amber-400 flex-shrink-0" />
                  <span className="text-slate-500 text-xs font-medium">{cert.issuer}</span>
                </div>
                <p className="text-slate-200 text-sm font-semibold leading-snug">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
