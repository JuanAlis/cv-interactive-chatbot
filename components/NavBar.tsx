"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, locale, toggle } = useLang();

  const links = [
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#skills", label: t.nav.skills },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const LangToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center gap-2 font-semibold rounded-xl border transition-all duration-200
        bg-white/8 hover:bg-white/14 border-white/15 hover:border-indigo-400/60
        text-slate-200 hover:text-white
        ${mobile ? "px-4 py-2.5 text-sm w-full justify-center" : "px-3.5 py-2 text-sm"}
      `}
      aria-label="Toggle language"
    >
      <span className="text-base leading-none select-none">
        {locale === "en" ? "🇪🇸" : "🇬🇧"}
      </span>
      <span className="tracking-wide">{locale === "en" ? "ES" : "EN"}</span>
    </motion.button>
  );

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/6 shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="text-white font-bold text-lg tracking-tight shrink-0 group">
          Juan{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-emerald-300 transition-all duration-300">
           {"{"} Alís {"}"}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-indigo-400 to-emerald-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop right side: lang toggle + contact */}
        <div className="hidden md:flex items-center gap-3">
          <LangToggle />
          <a
            href="mailto:juanaliswork@gmail.com"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 whitespace-nowrap"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LangToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/8 rounded-lg transition-all"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/6 flex flex-col gap-2">
                <a
                  href="mailto:juanaliswork@gmail.com"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl text-center transition-colors"
                >
                  {t.nav.contact}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
