import { motion } from "framer-motion";
import { CarouselSize } from "./Components/logos";

const teamMembers = [
  { id: 1, name: "Ali Mohamed", role: "Président", image: "/images/p2.jpg" },
  { id: 2, name: "Fatima Rahim", role: "Coordinatrice", image: "/images/p3.jpg" },
  { id: 3, name: "Hassan Diallo", role: "Responsable Financier", image: "/images/p4.jpg" },
];

const testimonials = [
  {
    id: 1,
    name: "Oumou Diallo",
    feedback: "Grâce à cette association, j'ai pu continuer mes études et obtenir une bourse d'excellence. Merci infiniment !",
    image: "/images/p2.jpg",
  },
  {
    id: 2,
    name: "Karim Traoré",
    feedback: "Leur aide en matière de santé a changé ma vie. Ils sont vraiment engagés pour notre bien-être.",
    image: "/images/p3.jpg" ,
  },
];

const partners = [
  { id: 1, name: "UNICEF", path: "/images/aksiam.jpg" ,link:"#"},
  { id: 2, name: "Red Cross", path: "/images/aksiam.jpg",link:"#" },
  { id: 3, name: "World Health Organization", path: "/images/aksiam.jpg" ,link:"#"},

  { id: 1, name: "UNICEF", path: "/images/aksiam.jpg" ,link:"#"},
  { id: 2, name: "Red Cross", path: "/images/aksiam.jpg",link:"#" },
  { id: 3, name: "World Health Organization", path: "/images/aksiam.jpg" ,link:"#"},

  { id: 1, name: "UNICEF", path: "/images/aksiam.jpg" ,link:"#"},
  { id: 2, name: "Red Cross", path: "/images/aksiam.jpg",link:"#" },
  { id: 3, name: "World Health Organization", path: "/images/aksiam.jpg" ,link:"#"},
];

const AboutUs = () => {
  return (
    <section className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/img7.jpg')" }}>
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white drop-shadow-lg"
        >
          À Propos de Nous
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Mission & Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800">Notre Mission & Vision</h2>
          <p className="mt-4 text-lg text-gray-600">
            Nous sommes une organisation à but non lucratif dédiée à l'amélioration des conditions de vie des communautés locales.
            À travers nos initiatives, nous visons à offrir des opportunités éducatives, de santé et de développement durable.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Éducation", "Santé", "Communauté"].map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800">{value}</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-800"
          >
            Rencontrez notre équipe
          </motion.h2>
          <p className="text-gray-600 mt-2">Des personnes passionnées travaillant ensemble pour un avenir meilleur.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id} 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img src={member.image} alt={member.name} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-800"
          >
            Témoignages
          </motion.h2>
          <p className="text-gray-600 mt-2">Découvrez ce que nos bénéficiaires disent de nous.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <div className="mt-4 flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-800"
          >
            Nos Partenaires
          </motion.h2>
          <p className="text-gray-600 mt-2">Nous collaborons avec des organisations de renommée mondiale.</p>
        </div>

        <div className="w-full max-w-4xl mt-6">
         <CarouselSize logos={partners} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
