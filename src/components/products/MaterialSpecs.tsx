import React from "react";
import { motion } from "framer-motion";
import type { Material } from "../../types";
import { Shield, Weight } from "lucide-react";

interface MaterialSpecsProps {
  materials: Material[];
  className?: string;
}

const MaterialSpecs: React.FC<MaterialSpecsProps> = ({
  materials,
  className = "",
}) => {
  const getDurabilityColor = (durability: number) => {
    if (durability >= 9) return "text-uranus-acid";
    if (durability >= 7) return "text-electric-blue";
    if (durability >= 5) return "text-nasa-orange";
    return "text-comet-gray";
  };

  const getDurabilityBar = (durability: number) => {
    const percentage = (durability / 10) * 100;
    let color = "bg-comet-gray";

    if (durability >= 9) color = "bg-uranus-acid";
    else if (durability >= 7) color = "bg-electric-blue";
    else if (durability >= 5) color = "bg-nasa-orange";

    return { percentage, color };
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <h3 className="font-orbitron font-bold text-lg text-electric-blue uppercase tracking-wider">
        Matériaux & Spécifications
      </h3>

      <div className="space-y-4">
        {materials.map((material, index) => {
          const durabilityBar = getDurabilityBar(material.durability);

          return (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="product-card"
            >
              {/* Material Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-orbitron font-bold text-lg text-electric-blue mb-2">
                    {material.name}
                  </h4>
                  <p className="font-inter text-sm text-moon-dust/80 leading-relaxed">
                    {material.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Weight className="h-4 w-4 text-comet-gray" />
                  <span className="font-jetbrains text-sm text-comet-gray">
                    {material.weight}g
                  </span>
                </div>
              </div>

              {/* Material Type */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 border border-electric-blue/30 text-electric-blue text-sm font-orbitron uppercase tracking-wider rounded-full">
                  {material.type}
                </span>
              </div>

              {/* Properties */}
              <div className="mb-4">
                <h5 className="font-orbitron font-semibold text-sm text-neon-cyan mb-2 uppercase tracking-wider">
                  Propriétés
                </h5>
                <div className="flex flex-wrap gap-2">
                  {material.properties.map((property, propIndex) => (
                    <motion.span
                      key={propIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + propIndex * 0.05,
                      }}
                      className="px-2 py-1 bg-comet-gray/20 text-comet-gray text-xs rounded border border-comet-gray/30"
                    >
                      {property}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Durability Rating */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-electric-blue" />
                    <span className="font-orbitron font-semibold text-sm text-electric-blue uppercase tracking-wider">
                      Durabilité
                    </span>
                  </div>
                  <span
                    className={`font-jetbrains text-sm font-bold ${getDurabilityColor(
                      material.durability
                    )}`}
                  >
                    {material.durability}/10
                  </span>
                </div>

                <div className="w-full bg-comet-gray/20 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${durabilityBar.percentage}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className={`h-2 rounded-full ${durabilityBar.color} shadow-lg`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MaterialSpecs;
