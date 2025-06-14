import React from "react";
import "./SearchComponent.scss";

const SearchComponent = () => (
  <form className="search-bar">
    <div className="input-group">
      <span className="icon">&#128269;</span> {/* Magnifying glass icon */}
      <input type="text" placeholder="Condition, procedure, speciality..." />
    </div>
    <div className="input-group">
      <span className="icon">&#128205;</span> {/* Location pin icon */}
      <input type="text" placeholder="City, state, or zipcode" />
    </div>
    <div className="input-group">
      <span className="icon">&#128179;</span> {/* Credit card icon */}
      <input type="text" placeholder="Insurance carrier" />
    </div>
    <button type="submit">
      <span className="icon">&#128269;</span> Find now {/* Magnifying glass icon */}
    </button>
  </form>
);

export default SearchComponent;
