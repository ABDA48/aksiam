import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/mosque.jpg')" }}>
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white drop-shadow-lg"
        >
          Contactez-nous
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Contact Info Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800">Nos Coordonnées</h2>
          <p className="mt-4 text-lg text-gray-600">
            Nous sommes toujours disponibles pour répondre à vos questions.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md flex items-center"
          >
            <FaPhoneAlt className="text-green-600 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Téléphone</h3>
              <p className="text-gray-600">+261 34 12 345 67</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md flex items-center"
          >
            <FaEnvelope className="text-green-600 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">contact@votreentreprise.com</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md flex items-center"
          >
            <FaMapMarkerAlt className="text-green-600 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Adresse</h3>
              <p className="text-gray-600">Antananarivo, Madagascar</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-800"
          >
            Envoyez-nous un Message
          </motion.h2>
          <p className="text-gray-600 mt-2">Nous répondrons dès que possible.</p>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 font-semibold">Nom Complet</label>
              <input type="text" className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Votre Nom" />
            </div>
            <div>
              <label className="text-gray-700 font-semibold">Email</label>
              <input type="email" className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Votre Email" />
            </div>
            <div className="col-span-2">
              <label className="text-gray-700 font-semibold">Sujet</label>
              <input type="text" className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Sujet du Message" />
            </div>
            <div className="col-span-2">
              <label className="text-gray-700 font-semibold">Message</label>
              <textarea rows="4" className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Votre Message"></textarea>
            </div>
            <div className="col-span-2">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Envoyer le Message
              </motion.button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-800 text-center"
          >
            Notre Localisation
          </motion.h2>
          <p className="text-gray-600 mt-2 text-center">Trouvez-nous sur la carte ci-dessous.</p>
          <div className="mt-8">
            <iframe
              className="w-full h-[400px] rounded-lg shadow-md"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1314141506896!2d47.520895811388655!3d-18.881250382209778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f080ca330f372f%3A0x63cedd4cabf449d9!2sKhoja%20Shia%20Ithnaashri%20Mosque!5e0!3m2!1sen!2smg!4v1742473998600!5m2!1sen!2smg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};


    

export default ContactPage;
