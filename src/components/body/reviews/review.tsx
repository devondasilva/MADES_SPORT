import React from 'react';

interface ModifProps {
  Nom: string;
  imgn?: string;
  proflink?: string;
}

const Review: React.FC<ModifProps> = ({ Nom, imgn}) => {
  return (
    <div className="stat p-4 h-56 ">
      {/* Image Profil */}
      <div className="rounded-2xl overflow-hidden">
        <img 
          src={imgn} 
          alt="Profil" 
          className="w-full h-40 object-cover"  // J'ai ajusté la hauteur à h-64
        />
      </div>

      {/* Nom sous l'image */}
      <div className="py-4 text-center">
        <h2 className="text-sm font-bold text-gray-800">
          {Nom}
        </h2>
      </div>
    </div>
  );
};

export default Review;
