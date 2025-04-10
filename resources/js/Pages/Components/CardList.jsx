import React from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion"; // Import motion from framer-motion

 

const CardList = ({titre,items,text,path}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">
        {titre}
      </h2>

      {/* Department Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
            transition={{
              delay: index * 0.3, // Stagger the animation, delay increases with index
              duration: 0.5, // Duration of the animation
              type: "spring", // Use spring physics for a more natural animation
            }}
          >
            {/* Title and Head Image */}
            <div className="p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {item.titre}
              </h3>
              <div className="flex items-center space-x-4">
                <img
                  src={`/storage/${item.image}`}
                  alt={item.nom}
                  className="w-35 h-35 object-cover rounded-full border-4 border-gray-200"
                />
                <div>
                  <p className="text-md font-semibold text-gray-900 text-center">
                    {item.nom}
                  </p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>

            {/* Link Button */}
            <Link href={`${path}/${item.slug}`}>
              <div className="bg-gray-900 p-4 text-center text-white font-semibold ">
                {text}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
