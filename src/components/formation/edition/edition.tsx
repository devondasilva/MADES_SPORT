import React from "react";

interface EditionProps {
  image: string;
  title: string;
  adres?: string;
}

const Edition: React.FC<EditionProps> = ({ image, title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="text-center bg-blue-500 py-3">
        <h2 className="font-bold text-white text-xl">{title}</h2>
        <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">
          Voir Plus
        </button>
      </div>
    </div>
  );
};
export default Edition;