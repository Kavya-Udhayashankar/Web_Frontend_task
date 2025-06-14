import React, { useState } from "react";
import "./HowItWorks.scss";

const tabs = [
  "Nutrition",
  "Physical activity",
  "Restorative sleep",
  "Stress management",
  "Social connection",
  "Substance abuse",
];

const pillars = [
  {
    title: "Nutrition",
    img: "/images/pillar-nutrition.jpg",
    badge: { icon: "❤️", text: "121/80 mmHg" },
    desc: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness."
  },
  {
    title: "Physical activity",
    img: "/images/pillar-activity.jpg",
    badge: { icon: "🧡", text: "32 minutes" },
    desc: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease."
  },
  {
    title: "Restorative sleep",
    img: "/images/pillar-sleep.jpg",
    badge: { icon: "💚", text: "8 hours" },
    desc: "Consistent, quality sleep is essential for cognitive function and physical health."
  },
  {
    title: "Stress management",
    img: "/images/pillar-stress.jpg",
    badge: { icon: "💙", text: "60 bpm" },
    desc: "Effective stress management techniques are crucial for mental well-being and overall health."
  },
  {
    title: "Social connection",
    img: "/images/pillar-social.jpg",
    badge: { icon: "🧡", text: "Feeling better" },
    desc: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health."
  },
  {
    title: "Substance abuse",
    img: "/images/pillar-substance.jpg",
    badge: { icon: "💚", text: "62 days" },
    desc: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health."
  }
];

const CARD_WIDTH = 350; // px
const CARD_GAP = 32; // px
const VISIBLE_CARDS = 3;

const HowItWorks = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);

  const maxIdx = pillars.length - VISIBLE_CARDS + 1;

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIdx((prev) => Math.min(prev + 1, maxIdx - 1));
  };

  const handleTabClick = (idx) => {
    setSelectedTab(idx);

    // Scroll the selected card into view if it's outside the visible range
    if (idx < startIdx) {
      setStartIdx(idx);
    } else if (idx >= startIdx + VISIBLE_CARDS) {
      setStartIdx(Math.min(idx - VISIBLE_CARDS + 1, maxIdx - 1));
    }
  };

  const translateX = -(startIdx * (CARD_WIDTH + CARD_GAP));

  return (
    <section className="how-it-works">
      <div className="how-header-row">
        <div>
          <div className="how-title">HOW IT WORKS</div>
          <h2>
            <span className="highlight">Lifestyle as medicine:</span> The six pillars
          </h2>
        </div>
        <div className="how-arrows">
          <button className="arrow-btn" onClick={handlePrev} disabled={startIdx === 0} aria-label="Scroll left">
            <span className="arrow">&larr;</span>
          </button>
          <button className="arrow-btn" onClick={handleNext} disabled={startIdx >= maxIdx - 1} aria-label="Scroll right">
            <span className="arrow">&rarr;</span>
          </button>
        </div>
      </div>

      <div className="how-tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`how-tab${idx === selectedTab ? " selected" : ""}`}
            onClick={() => handleTabClick(idx)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="pillars-viewport">
        <div
          className="pillars-carousel"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.5s cubic-bezier(.77,0,.18,1)"
          }}
        >
          {pillars.map((pillar, i) => (
            <div className={`pillar-card${i === selectedTab ? " highlighted" : ""}`} key={i}>
              <img src={pillar.img} alt={pillar.title} />
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
