// Types pour la collection 2881

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar?: string;
}

export interface Material {
  name: string;
  type:
    | "Nylon"
    | "Velcro"
    | "3M"
    | "Tissu thermique"
    | "PVC"
    | "PET recyclé"
    | "Aluminium"
    | "Carbone";
  properties: string[];
  description: string;
  durability: number; // 1-10
  weight: number; // en grammes
}

export interface Color {
  name: string;
  hex: string;
  availability: string[];
  description: string;
  images: string[];
}

export interface Specification {
  category: string;
  items: {
    name: string;
    value: string;
    unit?: string;
  }[];
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  color?: string;
  angle: "front" | "back" | "side" | "detail" | "360";
}

export interface Product {
  id: string;
  name: string;
  model: "HF-23" | "XD-67" | "KM-81" | "QP-39";
  description: string;
  shortDescription: string;
  materials: Material[];
  colors: Color[];
  specifications: Specification[];
  images: ProductImage[];
  price?: number;
  category: "backpack" | "accessory" | "equipment";
  features: string[];
  dimensions: {
    length: number;
    width: number;
    height: number;
    weight: number;
  };
}

export interface Collection {
  name: string;
  description: string;
  theme: string;
  year: number;
  products: Product[];
  team: TeamMember[];
}

// Types pour les composants UI
export interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
  className?: string;
}

export interface ColorSelectorProps {
  colors: Color[];
  selected: string;
  onChange: (color: string) => void;
  className?: string;
}

export interface MaterialSpecsProps {
  materials: Material[];
  className?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

// Types pour les animations
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  repeat?: number;
}

// Types pour les filtres
export interface ProductFilters {
  category?: string;
  color?: string;
  material?: string;
  priceRange?: {
    min: number;
    max: number;
  };
}

// Types pour le contexte
export interface AppContextType {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}
