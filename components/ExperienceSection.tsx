"use client";

import { motion } from "framer-motion";
import { Monitor, Zap, Users } from "lucide-react";
import ExperienceCarousel from "./ExperienceCarousel";
import { useLang } from "@/contexts/LangContext";

const sectorMeta: Record<string, { icon: React.ElementType; textColor: string; bgColor: string; borderColor: string }> = {
  saas:  { icon: Monitor, textColor: "text-indigo-400", bgColor: "bg-indigo-500/8",  borderColor: "border-indigo-500/25" },
  infra: { icon: Zap,     textColor: "text-cyan-400",   bgColor: "bg-cyan-500/8",    borderColor: "border-cyan-500/25" },
  ops:   { icon: Users,   textColor: "text-violet-400", bgColor: "bg-violet-500/8",  borderColor: "border-violet-500/25" },
};

export default function ExperienceSection() {
  const { t } = useLang();
  const sectors = t.experience.sectors;

  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            {t.experience.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.experience.title}
          </h2>
          <p className="text-slate-500 mt-4 text-sm sm:text-base max-w-lg mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Sectors */}
        <div className="space-y-20 sm:space-y-24">
          {sectors.map((sector, sIdx) => {
            const meta = sectorMeta[sector.key];
            const Icon = meta?.icon;

            return (
              <motion.div
                key={sector.key}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: sIdx * 0.08 }}
              >
                {/* Sector header — centered */}
                <div className="flex flex-col items-center mb-8 sm:mb-10">
                  <div className={`flex items-center gap-3 ${meta.bgColor} border ${meta.borderColor} px-5 py-3 rounded-2xl mb-2`}>
                    {Icon && <Icon size={17} className={meta.textColor} />}
                    <span className={`font-bold text-sm ${meta.textColor}`}>{sector.label}</span>
                  </div>
                  <p className="text-slate-600 text-xs">{sector.description}</p>
                  {/* Divider */}
                  <div className="flex items-center gap-4 mt-5 w-full max-w-sm sm:max-w-xl">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                    <div className={`w-1.5 h-1.5 rounded-full ${meta.textColor.replace("text-", "bg-")}`} />
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                  </div>
                </div>

                {/* Carousel */}
                <ExperienceCarousel jobs={sector.jobs} accentColor={sector.color} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
