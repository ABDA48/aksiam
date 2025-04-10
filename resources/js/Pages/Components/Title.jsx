import React from "react";
import { motion } from "framer-motion";
const Title =({titre})=>{

return(
    <>
    <motion.h2 
  initial={{ opacity: 0, y: -50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8 }}
  className="text-4xl md:text-5xl font-bold text-center text-gray-800"
>
{titre}
</motion.h2>
    </>
)
}

export default Title;