import { motion } from "framer-motion";
import { useState } from "react";
import  useTranslations  from "./useTranslations"; // Import the custom hook

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé ! Nous vous répondrons bientôt.");
  };
  const { translations, loading, error } = useTranslations(); // Fetch translations

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800"
        >
          {translations.contactus}
        </motion.h2>

        <p className="mt-4 text-lg text-center text-gray-600 max-w-3xl mx-auto">
        {translations.contactusText}

         </p>

        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="mt-10 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="text-gray-700 font-semibold">{translations.name}</label>
              <motion.input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.05 }}
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder={`${translations.nameplaceholder}`}
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 font-semibold">{translations.email}</label>
              <motion.input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.05 }}
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder={`${translations.emailplaceholder}`}
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="text-gray-700 font-semibold">{translations.message}</label>
            <motion.textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full mt-2 px-4 py-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder={`${translations.messageplaceholder}`}
            />
          </div>

          {/* Submit Button */}
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
          >
             {translations.sendmessage}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
