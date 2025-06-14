import React from "react";
import "./HeroSection.scss";
import SearchComponent from "./SearchComponent";
import ImageStrips from "./ImageStrips";

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>
        Book an appointment with <span className="highlight">lifestyle medicine</span> experts
      </h1>
      <p className="subtitle">
        Optimize your lifestyle and reverse chronic diseases.
      </p>
    </div>
    <div className="search-container">
      <SearchComponent />
    </div>
  </section>
);

export default HeroSection;
