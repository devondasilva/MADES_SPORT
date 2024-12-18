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
    <>
      <div>
        <a href={adres || '#'} className='h-80 grid grid-rows-2 border-2 m-2 rounded-lg overflow-hidden'>
          <div className='h-65 overflow-hidden'>
            <img src={im} alt={titre || 'Image'} style={{ width: "100%" }} />
          </div>
          <div className='h-15'>
            <h2
              className="text-sky-700"
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                fontFamily: "Lexend2",
                fontSize: "20px"
              }}
            >
              {titre}
            </h2>
            <p className='text-black text-sm'>{content}</p>
            {adres && (
              <a href={adres} className='flex items-center text-sky-700'>
                <div>
                  <p>Lire la suite</p>
                </div>
                <div>
                  <HiArrowRight />
                </div>
              </a>
            )}
          </div>
        </a>
      </div>
    </>
  );
}

export default Formation;
