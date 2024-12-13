// SantaAnimation.js
import React from "react";
import "./SantaAnimation.css"; // Importa los estilos

const SantaAnimation = () => {
  return (
    <div className="santa-container">
      <img
        src="https://www.animatedimages.org/data/media/359/animated-santa-claus-image-0420.gif" // Ruta de tu imagen
        alt="Santa Claus"
        className="santa-img"
      />
    </div>
  );
};

export default SantaAnimation;
