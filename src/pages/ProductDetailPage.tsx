import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ArrowRight } from "lucide-react";
import { products } from "../data/products";
import ColorSelector from "../components/products/ColorSelector";
import MaterialSpecs from "../components/products/MaterialSpecs";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState<string>("");

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-orbitron font-bold text-4xl text-electric-blue mb-4">
            Produit non trouvé
          </h1>
          <p className="font-inter text-moon-dust/80 mb-8">
            Le produit que vous recherchez n'existe pas.
          </p>
          <Link to="/products" className="btn-sci-fi">
            Retour aux produits
          </Link>
        </div>
      </div>
    );
  }

  // Set default color if none selected
  if (!selectedColor && product.colors.length > 0) {
    setSelectedColor(product.colors[0].name);
  }

  const selectedColorData = product.colors.find(
    (c) => c.name === selectedColor
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-electric-blue hover:text-neon-cyan transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-orbitron font-semibold uppercase tracking-wider">
              Retour aux produits
            </span>
          </Link>
        </motion.div>

        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-electric-blue" />
            <span className="font-orbitron font-bold text-electric-blue uppercase tracking-wider">
              {product.model}
            </span>
            <Star className="h-6 w-6 text-electric-blue" />
          </div>

          <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
              {product.name}
            </span>
          </h1>

          <p className="font-inter text-lg text-moon-dust/80 max-w-3xl mx-auto leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-moon-dust/60">
            <span className="font-orbitron">
              <span className="text-electric-blue">CATÉGORIE:</span>{" "}
              {product.category}
            </span>
            <span className="font-orbitron">
              <span className="text-electric-blue">POIDS:</span>{" "}
              {product.dimensions.weight}g
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Image & Configurator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-electric-blue/20 to-neon-cyan/20 rounded-lg overflow-hidden border border-electric-blue/30">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-8xl font-orbitron font-bold text-electric-blue/30"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {product.model}
                    </motion.div>
                  </div>
                )}

                {/* Color Overlay */}
                {selectedColorData && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    className="absolute inset-0"
                    style={{ backgroundColor: selectedColorData.hex }}
                  />
                )}
              </div>

              {/* Product Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 border border-electric-blue/30 text-electric-blue text-sm font-orbitron uppercase tracking-wider rounded-full">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Color Selector */}
            <ColorSelector
              colors={product.colors}
              selected={selectedColor}
              onChange={setSelectedColor}
            />
          </motion.div>

          {/* Right Column - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Features */}
            <div className="product-card">
              <h3 className="font-orbitron font-bold text-lg text-electric-blue mb-4 uppercase tracking-wider">
                Caractéristiques
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-electric-blue rounded-full" />
                    <span className="font-inter text-sm text-moon-dust/80">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="product-card">
              <h3 className="font-orbitron font-bold text-lg text-electric-blue mb-4 uppercase tracking-wider">
                Spécifications Techniques
              </h3>
              <div className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <motion.div
                    key={spec.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="border-l-2 border-electric-blue/30 pl-4"
                  >
                    <h4 className="font-orbitron font-semibold text-sm text-neon-cyan mb-2 uppercase tracking-wider">
                      {spec.category}
                    </h4>
                    <div className="space-y-1">
                      {spec.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between items-center"
                        >
                          <span className="font-inter text-sm text-moon-dust/80">
                            {item.name}
                          </span>
                          <span className="font-jetbrains text-sm text-electric-blue">
                            {item.value}{" "}
                            {item.unit && (
                              <span className="text-moon-dust/60">
                                {item.unit}
                              </span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dimensions */}
            <div className="product-card">
              <h3 className="font-orbitron font-bold text-lg text-electric-blue mb-4 uppercase tracking-wider">
                Dimensions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/10 border border-electric-blue/30 rounded-lg">
                  <p className="font-jetbrains text-lg text-electric-blue font-bold">
                    {product.dimensions.length}cm
                  </p>
                  <p className="font-inter text-xs text-moon-dust/60 uppercase tracking-wider">
                    Longueur
                  </p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/10 border border-electric-blue/30 rounded-lg">
                  <p className="font-jetbrains text-lg text-electric-blue font-bold">
                    {product.dimensions.width}cm
                  </p>
                  <p className="font-inter text-xs text-moon-dust/60 uppercase tracking-wider">
                    Largeur
                  </p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/10 border border-electric-blue/30 rounded-lg">
                  <p className="font-jetbrains text-lg text-electric-blue font-bold">
                    {product.dimensions.height}cm
                  </p>
                  <p className="font-inter text-xs text-moon-dust/60 uppercase tracking-wider">
                    Hauteur
                  </p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/10 border border-electric-blue/30 rounded-lg">
                  <p className="font-jetbrains text-lg text-electric-blue font-bold">
                    {product.dimensions.weight}g
                  </p>
                  <p className="font-inter text-xs text-moon-dust/60 uppercase tracking-wider">
                    Poids
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Materials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <MaterialSpecs materials={product.materials} />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-void-black/60 to-comet-gray/20 border border-electric-blue/30 rounded-lg p-8">
            <h3 className="font-orbitron font-bold text-2xl text-electric-blue mb-4">
              Intéressé par ce modèle ?
            </h3>
            <p className="font-inter text-moon-dust/80 mb-6 max-w-2xl mx-auto">
              Contactez notre équipe pour plus d'informations sur la
              disponibilité et les options de personnalisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-sci-fi">Contacter l'équipe</button>
              <Link
                to="/products"
                className="px-6 py-3 font-orbitron font-semibold text-sm uppercase tracking-wider border-2 border-transparent bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 text-electric-blue hover:from-electric-blue/30 hover:to-neon-cyan/30 transition-all duration-300 rounded-lg flex items-center justify-center space-x-2"
              >
                <span>Voir d'autres modèles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
