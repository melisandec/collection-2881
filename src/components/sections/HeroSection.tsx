import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Zap, Shield } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-void-black via-comet-gray/10 to-void-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 mb-8 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full"
          >
            <Rocket className="h-4 w-4 text-electric-blue" />
            <span className="font-orbitron text-sm font-semibold text-electric-blue uppercase tracking-wider">
              Collection 2881
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-orbitron font-bold text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
              EXPLORATION
            </span>
            <br />
            <span className="text-moon-dust">SPATIALE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-xl text-moon-dust/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Découvrez notre collection exclusive de modèles spatiaux conçus pour
            l'exploration de l'univers. Innovation, performance et design
            rétro-futuriste.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/collection"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-cyan text-void-black font-orbitron font-bold text-lg uppercase tracking-wider rounded-lg hover:from-electric-blue/80 hover:to-neon-cyan/80 transition-all duration-300 group"
            >
              <span>Découvrir</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-transparent border-2 border-electric-blue text-electric-blue font-orbitron font-semibold text-lg uppercase tracking-wider rounded-lg hover:bg-electric-blue/10 transition-all duration-300"
            >
              <span>Produits</span>
              <Zap className="h-5 w-5" />
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/10 border border-electric-blue/30 rounded-full mb-4">
                <Rocket className="h-8 w-8 text-electric-blue" />
              </div>
              <h3 className="font-orbitron font-semibold text-lg text-moon-dust mb-2">
                Performance
              </h3>
              <p className="font-inter text-moon-dust/60">
                Technologies de pointe pour l'exploration spatiale
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/10 border border-electric-blue/30 rounded-full mb-4">
                <Shield className="h-8 w-8 text-electric-blue" />
              </div>
              <h3 className="font-orbitron font-semibold text-lg text-moon-dust mb-2">
                Sécurité
              </h3>
              <p className="font-inter text-moon-dust/60">
                Matériaux résistants aux conditions extrêmes
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/10 border border-electric-blue/30 rounded-full mb-4">
                <Zap className="h-8 w-8 text-electric-blue" />
              </div>
              <h3 className="font-orbitron font-semibold text-lg text-moon-dust mb-2">
                Innovation
              </h3>
              <p className="font-inter text-moon-dust/60">
                Design rétro-futuriste et fonctionnalité avancée
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
