import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap } from "lucide-react";
import { products } from "../../data/products";

const CollectionPreview: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Star className="h-6 w-6 text-electric-blue" />
            <span className="font-orbitron font-bold text-electric-blue uppercase tracking-wider">
              Collection 2881
            </span>
            <Star className="h-6 w-6 text-electric-blue" />
          </motion.div>

          <h2 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
              MODÈLES
            </span>
          </h2>

          <p className="font-inter text-lg text-moon-dust/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de produits conçus pour l'exploration
            spatiale. Chaque modèle allie innovation technologique et design
            rétro-futuriste.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/products/${product.id}`}>
                <div className="product-card h-full">
                  {/* Product Image */}
                  <div className="relative mb-6 h-48 bg-gradient-to-br from-electric-blue/20 to-neon-cyan/20 rounded-lg overflow-hidden">
                    {product.images && product.images.length > 0 ? (
                      <img
                        src={product.images[0].url}
                        alt={product.images[0].alt}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="text-6xl font-orbitron font-bold text-electric-blue/30"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {product.model}
                        </motion.div>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex items-center space-x-2 text-electric-blue">
                        <Zap className="h-4 w-4" />
                        <span className="font-orbitron text-sm font-semibold">
                          DÉCOUVRIR
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-orbitron font-bold text-xl text-electric-blue">
                        {product.model}
                      </h3>
                      <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue text-xs font-orbitron uppercase tracking-wider rounded">
                        {product.category}
                      </span>
                    </div>

                    <p className="font-inter text-sm text-moon-dust/80 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Materials Preview */}
                    <div className="flex flex-wrap gap-2">
                      {product.materials
                        .slice(0, 2)
                        .map((material, matIndex) => (
                          <span
                            key={matIndex}
                            className="px-2 py-1 bg-comet-gray/20 text-comet-gray text-xs rounded border border-comet-gray/30"
                          >
                            {material.type}
                          </span>
                        ))}
                      {product.materials.length > 2 && (
                        <span className="px-2 py-1 bg-comet-gray/20 text-comet-gray text-xs rounded border border-comet-gray/30">
                          +{product.materials.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Colors Preview */}
                    <div className="flex items-center space-x-2">
                      <span className="font-inter text-xs text-moon-dust/60 uppercase tracking-wider">
                        Couleurs:
                      </span>
                      <div className="flex space-x-1">
                        {product.colors.slice(0, 3).map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded-full border border-electric-blue/30"
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                        {product.colors.length > 3 && (
                          <div className="w-4 h-4 rounded-full border border-electric-blue/30 bg-comet-gray/50 flex items-center justify-center">
                            <span className="text-xs text-electric-blue">
                              +
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/collection"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 border-2 border-electric-blue/50 text-electric-blue font-orbitron font-semibold text-lg uppercase tracking-wider rounded-lg hover:from-electric-blue/30 hover:to-neon-cyan/30 hover:border-electric-blue transition-all duration-300 group"
          >
            <span>Voir Toute la Collection</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionPreview;
