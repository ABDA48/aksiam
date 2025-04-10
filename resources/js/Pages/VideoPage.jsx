import React, { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { motion } from "framer-motion";

function VideoPage({ video, relatedvideos }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      router.get(`/media/videos?search=${searchQuery}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="mb-6 flex items-center justify-center">
        <input
          type="text"
          className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Rechercher des vidéos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      {/* Main Content Section */}
      <div className="lg:flex lg:gap-8">
        {/* Left Section - Video Player */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold">{video.titre}</h1>
          <p className="text-gray-600 mt-2">
            {video.date} • <span className="font-semibold">{video.category.nom}</span>
          </p>

          {/* Featured Video */}
          <div className="mt-4 relative overflow-hidden rounded-lg shadow-lg">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${video.video_id}`}
              title="FCRA Video"
              allowFullScreen
              className="w-full h-[400px] object-cover rounded-lg"
            ></iframe>
          </div>

          {/* Video Description */}
          <motion.div
        className="mt-6 text-lg text-gray-800 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        dangerouslySetInnerHTML={{ __html: video.content }}
      />
        </div>

        {/* Right Section - Related Videos */}
        {relatedvideos.length > 0 && (
          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vidéos Similaires</h2>
            <div className="space-y-6">
              {relatedvideos.map((related) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105"
                >
                  <img
                    src={`/storage/${related.featured_img}`}
                    alt={related.titre}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{related.titre}</h3>
                    <p className="text-sm text-gray-500 mt-1">{related.date}</p>
                    <Link href={`/media/videos/${related.slug}`}>
                      <span className="mt-2 inline-block px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition cursor-pointer">
                        Voire
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPage;
