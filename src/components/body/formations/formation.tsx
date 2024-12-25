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
    <article className="formation-card grid grid-rows-2 border-2 m-2 rounded-lg overflow-hidden">
      <div className="row-span-1">
        <img
          src={im}
          alt={titre || "Image de formation"}
          className="formation-image"
        />
      </div>
      <div className="row-span-1 p-3">
        <h2 className="text-sky-700 text-center font-bold text-lg font-lexend2 mt-2" style={{fontFamily:"Lexend2"}}>
          {titre}
        </h2>
        <p className="text-black text-sm my-3">{content}</p>
        {adres && (
          <a href={adres} className="flex items-center text-sky-700 hover:underline">
            <span>Lire la suite</span>
            <HiArrowRight className="ml-2" />
          </a>
        )}
      </div>
    </article>
  );
};

export default Formation;
