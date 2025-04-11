import { motion } from "framer-motion";
import CarouselPlugin from "./Caroussel";
import { Link } from "@inertiajs/react";
import {PATHS} from '../constant'
import  useTranslations  from "./useTranslations"; // Import the custom hook
import ChiffresCles from "./ChiffresCles/ChiffresCles";

const About = ({cles}) => {

  const { translations, loading, error } = useTranslations(); // Fetch translations
 
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          {translations.apropos}
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
                    {translations.aproposText}

        </motion.p>

        {/* Mission */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800">{translations.mission}</h3>
            <p className="mt-4 text-gray-600">
              {translations.missionText}
             </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800">{translations.vision}</h3>
            <p className="mt-4 text-gray-600">
            {translations.visionText}
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mt-12 flex flex-col  justify-center items-center"
        >

         <ChiffresCles title={"Nos Chiffre Clés "} itemList={cles} />


        

        </motion.div>
      </div>
    </section>
  );
};

export default About;