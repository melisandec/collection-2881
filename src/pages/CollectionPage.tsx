import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap, Shield, Users } from "lucide-react";
import { collection2881 } from "../data/products";

const CollectionPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Star className="h-6 w-6 text-electric-blue" />
            <span className="font-orbitron font-bold text-electric-blue uppercase tracking-wider">
              {collection2881.name}
            </span>
            <Star className="h-6 w-6 text-electric-blue" />
          </motion.div>

          <h1 className="font-orbitron font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
              {collection2881.name}
            </span>
          </h1>

          <p className="font-inter text-xl text-moon-dust/80 max-w-4xl mx-auto leading-relaxed mb-4">
            {collection2881.description}
          </p>

          <div className="flex items-center justify-center space-x-4 text-sm text-moon-dust/60">
            <span className="font-orbitron">
              <span className="text-electric-blue">THÈME:</span>{" "}
              {collection2881.theme}
            </span>
            <span className="font-orbitron">
              <span className="text-electric-blue">ANNÉE:</span>{" "}
              {collection2881.year}
            </span>
          </div>
        </motion.div>

        {/* Collection Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-gradient-to-br from-void-black/60 to-comet-gray/20 border border-electric-blue/30 rounded-lg">
            <Zap className="h-12 w-12 text-electric-blue mx-auto mb-4" />
            <h3 className="font-orbitron font-bold text-2xl text-electric-blue mb-2">
              {collection2881.products.length}
            </h3>
            <p className="font-inter text-moon-dust/80">Modèles Uniques</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-void-black/60 to-comet-gray/20 border border-electric-blue/30 rounded-lg">
            <Shield className="h-12 w-12 text-neon-cyan mx-auto mb-4" />
            <h3 className="font-orbitron font-bold text-2xl text-neon-cyan mb-2">
              {collection2881.products.reduce(
                (acc, product) => acc + product.materials.length,
                0
              )}
            </h3>
            <p className="font-inter text-moon-dust/80">Matériaux Avancés</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-void-black/60 to-comet-gray/20 border border-electric-blue/30 rounded-lg">
            <Users className="h-12 w-12 text-ultraviolet mx-auto mb-4" />
            <h3 className="font-orbitron font-bold text-2xl text-ultraviolet mb-2">
              {collection2881.team.length}
            </h3>
            <p className="font-inter text-moon-dust/80">Designers Experts</p>
          </div>
        </motion.div>

        {/* Products Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
              GAMME COMPLÈTE
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collection2881.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="product-card h-full">
                    {/* Product Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-orbitron font-bold text-xl text-electric-blue">
                        {product.model}
                      </h3>
                      <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue text-xs font-orbitron uppercase tracking-wider rounded">
                        {product.category}
                      </span>
                    </div>

                    {/* Product Description */}
                    <p className="font-inter text-sm text-moon-dust/80 leading-relaxed mb-4">
                      {product.shortDescription}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {product.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1 h-1 bg-electric-blue rounded-full" />
                            <span className="font-inter text-xs text-moon-dust/70">
                              {feature}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* Materials Count */}
                    <div className="flex items-center justify-between text-xs text-moon-dust/60">
                      <span>Matériaux: {product.materials.length}</span>
                      <span>Couleurs: {product.colors.length}</span>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 flex items-center space-x-2 text-electric-blue group-hover:text-neon-cyan transition-colors duration-300">
                      <span className="font-orbitron text-sm font-semibold">
                        EXPLORER
                      </span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
              ÉQUIPE DESIGN
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collection2881.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="p-6 bg-gradient-to-br from-void-black/60 to-comet-gray/20 border border-electric-blue/30 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-electric-blue" />
                </div>

                <h3 className="font-orbitron font-bold text-lg text-electric-blue mb-2">
                  {member.name}
                </h3>

                <p className="font-inter text-sm text-neon-cyan mb-3">
                  {member.role}
                </p>

                <p className="font-inter text-xs text-moon-dust/80 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionPage;
