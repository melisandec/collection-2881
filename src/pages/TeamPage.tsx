import React from "react";
import { motion } from "framer-motion";
import { Users, Rocket, Star, Zap } from "lucide-react";
import { teamMembers } from "../data/products";

const TeamPage: React.FC = () => {
  const roles = [
    {
      icon: Rocket,
      title: "Design Lead",
      description: "Direction créative et vision spatiale",
    },
    {
      icon: Zap,
      title: "Innovation Engineer",
      description: "Technologies avancées et matériaux",
    },
    {
      icon: Star,
      title: "Creative Director",
      description: "Identité visuelle et esthétique",
    },
    {
      icon: Users,
      title: "Technical Designer",
      description: "Spécifications et fonctionnalités",
    },
  ];

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
            <Users className="h-6 w-6 text-electric-blue" />
            <span className="font-orbitron font-bold text-electric-blue uppercase tracking-wider">
              Équipe Design
            </span>
            <Users className="h-6 w-6 text-electric-blue" />
          </motion.div>

          <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
              ÉQUIPE 2881
            </span>
          </h1>

          <p className="font-inter text-lg text-moon-dust/80 max-w-3xl mx-auto leading-relaxed">
            Rencontrez l'équipe créative derrière la collection 2881. Des
            designers passionnés qui repoussent les limites de l'innovation
            spatiale.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-void-black/60 to-comet-gray/20 border border-electric-blue/30 rounded-lg"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <role.icon className="h-8 w-8 text-electric-blue" />
              </motion.div>

              <h3 className="font-orbitron font-bold text-lg text-electric-blue mb-2">
                {role.title}
              </h3>

              <p className="font-inter text-sm text-moon-dust/80 leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
              DESIGNERS
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="product-card h-full text-center">
                  {/* Avatar Placeholder */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-12 w-12 text-electric-blue" />
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 rounded-full mx-auto blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Member Info */}
                  <div className="space-y-3">
                    <h3 className="font-orbitron font-bold text-lg text-electric-blue">
                      {member.name}
                    </h3>

                    <div className="px-3 py-1 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 border border-electric-blue/30 rounded-full inline-block">
                      <p className="font-orbitron text-sm text-neon-cyan font-semibold">
                        {member.role}
                      </p>
                    </div>

                    <p className="font-inter text-sm text-moon-dust/80 leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-neon-cyan/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-void-black/60 to-comet-gray/20 border border-electric-blue/30 rounded-lg p-8 max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Rocket className="h-8 w-8 text-electric-blue" />
              <span className="font-orbitron font-bold text-electric-blue text-xl uppercase tracking-wider">
                Notre Mission
              </span>
              <Rocket className="h-8 w-8 text-electric-blue" />
            </motion.div>

            <p className="font-inter text-lg text-moon-dust/90 leading-relaxed mb-6">
              "Nous créons des équipements qui transcendent les limites de
              l'innovation. Chaque produit de la collection 2881 est conçu pour
              repousser les frontières de l'exploration spatiale, alliant
              esthétique rétro-futuriste et performance technique."
            </p>

            <div className="flex items-center justify-center space-x-4 text-sm text-moon-dust/60">
              <span className="font-orbitron">
                <span className="text-electric-blue">CLASSE:</span> 2A2
              </span>
              <span className="font-orbitron">
                <span className="text-electric-blue">THÈME:</span> Space Odyssey
              </span>
              <span className="font-orbitron">
                <span className="text-electric-blue">ANNÉE:</span> 2024
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;
