import React from "react";
import { motion } from "framer-motion";
import AdminList from "./Components/AdminList";
import { CarouselSize } from "./Components/logos";

 

 

 
 

const Administrators = ({administrators,trustes,partners}) => {
  return (
    <div className="">
     <AdminList titre={"Les Administrateur de AKSIAM "} administrators={administrators}/>

      <h2 className="text-4xl font-semibold text-center py-10 text-gray-900">
        AKSIAM TRUSTEES
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
              {trustes.map((admin) => (
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
                    <h4 className="text-xl font-semibold text-gray-800">{admin.nom}</h4>
                    <p className="text-sm text-gray-500 mt-2">{admin.role}</p>
                    <p className="text-xs text-gray-400 mt-1">{admin.email}</p>
                  </div>
                </motion.div>
              ))}



            </div>
            <h2 className="text-4xl font-semibold text-center py-10 text-gray-900">
       Nos partenaires
      </h2>

            <div className="w-full max-w-4xl mt-6 mx-auto flex justify-center">
  <CarouselSize logos={partners} />
</div>


    </div>
  );
};

export default Administrators;
