import './header.css';
import Log from '../../assets/Images/logAsset 1.png';

const Header: React.FC = () => {
  return (
    <div className="bg-gray-200 flex justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="flex items-center justify-center px-6 py-3">
          <div className="flex-shrink-0">
            <img src={Log} alt="Logo" className="h-10" />
          </div>
          <div className="ml-auto flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-sm font-semibold">HOME</a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold">ABOUT US</a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold">OUR SERVICES</a>
              </li>
            </ul>
            <button type="button" className="transition duration-300">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
