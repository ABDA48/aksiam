import { motion } from "framer-motion";
import  useTranslations  from "./useTranslations"; // Import the custom hook




const Latestarticle = ({articles}) => {
  const { translations, loading, error } = useTranslations(); // Fetch translations
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
           {translations.latestactualite}
        </motion.h2>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {translations.latestactualiteText}
        </p>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: article.id * 0.2 }}
              className="group relative rounded-lg overflow-hidden shadow-lg bg-gray-100"
            >
              <img 
                src={`/storage/${article.featured_img}`} 
                alt={article.titre} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white">{article.titre}</h3>
                 <a 
                  href={`/actualités/${article.slug}`} 
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition"
                >
                  {translations.lire}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latestarticle;
