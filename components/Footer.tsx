"use client";

import { Mail, Phone, Link2, ExternalLink } from "lucide-react";
import { cvData } from "@/lib/cv-data";
import { useLang } from "@/contexts/LangContext";

export default function Footer() {
  const { personal } = cvData;
  const { t } = useLang();

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-base sm:text-lg">
              Juan{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                {"{"} Alís {"}"}
              </span>
            </p>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">{t.footer.role}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 text-xs sm:text-sm text-slate-500">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
              <Mail size={13} /> <span className="hidden sm:inline">{personal.email}</span><span className="sm:hidden">{t.footer.email}</span>
            </a>
            <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
              <Phone size={13} /> {personal.phone}
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
              <Link2 size={13} /> LinkedIn
            </a>
            <a href={personal.project} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <ExternalLink size={13} /> {t.footer.project}
            </a>
          </div>
        </div>
        <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-white/4 text-center text-slate-700 text-xs">
          © {new Date().getFullYear()} Juan {"{"} Alís {"}"} · {t.footer.built}
        </div>
      </div>
    </footer>
  );
}
