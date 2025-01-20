import React, { useState } from "react";
import Im from "../../../assets/Images/black-man-with-tennis-racket-beach.jpg";

interface GalleryItemProps {
  imgSrc: string;
  imgAlt: string;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imgSrc, imgAlt, onClick }) => {
  return (
    <div className="col-span-1">
      <div className="gallery-img group relative overflow-hidden rounded-lg">
        <button onClick={onClick} className="w-full">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover transition-transform duration-800 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#171f32] opacity-0 transition-opacity duration-800 group-hover:opacity-40"></div>
        </button>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const galleryImages = [
    { src: Im, alt: "Gallery Image 1" },
    { src: Im, alt: "Gallery Image 2" },
    { src: Im, alt: "Gallery Image 3" },
    { src: Im, alt: "Gallery Image 4" },
    { src: Im, alt: "Gallery Image 5" },
    { src: Im, alt: "Gallery Image 6" },
    { src: Im, alt: "Gallery Image 7" },
    { src: Im, alt: "Gallery Image 8" },
    { src: Im, alt: "Gallery Image 9" },
  ];

  const openModal = (imgSrc: string) => {
    setCurrentImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="rs-gallery py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Grille responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={index}
              imgSrc={image.src}
              imgAlt={image.alt}
              onClick={() => openModal(image.src)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-[90%] max-h-[90%]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black p-2 rounded-full"
            >
              ✕
            </button>
            <img
              src={currentImage!}
              alt="Selected"
              className="w-full h-auto max-h-[80vh] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
