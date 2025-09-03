import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: "Accueil", href: "/" },
    { label: "Collection", href: "/collection" },
    { label: "Produits", href: "/products" },
    { label: "Équipe", href: "/team" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-void-black/90 backdrop-blur-md border-b border-electric-blue/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Rocket className="h-8 w-8 text-electric-blue group-hover:text-neon-cyan transition-colors duration-300" />
              <div className="absolute inset-0 bg-electric-blue/20 rounded-full blur-md group-hover:bg-neon-cyan/30 transition-colors duration-300" />
            </motion.div>
            <span className="font-orbitron font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
              2881
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative font-inter font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                  location.pathname === item.href
                    ? "text-neon-cyan"
                    : "text-moon-dust hover:text-electric-blue"
                }`}
              >
                {item.label}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <div className="absolute inset-0 bg-electric-blue/10 rounded opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </nav>

          {/* Menu Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg border border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-electric-blue/20 bg-void-black/95 backdrop-blur-md"
            >
              <nav className="py-4 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2 font-inter font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                        location.pathname === item.href
                          ? "text-neon-cyan bg-electric-blue/10"
                          : "text-moon-dust hover:text-electric-blue hover:bg-electric-blue/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
