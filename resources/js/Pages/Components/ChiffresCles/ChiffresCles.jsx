import React from "react";
import { motion } from "framer-motion";
import Cles from "./Cles";
import Title from "../Title";

function ChiffresCles({ title, itemList }) {
  const TextVariants = {
    hidden: { opacity: 0, x: -180 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", mass: 2, duration: 1, delay: 0.5 },
    },
  };

  return (
    <div className="relative     flex flex-col items-center justify-center">
      {/* Content Wrapper */}
      <div className="relative px-6 sm:px-12 md:px-16 lg:px-24 py-12 text-center">
        <Title titre={title} />

        {/* Flex Container for Items */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {itemList.map(
            (item, index) =>
              item && (
                <div key={index} className="flex justify-center">
                  <Cles chiffre={item.chiffre} title={item.title} subtitle={item.subtitle} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default ChiffresCles;
