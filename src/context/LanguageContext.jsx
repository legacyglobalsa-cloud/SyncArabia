import { createContext, useContext } from "react";

const LanguageContext = createContext({ language: "en" });

export function LanguageProvider({ children }) {
  return (
    <LanguageContext.Provider value={{ language: "en" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
