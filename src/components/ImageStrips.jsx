import React from "react";
import "./ImageStrips.scss";

const column1 = ["white.png", "a.jpg", "b.jpg", "c.jpg", "d.jpg"];
const column2 = ["1.jpg", "2.jpg", "3.jpg", "4.jpg","white.png"];

const ImageStrips = () => (
  <div className="image-strips">
    <div className="strip strip1">
      <div className="strip-inner">
        {column1.concat(column1).map((img, i) => (
          <img src={`/images/${img}`} alt="" key={i} draggable={false} />
        ))}
      </div>
    </div>
    <div className="strip strip2">
      <div className="strip-inner">
        {column2.concat(column2).map((img, i) => (
          <img src={`/images/${img}`} alt="" key={i} draggable={false} />
        ))}
      </div>
    </div>
  </div>
);

export default ImageStrips;
