import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Mail, Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const teamMembers = [{ name: "MELISANDE CORNET", role: "Creative Director" }];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@2881.com", label: "Email" },
  ];

  return (
    <footer className="bg-gradient-to-t from-void-black via-comet-gray/10 to-transparent border-t border-electric-blue/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-electric-blue" />
              <span className="font-orbitron font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan">
                2881
              </span>
            </div>
            <p className="text-moon-dust/80 font-inter text-sm leading-relaxed">
              Collection retro sci-fi inspirée de l'exploration spatiale.
              Innovation fonctionnelle et esthétique futuriste pour l'avenir.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg border border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-electric-blue" />
              <h3 className="font-orbitron font-semibold text-lg text-electric-blue">
                Équipe Design
              </h3>
            </div>
            <div className="space-y-2">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-electric-blue/30 pl-3"
                >
                  <p className="font-inter font-medium text-sm text-moon-dust">
                    {member.name}
                  </p>
                  <p className="font-inter text-xs text-moon-dust/60">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Collection Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-orbitron font-semibold text-lg text-electric-blue">
              Collection 2881
            </h3>
            <div className="space-y-3 text-sm text-moon-dust/80">
              <p className="font-inter">
                <span className="text-electric-blue font-medium">Thème:</span>{" "}
                Space Odyssey - Retro Sci-Fi Innovation
              </p>
              <p className="font-inter">
                <span className="text-electric-blue font-medium">Année:</span>{" "}
                2024
              </p>
              <p className="font-inter">
                <span className="text-electric-blue font-medium">Classe:</span>{" "}
                2A2
              </p>
              <p className="font-inter">
                <span className="text-electric-blue font-medium">Modèles:</span>{" "}
                HF-23, XD-67, KM-81, QP-39
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-electric-blue/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-moon-dust/60 font-inter text-sm">
              © 2024 Collection 2881. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-moon-dust/60">
              <span className="font-jetbrains text-electric-blue/80">
                STATUS: ONLINE
              </span>
              <span className="font-jetbrains text-uranus-acid/80">
                MISSION: ACTIVE
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-electric-blue rounded-full animate-pulse-neon" />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-cyan rounded-full animate-pulse-neon"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-ultraviolet rounded-full animate-pulse-neon"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
