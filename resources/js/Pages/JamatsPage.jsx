import { motion } from "framer-motion";
import React ,{useState}from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ChiffresCles from "./Components/ChiffresCles/ChiffresCles";
import { Link } from "@inertiajs/react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const JamatsPage = ({jamat,articles}) => {
    const cles=[
        {
          "chiffre":40,"title":"Departement","subtitle":"Membre de departement"
        },
        {
          "chiffre":100,"title":"Jamats","subtitle":"Total  de Jamats"
        },
        {
          "chiffre":1000,"title":"Membres","subtitle":"Total des membres "
        },
      ]
      const trustes=[
        {
            id: 1,
            name: "Charlie Brown",
            email: "charlie.brown@aksiam.com",
            role: "Sweeper",
             
            image: "/images/p4.jpg",
          },
          {
            id: 2,
            name: "Charlie Brown",
            email: "charlie.brown@aksiam.com",
            role: "Sweeper",
             
            image: "/images/p1.jpg",
          },
    ]
console.log()
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 6; 
      const totalPages = Math.ceil(articles.length / itemsPerPage);
      const paginatedArticle = articles.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
      );

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="h-[50vh] w-full relative">
  <Carousel
    showThumbs={false}
    autoPlay
    infiniteLoop
    showStatus={false}
    interval={3000}
    className="h-full"
  >
    {jamat.images.map((image, index) => (
      <div key={index}>
        <img src={`/storage/${image}`} alt={`jamat ${index + 1}`} className="w-full h-[50vh] object-cover" />
      </div>
    ))}
  </Carousel>
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-4xl md:text-5xl font-bold">{jamat.titre}</h1>
  </div>
</section>

      {/* About Section */}
<section className="w-full max-w-4xl mx-auto py-12 px-6 flex flex-col items-center text-center">
  <h2 className="text-3xl font-bold mb-4 text-center">About the Jamats</h2>
  <p 
  className="text-lg text-gray-600 leading-relaxed"
  dangerouslySetInnerHTML={{ __html: jamat.apropos }}
 />
   {/* Call to Action */}
   <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mt-12 flex flex-col  justify-center items-center"
        >

         <ChiffresCles title={""} itemList={cles} />
    </motion.div>
</section>
<section>
<h2 className="text-4xl font-semibold text-center py-10 text-gray-900">
        Membres de Staffs
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
                        src={`${admin.image}`}
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
</section>

<section className="max-w-6xl mx-auto px-6">
<motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold my-4 text-gray-800 text-center"
        >
          Actualités
 </motion.h2>
 <p className="text-gray-600 text-center mt-2">
 Découvrez les dernières nouvelles et projets.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            paginatedArticle.map((article) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img src={`/storage/${article.featured_img}`} alt={article.titre} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{article.titre}</h3>
                  <p className="text-sm text-gray-500 mt-1">{article.date} • {article.department ? article.department.titre : 'No category'}</p>
                  <Link href={`/actualités/${article.slug}`}>
                    <span className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition cursor-pointer">
                    Lire plus
                    </span>
                    </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-3">No articles </p>
          )}
        </div>
</section>
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

export default JamatsPage;
