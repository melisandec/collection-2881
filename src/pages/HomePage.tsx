import React from "react";
import HeroSection from "../components/sections/HeroSection";
import CollectionPreview from "../components/sections/CollectionPreview";

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <HeroSection />
      <CollectionPreview />
    </div>
  );
};

export default HomePage;
