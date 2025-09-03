import React from "react";
import { motion } from "framer-motion";
import type { Color } from "../../types";

interface ColorSelectorProps {
  colors: Color[];
  selected: string;
  onChange: (color: string) => void;
  className?: string;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selected,
  onChange,
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="font-orbitron font-bold text-lg text-electric-blue uppercase tracking-wider">
        Couleurs Disponibles
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {colors.map((color, index) => (
          <motion.button
            key={color.name}
            onClick={() => onChange(color.name)}
            className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
              selected === color.name
                ? "border-electric-blue bg-electric-blue/10 shadow-lg shadow-electric-blue/20"
                : "border-electric-blue/30 bg-void-black/50 hover:border-electric-blue/60 hover:bg-electric-blue/5"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Color Preview */}
            <div className="flex items-center space-x-3 mb-3">
              <div
                className="w-8 h-8 rounded-full border-2 border-electric-blue/50 shadow-lg"
                style={{ backgroundColor: color.hex }}
              />
              <div className="text-left">
                <h4 className="font-orbitron font-semibold text-sm text-electric-blue">
                  {color.name}
                </h4>
                <p className="font-jetbrains text-xs text-moon-dust/60">
                  {color.hex}
                </p>
              </div>
            </div>

            {/* Color Description */}
            <p className="font-inter text-xs text-moon-dust/80 leading-relaxed">
              {color.description}
            </p>

            {/* Availability */}
            <div className="mt-2 flex flex-wrap gap-1">
              {color.availability.map((availability, availIndex) => (
                <span
                  key={availIndex}
                  className="px-2 py-1 bg-comet-gray/20 text-comet-gray text-xs rounded border border-comet-gray/30"
                >
                  {availability}
                </span>
              ))}
            </div>

            {/* Selection Indicator */}
            {selected === color.name && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 right-2 w-6 h-6 bg-electric-blue rounded-full flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-2 h-2 bg-void-black rounded-full"
                />
              </motion.div>
            )}

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-neon-cyan/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
