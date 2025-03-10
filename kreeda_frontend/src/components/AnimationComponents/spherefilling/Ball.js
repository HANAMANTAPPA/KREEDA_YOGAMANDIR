// src/components/Ball.js
import React from 'react';
import './Ball.css';


const Ball = ({ color, size, isAnimating }) => {
  return (
    <div
      className={`ball ${isAnimating ? 'animate' : ''}`}
      style={{ '--s': size, '--c': color }}
    ></div>
  );
};


export default Ball;