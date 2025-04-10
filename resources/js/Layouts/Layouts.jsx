import React from "react";
import Footer from "../Pages/Components/Footer";
import Navbar from "../Pages/Components/Navbar";
import { LanguageProvider } from "../Pages/context/LanguageContext"; // Import the provider

const Layout = ({ children }) => {
  return (
    <LanguageProvider>

    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar   />

      {/* Main Content (Pushes the footer down when content is small) */}
      <main className="flex-1 pt-16 bg-gray-50">
        <div className="">{children}</div>
      </main>

      {/* Footer (Always at the bottom) */}
      <Footer />
    </div>
    </LanguageProvider>

  );
};

export default Layout;
