"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Lang = "en" | "fr"

const LanguageContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
}>({ lang: "fr", setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr")
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export type T = Record<Lang, string>

export function t(strings: T, lang: Lang): string {
  return strings[lang]
}
