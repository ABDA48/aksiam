import React from "react";
import { motion } from "framer-motion";

 

const AdminList = ({titre,administrators}) => {
    const groupedAdmins = administrators.reduce((acc, admin) => {
        if (!acc[admin.niveau]) acc[admin.niveau] = [];
        acc[admin.niveau].push(admin);
        return acc;
      }, {});
      
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">
        {titre}
      </h2>

      {/* Loop through each "niveau" and dynamically render them */}
      <div className="space-y-16">
        {Object.keys(groupedAdmins).map((niveau) => (
          <div key={niveau}>
            

            <div className="flex flex-wrap justify-center gap-10">
              {groupedAdmins[niveau].map((admin) => (
                <motion.div
                  key={admin.id}
                  className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-64"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={`/storage/${admin.image}`}
                    alt={admin.name}
                    className="w-50 h-50 object-cover rounded-full border-4 border-gray-200"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="mt-4 text-center">
                    <h4 className="text-xl font-semibold text-gray-800">{admin.name}</h4>
                    <p className="text-sm text-gray-500 mt-2">{admin.role}</p>
                    <p className="text-xs text-gray-400 mt-1">{admin.email}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      

    </div>
  );
};

export default AdminList;
