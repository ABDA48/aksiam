import { useState } from "react";
import { motion } from "framer-motion";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { Link } from "@inertiajs/react";
 
import  useTranslations  from "./Components/useTranslations"; // Import the custom hook



const Videos = ({videos,categories,search}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const filteredvideos = videos.filter((video) =>
    (selectedCategory === "Tous" || video.category.nom === selectedCategory) &&
    video.titre.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredvideos.length / itemsPerPage);
  const paginatedvideo = filteredvideos.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );
  const { translations, loading, error } = useTranslations(); // Fetch translations

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* titre */}
        <h1 className="text-3xl font-bold text-gray-900">
        {search ? `Résultats pour : "${search}"` : ""}
      </h1>
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 text-center"
        >
          {translations.video}
        </motion.h2>

        <p className="text-gray-600 text-center mt-2">
          {translations.newsText}
        </p>

        {/* Search & Filter */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder={`${translations.searchvideo}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Category Filter */}
          <motion.select
            whileFocus={{ scale: 1.05 }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.nom}>
                {cat.nom}
              </option>
            ))}
          </motion.select>
        </div>

        {/* Articles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredvideos.length > 0 ? (
            paginatedvideo.map((video) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img src={`/storage/${video.featured_img}`} alt={video.titre} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{video.titre}</h3>
                  <p className="text-sm text-gray-500 mt-1">{video.date} • {video.category.nom}</p>
                  <Link href={`/media/videos/${video.slug}`}>
                    <span className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition cursor-pointer">
                    {translations.vue}
                    </span>
                    </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-3">{translations.novideo}</p>
          )}
        </div>
      </div>
            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <Pagination>
                    <PaginationContent>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    isActive={currentPage === index + 1}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`${
                                        currentPage === index + 1
                                            ? "bg-blue-600 text-white"
                                            : "bg-white text-blue-600"
                                    } px-4 py-2 rounded-md border transition-colors duration-300 hover:bg-blue-100`}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                    </PaginationContent>
                </Pagination>
            </div>
    </div>
  );
};

export default Videos;
