import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, LogIn, LogOut, Menu, X } from "lucide-react";
import { PATHS } from "../constant";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useTranslations from "./useTranslations";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { url } = usePage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { language, toggleLanguage } = useLanguage();
  const { translations } = useTranslations();
  
  const handleLogout = async () => {
    await axios.post("/logout");
    window.location.href = "/";
  };

  const handleLogin = () => {
    window.open("/admin", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MENU_ITEMS = [
    { href: "/", label: translations.home || "Home" },
    { href: PATHS.ACTUALITES, label: translations.news || "News" },
    { href: PATHS.ADMINISTRATOR, label: translations.administrator || "Administrator" },
    { href: PATHS.DEPARTMENT, label: translations.department || "Department" },
    { href: PATHS.JAMATS, label: translations.jamats || "Jamats" },
    { href: PATHS.CONTACT, label: translations.contact || "Contact" },

  ];

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-2 pb-2"}`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/">
          <img src="/images/aksiam.jpg" alt="Logo" className="w-[60px] h-[50px] object-cover rounded-xl" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg font-medium transition-colors hover:text-blue-600 ${url === item.href ? "text-primary font-bold" : "text-gray-800"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Language Switcher & Login */}
        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => toggleLanguage("fr")}>Français</DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("gj")}>Gujarati</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {!usePage().props.auth?.user ? (
            <Button variant="outline" onClick={handleLogin}>
              <LogIn className="w-5 h-5" />
              <span>{translations.login || "Se connecter"}</span>
            </Button>
          ) : (
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
              <span>{translations.logout || "Se déconnecter"}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-lg rounded-lg p-4 absolute top-full left-0 w-full"
          >
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-center text-lg font-medium hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

/*
{auth?.user?.role === "admin" && (
  <> 
{ADMIN_MENU_ITEM.map((item) => (

<Link
  key={item.href}
  href={item.href}
  className={`text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${url === item.href ? "text-primary font-bold" : "text-gray-800"}`}
>
  {item.label}
</Link>

))}
</>
)}
 
*/