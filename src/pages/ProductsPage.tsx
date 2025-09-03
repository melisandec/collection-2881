import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Filter, Search, ArrowRight, Star } from "lucide-react";
import { products } from "../data/products";
import type { ProductFilters } from "../types";

const ProductsPage: React.FC = () => {
  const [filters, setFilters] = useState<ProductFilters>({});
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search and filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !filters.category || product.category === filters.category;
    const matchesColor =
      !filters.color ||
      product.colors.some((color) => color.name === filters.color);
    const matchesMaterial =
      !filters.material ||
      product.materials.some((material) => material.type === filters.material);

    return matchesSearch && matchesCategory && matchesColor && matchesMaterial;
  });

  // Get unique values for filter options
  const categories = [...new Set(products.map((p) => p.category))];
  const colors = [
    ...new Set(products.flatMap((p) => p.colors.map((c) => c.name))),
  ];
  const materials = [
    ...new Set(products.flatMap((p) => p.materials.map((m) => m.type))),
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Star className="h-6 w-6 text-electric-blue" />
            <span className="font-orbitron font-bold text-electric-blue uppercase tracking-wider">
              Catalogue Produits
            </span>
            <Star className="h-6 w-6 text-electric-blue" />
          </motion.div>

          <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
              GAMME 2881
            </span>
          </h1>

          <p className="font-inter text-lg text-moon-dust/80 max-w-3xl mx-auto leading-relaxed">
            Explorez notre collection complète de produits conçus pour
            l'exploration spatiale. Filtrez par catégorie, couleur ou matériau
            pour trouver l'équipement parfait.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-void-black/60 to-comet-gray/20 border border-electric-blue/30 rounded-lg p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-electric-blue" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-void-black/50 border border-electric-blue/30 rounded-lg text-moon-dust placeholder-moon-dust/50 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/50 font-inter"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-orbitron font-semibold text-electric-blue mb-2 uppercase tracking-wider">
                  <Filter className="inline h-4 w-4 mr-1" />
                  Catégorie
                </label>
                <select
                  value={filters.category || ""}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      category: e.target.value || undefined,
                    })
                  }
                  className="w-full px-3 py-2 bg-void-black/50 border border-electric-blue/30 rounded-lg text-moon-dust focus:outline-none focus:border-electric-blue font-inter"
                  title="Sélectionner une catégorie"
                >
                  <option value="">Toutes les catégories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Filter */}
              <div>
                <label className="block text-sm font-orbitron font-semibold text-electric-blue mb-2 uppercase tracking-wider">
                  Couleur
                </label>
                <select
                  value={filters.color || ""}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      color: e.target.value || undefined,
                    })
                  }
                  className="w-full px-3 py-2 bg-void-black/50 border border-electric-blue/30 rounded-lg text-moon-dust focus:outline-none focus:border-electric-blue font-inter"
                  title="Sélectionner une couleur"
                >
                  <option value="">Toutes les couleurs</option>
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              {/* Material Filter */}
              <div>
                <label className="block text-sm font-orbitron font-semibold text-electric-blue mb-2 uppercase tracking-wider">
                  Matériau
                </label>
                <select
                  value={filters.material || ""}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      material: e.target.value || undefined,
                    })
                  }
                  className="w-full px-3 py-2 bg-void-black/50 border border-electric-blue/30 rounded-lg text-moon-dust focus:outline-none focus:border-electric-blue font-inter"
                  title="Sélectionner un matériau"
                >
                  <option value="">Tous les matériaux</option>
                  {materials.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            {(filters.category ||
              filters.color ||
              filters.material ||
              searchTerm) && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => {
                    setFilters({});
                    setSearchTerm("");
                  }}
                  className="px-4 py-2 text-sm font-orbitron font-semibold text-electric-blue border border-electric-blue/30 rounded-lg hover:bg-electric-blue/10 transition-all duration-300"
                >
                  Effacer les filtres
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <p className="font-inter text-moon-dust/80">
            {filteredProducts.length} produit
            {filteredProducts.length !== 1 ? "s" : ""} trouvé
            {filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
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
                          className="text-4xl font-orbitron font-bold text-electric-blue/30"
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
                        <ArrowRight className="h-4 w-4" />
                        <span className="font-orbitron text-sm font-semibold">
                          DÉCOUVRIR
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-orbitron font-bold text-lg text-electric-blue">
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
                    <div className="flex flex-wrap gap-1">
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
                            className="w-3 h-3 rounded-full border border-electric-blue/30"
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                        {product.colors.length > 3 && (
                          <div className="w-3 h-3 rounded-full border border-electric-blue/30 bg-comet-gray/50 flex items-center justify-center">
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

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="font-orbitron font-bold text-xl text-electric-blue mb-2">
              Aucun produit trouvé
            </h3>
            <p className="font-inter text-moon-dust/80 mb-4">
              Essayez de modifier vos critères de recherche ou de filtrer
              différemment.
            </p>
            <button
              onClick={() => {
                setFilters({});
                setSearchTerm("");
              }}
              className="btn-sci-fi"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
