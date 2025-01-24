import { HiArrowRight } from "react-icons/hi";

interface ElementProps {
  im: string;
  titre: string;
  content: string;
  adres?: string;
}

const Formation: React.FC<ElementProps> = ({ im, titre, content, adres }) => {
  return (
    <article className="formation-card shadow-lg rounded-lg overflow-hidden bg-white transition-transform transform hover:scale-105">
      {/* Image */}
      <div className="formation-image-container">
        <img
          src={im}
          alt={titre || "Image de formation"}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between space-y-4">
        <h2 className="text-lg font-bold text-gray-800">{titre}</h2>
        <p className="text-sm text-gray-600">{content}</p>
        {adres && (
          <a
            href={adres}
            className="flex items-center text-sky-600 hover:text-blue-800 transition"
          >
            <span>Lire la suite</span>
            <HiArrowRight className="ml-2 text-lg" />
          </a>
        )}
      </div>
    </article>
  );
};

export default Formation;
