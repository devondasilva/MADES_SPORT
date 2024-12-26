import './formations.css';
import { HiArrowRight } from "react-icons/hi";

interface ElementProps {
  im: string;
  titre: string;
  content: string;
  adres?: string;
}

const Formation: React.FC<ElementProps> = ({ im, titre, content, adres }) => {
  return (
    <article className="formation-card grid grid-rows-2 border-2 m-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="row-span-1">
        <img
          src={im}
          alt={titre || "Image de formation"}
          className="formation-image w-full h-48 sm:h-60 object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="row-span-1 p-4 flex flex-col justify-between">
        <h2
          className="text-sky-700 text-center font-bold text-lg mt-2"
          style={{ fontFamily: "Lexend2" }}
        >
          {titre}
        </h2>
        <p className="text-black text-sm my-3 leading-relaxed">
          {content}
        </p>
        {adres && (
          <a
            href={adres}
            className="flex items-center text-sky-700 hover:underline mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-semibold">Lire la suite</span>
            <HiArrowRight className="ml-2" />
          </a>
        )}
      </div>
    </article>
  );
};

export default Formation;
