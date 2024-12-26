import React, { useState } from 'react';
import './reviews.css';

interface ModifProps {
  Nom: string;
  Nationalite: string;
  Texte: string;
  imgn?: string;
  proflink?: string;
}

const Review: React.FC<ModifProps> = ({ Nom, Nationalite, Texte, imgn, proflink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="review-container rounded-lg shadow-lg overflow-hidden my-4 bg-white flex flex-col">
      <div className="review-grid grid grid-cols-1 md:grid-cols-2 gap-4 h-full">

        {/* Image Profil - Flexbox pour occuper toute la hauteur */}
        <div className="profile-image relative rounded-lg overflow-hidden h-full">
          <img 
            src={imgn} 
            alt="Profil" 
            className="image-coach w-full h-full object-cover" 
          />
          <div className="profile-overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <a href={proflink} target="_blank" rel="noopener noreferrer" className="text-white text-sm flex items-center">
              Voir son Profil
            </a>
          </div>
        </div>

        {/* Détails utilisateur */}
        <div className="user-details text-center md:text-left flex flex-col justify-between h-full py-4 px-2">
          <h2 className="font-bold text-md text-gray-800" style={{fontFamily:"Lexend2"}}>{Nom}</h2>
          <h3 className="text-gray-600 mt-2">{Nationalite}</h3>
          
          {/* Texte avec hauteur limitée */}
          <p 
            className={`text-sm text-gray-500 mt-2 ${isExpanded ? 'h-auto' : 'max-h-20 overflow-hidden'}`}
          >
            {Texte}
          </p>

          {/* Bouton pour afficher plus */}
          <button 
            onClick={handleToggle} 
            className=" mt-2 "
          >
            {isExpanded ? "Lire moins" : "Lire la suite "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
