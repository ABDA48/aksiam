import { Link ,router} from "@inertiajs/react";
import { motion } from "framer-motion";
import { useState } from "react";
import CarouselPlugin from "./Components/Caroussel";
 
const ArticlePage = ({ article, relatedArticles }) => {
  if (!article) {
    return <div className="text-center text-gray-600">Article non trouvé.</div>;
  }
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      router.get(`/actualités?search=${searchQuery}`);
    }
  };

  const imagesSection = article.images.map((src, index) => ({
    src: `/storage/${src}`, // Prepend storage path to each image source
    alt: `${article.department.titre} - Image ${index + 1}`
}));

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Search Bar */}
      <div className="mb-8 flex items-center justify-center">
        <input
          type="text"
          className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Rechercher des articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900">{article.titre}</h1>
        <p className="text-gray-600 mt-2">
          {article.date} • <span className="font-semibold">{article.department.titre}</span>
        </p>
      </motion.div>

      {/* Article Image */}
      
<CarouselPlugin images={imagesSection} />
     

      {/* Article Content */}
      <motion.div
        className="mt-6 text-lg text-gray-800 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
       
   

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">Articles Similaires</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((related) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img src={`/storage/${related.featured_img}`} alt={related.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{related.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{related.date}</p>
                  <Link href={`/actualités/${related.slug}`}>
                    <span className="mt-2 inline-block px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition cursor-pointer">
                      Lire plus
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
