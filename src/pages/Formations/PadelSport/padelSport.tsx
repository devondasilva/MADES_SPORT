import box from "../../../assets/Images/ballsboxAsset 6.png";
import Newsletter from "../../../components/email/newsletter";
import Foot from "../../../components/footer/foot/foot";
import Banner from "../../../components/formation/banner/banner";
import Editions from "../../../components/formation/edition/editions";
import Header from "../../../components/Header/header";

export default function PadelSport() {
  return (
    <>
      <Header />
      <Banner title="PADEL SPORT" imageSrc={box} />
      <Editions />
      <div className="text-center mt-4 marker:mb-5 sm:block hidden">
        <button className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800">
          Voir toutes nos formations
        </button>
      </div>
      <Newsletter />
      <Foot />
    </>
  );
}
