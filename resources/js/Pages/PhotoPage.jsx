import React, { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { router} from "@inertiajs/react";
import { motion } from "framer-motion";
 

function PhotoPage({ photo }) {
    const [searchQuery, setSearchQuery] = useState("");

      const handleSearch = (e) => {
        if (e.key === "Enter" && searchQuery.trim() !== "") {
          router.get(`/media/photos?search=${searchQuery}`);
        }
      };
console.log(photo);
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
       <div className="mb-8 flex items-center justify-center">
        <input
          type="text"
          className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Rechercher des photos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
      
      <h1 className="text-3xl font-bold">{photo.titre}</h1>
      <p className="text-gray-600 mt-2">
          {photo.date} • <span className="font-semibold">{photo.category.nom}</span>
        </p>
          {/* Search Bar */}
      {/* Article Content */}
      <motion.div
        className="mt-2 text-lg text-gray-800 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        dangerouslySetInnerHTML={{ __html: photo.content }}
      />
     {/* Display featured image */}
     <div className="my-1">
        <img
          src={`/storage/${photo.featured_img}`}
          alt={photo.titre}
          className="w-full h-60 object-cover rounded-lg"
        />
      </div>
 

      {/* Gallery */}
      <Gallery>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photo.images.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-3 transition-transform transform hover:scale-105"
            >
              <Item original={`/storage/${image}`} thumbnail={`/storage/${image}`} width={1200}  height={800}>
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={`/storage/${image}`}
                    alt={''}
                    className="cursor-pointer rounded-lg object-cover w-full h-[250px]"
                  />
                )}
              </Item>
            </div>
          ))}
        </div>
      </Gallery>

       

    
    </div>
  );
}

export default PhotoPage;
