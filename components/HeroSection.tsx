"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, ArrowRight, Link2 } from "lucide-react";
import { cvData } from "@/lib/cv-data";
import { useLang } from "@/contexts/LangContext";

export default function HeroSection() {
  const { personal } = cvData;
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-emerald-600/6 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
            {t.hero.badge}
          </div>
        </motion.div>

        {/* Name */}
        <div className="text-center mb-5">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-none mb-3"
          >
            Juan{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              {"{"} Alís {"}"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 font-medium tracking-wide"
          >
            {t.hero.title}
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-center text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10 px-2"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <a
            href={`mailto:${personal.email}`}
            className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 sm:px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 text-sm sm:text-base"
          >
            <Mail size={16} />
            {t.hero.talk}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/40 text-slate-200 font-semibold px-5 sm:px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 text-sm sm:text-base"
          >
            <Link2 size={16} />
            {t.hero.linkedin}
          </a>
          <a
            href={personal.project}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 text-slate-200 hover:text-emerald-300 font-semibold px-5 sm:px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 text-sm sm:text-base"
          >
            <ExternalLink size={16} />
            {t.hero.project}
          </a>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
              className={`
                relative group rounded-2xl p-4 sm:p-5 border
                transition-all duration-300 hover:-translate-y-1
                ${i === 0
                  ? "bg-gradient-to-br from-indigo-950/80 to-violet-950/60 border-indigo-500/30 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/20"
                  : "bg-white/3 border-white/8 hover:border-white/15 hover:shadow-lg hover:shadow-black/30"
                }
              `}
            >
              {i === 0 && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-violet-500/5" />
              )}
              <div className="relative">
                <p className={`text-2xl sm:text-3xl font-black tracking-tight mb-1 ${
                  i === 0
                    ? "bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent"
                }`}>
                  {stat.value}
                </p>
                <p className="text-white text-xs font-semibold mb-0.5 leading-tight">{stat.label}</p>
                <p className="text-slate-500 text-xs leading-tight">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12 text-slate-600 text-xs sm:text-sm"
        >
          <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-slate-300 transition-colors">
            <Mail size={12} /> {personal.email}
          </a>
          <a href={`tel:${personal.phone}`} className="flex items-center gap-2 hover:text-slate-300 transition-colors">
            <Phone size={12} /> {personal.phone}
          </a>
          <span className="hidden sm:flex items-center gap-2">
            <MapPin size={12} /> {personal.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
