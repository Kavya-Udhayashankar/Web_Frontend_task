import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImageStrips from "./components/ImageStrips";
import HowItWorks from "./components/HowItWorks";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="hero-layout">
        <ImageStrips />
        <HeroSection />
      </div>
      <div className="gradient-wrapper">
        <div className="gradient-slant"></div>
      </div>
      <HowItWorks />
    </div>
  );
}

export default App;
