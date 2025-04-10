import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function Cles({ chiffre, title, subtitle }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}

      transition={{ type: "spring", duration: 1.5,delay:1.5 }}
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="w-52 h-52 md:w-44 md:h-44 sm:w-40 sm:h-40 rounded-full   shadow-lg flex items-center justify-center border-2  bg-white ">
        <h1 className="text-4xl font-bold text-green-500">
          <CountUp start={0} end={chiffre} duration={2} delay={2} />+
        </h1>
      </div>
      <h2 className="text-xl font-semibold text-gray-700 mt-2">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </motion.div>
  );
}

export default Cles;
