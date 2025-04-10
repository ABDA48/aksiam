// src/hooks/useTranslations.js
import { useState, useEffect } from "react";
import axios from "axios"; // If you don't have axios, install it using npm install axios
import { useLanguage } from "../context/LanguageContext"; // Import the context

const useTranslations = () => {
  const { language } = useLanguage(); // Get the language from the context
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(`/api/translations?lang=${language}`);
        setTranslations(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching translations", error);
        setError("Failed to load translations");
        setLoading(false);
      }
    };

    fetchTranslations();
  }, [language]); // Re-fetch translations whenever the language changes

  return { translations, loading, error };
};

export default useTranslations;
