import './header.css';
import Log from '../../assets/Images/logomades.png';




// interface menuprops{
//  titre: string,
//  lien: string
// }

const Header: React.FC = () => {


  // const menu=[
  //   {titre: "HOME",
  //     lien: "https://google.com"
  //   },
  //   {titre:"ABOUT US",
  //     lien: "https://google.com"
  //   },
  //   {titre: "OUR SERVICES",
  //     lien: "https://google.com"
  //   }
  // ]


  return (
    <div className="bg-gray-200 flex justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="flex items-center justify-center px-6 py-3">
          <div className="flex-shrink-0">
            <img src={Log} alt="Logo" className="h-10" />
          </div>
          <div className="ml-auto flex items-center space-x-8">
            <ul className="flex space-x-8" >
              <li>
                <a href="#" className="text-sm font-semibold" id='navhaut'>HOME</a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold" id='navhaut'>ABOUT US</a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold" id='navhaut'>OUR SERVICES</a>
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
