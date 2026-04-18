"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Locale, T } from "@/lib/translations";

interface LangContextType {
  locale: Locale;
  t: T;
  toggle: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const toggle = () => setLocale((l) => (l === "en" ? "es" : "en"));

  return (
    <LangContext.Provider value={{ locale, t: translations[locale] as T, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
