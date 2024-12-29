
import box from "../../../assets/Images/ballsboxAsset 6.png";
import Newsletter from "../../../components/email/newsletter";
import Foot from "../../../components/footer/foot/foot";
import Banner from "../../../components/formation/banner/banner";
import Editions from "../../../components/formation/edition/editions";
import Header from "../../../components/Header/header";

export default function BeachTennis() {
  return (
    <>
      <Header />
      <Banner 
        title="BEACH TENNIS" 
        imageSrc={box} 
      />
      <Editions />
      <div className="text-center mb-5 mt-4 sm:block hidden">
        <button className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800">
          Voir toutes nos formations
        </button>
      </div>
      <Newsletter />
      <Foot />
    </>
  );
}
