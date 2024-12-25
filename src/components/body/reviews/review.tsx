import { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import './reviews.css';

// Interface pour la structure des props
interface ModifProps {
  Nom: string;
  Nationalite: string;
  Texte: string;
  imgn?: string;
}

const Review: React.FC<ModifProps> = ({ Nom, Nationalite, Texte, imgn }) => {
  // Etat local pour gérer la valeur de la note (entre 0 et 5)
  const [rating, setRating] = useState<number>(0);

  // Fonction pour gérer le changement de note
  const handleRating = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="review-container rounded-lg shadow-lg overflow-hidden my-4 bg-white">
      <div className="review-grid grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image Profil */}
        <div className="profile-image relative rounded-lg overflow-hidden">
          <img src={imgn} alt="Profil" className="image-coach w-full object-cover" />
          <div className="profile-overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white text-sm flex items-center">
              <IoPerson className="inline mr-2" />
              Voir son Profil
            </a>
          </div>
        </div>

        {/* Détails utilisateur */}
        <div className="user-details text-center md:text-left flex flex-col justify-center">
          <h2 className="font-bold text-xl text-gray-800" style={{fontFamily:"Lexend2"}}>{Nom}</h2>
          <h3 className=" text-gray-600 mt-2">{Nationalite}</h3>
          <p className="text-sm text-gray-500 mt-2">{Texte}</p>

          {/* Section d'étoiles pour la notation */}
          <div className="rating-container flex justify-center mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star text-2xl cursor-pointer transition-all duration-200
                  ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                onClick={() => handleRating(star)}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FFD700'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = star <= rating ? '#FFD700' : '#e4e5e9'}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
