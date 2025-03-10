import React from 'react';
import '../stylesheets/FeatureCard.css'; // CSS for styling the card

const FeatureCard = ({ image, title, description, button, isLarge, splitText, imageHeight }) => {
  return (
    <div className={`feature-card ${isLarge ? 'large' : ''}`}>
      {splitText ? (
        <>
          <p className="feature-title">{title}</p>
          <img src={image} alt={title} className="feature-image" style={{ height: imageHeight }} />
          {description && <p className="feature-description">{description}</p>}
        </>
      ) : (
        <>
          <img src={image} alt={title} className="feature-image" style={{ height: imageHeight }} />
          <p className="feature-title">{title}</p>
          {description && <p className="feature-description">{description}</p>}
        </>
      )}
      {button && <button className="join-button">{button}</button>}
    </div>
  );
};

export default FeatureCard;
