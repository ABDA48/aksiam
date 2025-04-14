import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import  useTranslations  from "./useTranslations"; // Import the custom hook
import { PATHS } from "../constant";


const Hero = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { translations, loading, error } = useTranslations(); // Fetch translations


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full flex">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ x: "100%" }}
            animate={{ x: currentIndex === index ? "0%" : "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
        >
         {translations.bienvenue}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg md:text-2xl text-white/90 font-semibold bg-gray-900 bg-opacity-75 px-4 py-2 rounded-lg"
        >
                  {translations.bienvenue_text}

        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 flex justify-center space-x-4"
        >
          <Link
            href={'#about'}
            className="bg-white text-green-600 px-6 py-3 text-lg rounded-lg shadow-md hover:bg-gray-100"
            aria-label="En savoir plus"
          >
                  {translations.bienvenue_btn}
                  </Link>
          <Link
            href={PATHS.CONTACT}
            className="bg-green-600 text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-green-900"
            aria-label="Nous rejoindre"
          >
                  {translations.bienvenue_btn2}
                  </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
