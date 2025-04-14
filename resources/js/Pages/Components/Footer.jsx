import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} AKSIAM. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/" className="hover:text-gray-400">Accueil</a>
             <a href="/about" className="hover:text-gray-400">Contact</a>
             <a href="/admin" className="hover:text-gray-400">Se Connecter</a>

          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 text-xl"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-400 text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400 text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400 text-xl"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
    );
  };

  export  default Footer;