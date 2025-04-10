import React, { createContext, useState, useContext } from "react";

// Create the context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr"); // Default language is English

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
