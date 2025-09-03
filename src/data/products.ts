import type { Product, Collection, TeamMember } from "../types";

// Données de l'équipe
export const teamMembers: TeamMember[] = [
  {
    name: "MELISANDE CORNET",
    role: "Creative Director",
    description:
      "Visionnaire de l'esthétique retro sci-fi et identité visuelle",
  },
];

// Données des produits de la collection 2881
export const products: Product[] = [
  {
    id: "hf-23",
    name: "HF-23",
    model: "HF-23",
    description:
      "Le HF-23 est le modèle phare de la collection 2881, conçu pour les missions spatiales de longue durée. Son design ergonomique et ses matériaux de pointe en font l'équipement idéal pour l'exploration interstellaire.",
    shortDescription:
      "Sac à dos spatial haute performance pour missions longues",
    category: "backpack",
    materials: [
      {
        name: "Nylon Spatial Renforcé",
        type: "Nylon",
        properties: ["Résistant aux radiations", "Imperméable", "Léger"],
        description:
          "Nylon traité aux particules quantiques pour une résistance maximale",
        durability: 9,
        weight: 150,
      },
      {
        name: "Velcro Magnétique",
        type: "Velcro",
        properties: ["Fermeture magnétique", "Silencieux", "Résistant au vide"],
        description:
          "Système de fermeture révolutionnaire utilisant des champs magnétiques",
        durability: 8,
        weight: 50,
      },
      {
        name: "3M Réfléchissant",
        type: "3M",
        properties: [
          "Visibilité nocturne",
          "Résistant aux UV",
          "Auto-nettoyant",
        ],
        description:
          "Bandes réfléchissantes haute technologie pour la sécurité",
        durability: 10,
        weight: 25,
      },
    ],
    colors: [
      {
        name: "Bleu Électrique",
        hex: "#00BFFF",
        availability: ["Tous modèles"],
        description:
          "Couleur signature de la collection, inspirée des nébuleuses",
        images: ["/images/hf-23-blue-front.jpg", "/images/hf-23-blue-back.jpg"],
      },
      {
        name: "Gris Comète",
        hex: "#708090",
        availability: ["Tous modèles"],
        description: "Gris métallique évoquant la poussière stellaire",
        images: ["/images/hf-23-gray-front.jpg", "/images/hf-23-gray-back.jpg"],
      },
      {
        name: "Orange NASA",
        hex: "#FF4500",
        availability: ["Édition limitée"],
        description: "Orange vif rappelant les combinaisons spatiales",
        images: [
          "/images/hf-23-orange-front.jpg",
          "/images/hf-23-orange-back.jpg",
        ],
      },
    ],
    specifications: [
      {
        category: "Dimensions",
        items: [
          { name: "Longueur", value: "45", unit: "cm" },
          { name: "Largeur", value: "30", unit: "cm" },
          { name: "Hauteur", value: "60", unit: "cm" },
          { name: "Poids", value: "1.2", unit: "kg" },
        ],
      },
      {
        category: "Capacité",
        items: [
          { name: "Volume principal", value: "35", unit: "L" },
          { name: "Poches latérales", value: "2", unit: "unités" },
          { name: "Poche frontale", value: "5", unit: "L" },
        ],
      },
      {
        category: "Technologie",
        items: [
          { name: "Résistance thermique", value: "-40°C à +80°C" },
          { name: "Pression", value: "0.1 à 2 atm" },
          { name: "Radiation", value: "Jusqu'à 1000 rad" },
        ],
      },
    ],
    images: [
      {
        id: "hf-23-1",
        url: "/images/HF-23.webp",
        alt: "HF-23 vue d'ensemble",
        angle: "front",
      },
    ],
    features: [
      "Système de fermeture magnétique",
      "Compartiments étanches",
      "Sangles ergonomiques",
      "Poches de rangement modulaires",
      "Résistance aux radiations",
      "Design rétro-futuriste",
    ],
    dimensions: {
      length: 45,
      width: 30,
      height: 60,
      weight: 1200,
    },
  },
  {
    id: "xd-67",
    name: "XD-67",
    model: "XD-67",
    description:
      "Le XD-67 combine élégance et fonctionnalité dans un design compact. Parfait pour les missions courtes et les déplacements urbains avec style spatial.",
    shortDescription: "Sac compact pour missions courtes et style urbain",
    category: "backpack",
    materials: [
      {
        name: "Tissu Thermique",
        type: "Tissu thermique",
        properties: ["Régulation température", "Respirant", "Antimicrobien"],
        description: "Tissu intelligent qui s'adapte aux conditions thermiques",
        durability: 8,
        weight: 120,
      },
      {
        name: "PVC Transparent",
        type: "PVC",
        properties: ["Transparent", "Flexible", "Résistant aux chocs"],
        description: "PVC haute transparence pour visibilité du contenu",
        durability: 7,
        weight: 80,
      },
    ],
    colors: [
      {
        name: "Ultraviolet",
        hex: "#8A2BE2",
        availability: ["Tous modèles"],
        description: "Violet profond évoquant l'espace profond",
        images: [
          "/images/xd-67-purple-front.jpg",
          "/images/xd-67-purple-back.jpg",
        ],
      },
      {
        name: "Poudre d'Étoile",
        hex: "#FFE4B5",
        availability: ["Tous modèles"],
        description: "Beige nacré rappelant la poussière d'étoiles",
        images: [
          "/images/xd-67-beige-front.jpg",
          "/images/xd-67-beige-back.jpg",
        ],
      },
    ],
    specifications: [
      {
        category: "Dimensions",
        items: [
          { name: "Longueur", value: "35", unit: "cm" },
          { name: "Largeur", value: "25", unit: "cm" },
          { name: "Hauteur", value: "45", unit: "cm" },
          { name: "Poids", value: "0.8", unit: "kg" },
        ],
      },
      {
        category: "Capacité",
        items: [
          { name: "Volume principal", value: "20", unit: "L" },
          { name: "Poches latérales", value: "2", unit: "unités" },
          { name: "Poche transparente", value: "3", unit: "L" },
        ],
      },
    ],
    images: [
      {
        id: "xd-67-1",
        url: "/images/xd-67-hero.jpg",
        alt: "XD-67 vue d'ensemble",
        angle: "front",
      },
    ],
    features: [
      "Design compact et élégant",
      "Tissu thermique intelligent",
      "Poche transparente",
      "Sangles ajustables",
      "Style rétro-futuriste",
      "Parfait pour le quotidien",
    ],
    dimensions: {
      length: 35,
      width: 25,
      height: 45,
      weight: 800,
    },
  },
  {
    id: "km-81",
    name: "KM-81",
    model: "KM-81",
    description:
      "Le KM-81 est l'équipement de pointe pour les missions d'exploration. Avec ses matériaux de carbone et son design aérodynamique, il repousse les limites de la technologie spatiale.",
    shortDescription: "Équipement de pointe pour exploration spatiale",
    category: "equipment",
    materials: [
      {
        name: "Fibre de Carbone",
        type: "Carbone",
        properties: ["Ultra-léger", "Résistant", "Conducteur"],
        description: "Fibre de carbone de grade aérospatial",
        durability: 10,
        weight: 200,
      },
      {
        name: "Aluminium Aérospatial",
        type: "Aluminium",
        properties: [
          "Résistant à la corrosion",
          "Léger",
          "Conducteur thermique",
        ],
        description: "Alliage d'aluminium utilisé dans l'aérospatiale",
        durability: 9,
        weight: 300,
      },
    ],
    colors: [
      {
        name: "Vanta Black",
        hex: "#000000",
        availability: ["Édition limitée"],
        description: "Noir le plus profond, absorbant 99.9% de la lumière",
        images: [
          "/images/km-81-black-front.jpg",
          "/images/km-81-black-back.jpg",
        ],
      },
      {
        name: "Uranus sous Acide",
        hex: "#32CD32",
        availability: ["Tous modèles"],
        description: "Vert néon évoquant les aurores boréales",
        images: [
          "/images/km-81-green-front.jpg",
          "/images/km-81-green-back.jpg",
        ],
      },
    ],
    specifications: [
      {
        category: "Dimensions",
        items: [
          { name: "Longueur", value: "50", unit: "cm" },
          { name: "Largeur", value: "35", unit: "cm" },
          { name: "Hauteur", value: "70", unit: "cm" },
          { name: "Poids", value: "1.5", unit: "kg" },
        ],
      },
      {
        category: "Performance",
        items: [
          { name: "Résistance", value: "500", unit: "kg" },
          { name: "Température", value: "-60°C à +120°C" },
          { name: "Pression", value: "0.01 à 10 atm" },
        ],
      },
    ],
    images: [
      {
        id: "km-81-1",
        url: "/images/KM-81.webp",
        alt: "KM-81 vue d'ensemble",
        angle: "front",
      },
    ],
    features: [
      "Construction en fibre de carbone",
      "Design aérodynamique",
      "Résistance extrême",
      "Technologie de pointe",
      "Édition limitée",
      "Performance maximale",
    ],
    dimensions: {
      length: 50,
      width: 35,
      height: 70,
      weight: 1500,
    },
  },
  {
    id: "qp-39",
    name: "QP-39",
    model: "QP-39",
    description:
      "Le QP-39 allie innovation et durabilité avec ses matériaux recyclés. Un choix responsable pour l'exploration spatiale durable.",
    shortDescription: "Solution durable avec matériaux recyclés",
    category: "backpack",
    materials: [
      {
        name: "PET Recyclé",
        type: "PET recyclé",
        properties: ["100% recyclé", "Durable", "Écologique"],
        description: "Polyester recyclé à partir de bouteilles plastiques",
        durability: 7,
        weight: 100,
      },
      {
        name: "Nylon Recyclé",
        type: "Nylon",
        properties: ["Recyclé", "Résistant", "Écologique"],
        description: "Nylon fabriqué à partir de déchets textiles",
        durability: 8,
        weight: 130,
      },
    ],
    colors: [
      {
        name: "Poussière de Lune",
        hex: "#F5F5DC",
        availability: ["Tous modèles"],
        description: "Beige clair évoquant la surface lunaire",
        images: [
          "/images/qp-39-beige-front.jpg",
          "/images/qp-39-beige-back.jpg",
        ],
      },
      {
        name: "Bleu Électrique",
        hex: "#00BFFF",
        availability: ["Tous modèles"],
        description: "Bleu signature de la collection",
        images: ["/images/qp-39-blue-front.jpg", "/images/qp-39-blue-back.jpg"],
      },
    ],
    specifications: [
      {
        category: "Dimensions",
        items: [
          { name: "Longueur", value: "40", unit: "cm" },
          { name: "Largeur", value: "28", unit: "cm" },
          { name: "Hauteur", value: "55", unit: "cm" },
          { name: "Poids", value: "1.0", unit: "kg" },
        ],
      },
      {
        category: "Durabilité",
        items: [
          { name: "Matériaux recyclés", value: "85", unit: "%" },
          { name: "Empreinte carbone", value: "-60", unit: "%" },
          { name: "Certification", value: "GOTS" },
        ],
      },
    ],
    images: [
      {
        id: "qp-39-1",
        url: "/images/qp-39-hero.jpg",
        alt: "QP-39 vue d'ensemble",
        angle: "front",
      },
    ],
    features: [
      "85% de matériaux recyclés",
      "Certification écologique",
      "Design durable",
      "Performance optimale",
      "Responsabilité environnementale",
      "Style rétro-futuriste",
    ],
    dimensions: {
      length: 40,
      width: 28,
      height: 55,
      weight: 1000,
    },
  },
];

// Collection complète
export const collection2881: Collection = {
  name: "Collection 2881",
  description:
    "Une gamme de produits au design retro sci-fi inspirée de l'exploration spatiale. Innovation fonctionnelle et esthétique futuriste.",
  theme: "Space Odyssey - Retro Sci-Fi Innovation",
  year: 2024,
  products: products,
  team: teamMembers,
};
