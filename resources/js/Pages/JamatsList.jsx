import React from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

// Example Jamat data
 
const JamatList = ({jamats}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">
        AKSIAM Jamats
      </h2>

      <div className="flex justify-between items-start">
        {/* Madagascar Map (Image animation first) */}
        <motion.div
          className="w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src="/images/mg.svg" // The image of Madagascar
            alt="Madagascar Map"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Jamat Cities List with Framer Motion */}
        <div className="w-1/2 pl-8">
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
            {jamats.map((jamat, index) => (
              <motion.div
                key={jamat.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: index * 0.3 + 1, duration: 0.5 }} // Added delay for smoother sequence
              >
                <Link
                  href={`/jamats/${jamat.slug}`}
                  className="block bg-gray-900 p-4 text-white font-semibold rounded-md text-center hover:bg-green-600 transition"
                >
                  {jamat.titre}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JamatList;
