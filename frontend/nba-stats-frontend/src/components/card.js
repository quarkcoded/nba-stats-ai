// src/components/Card.js
import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-caribbeanCurrent p-6 rounded-lg border-4 border-jungleGreen shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white">{children}</p>
    </div>
  );
};

export default Card;
