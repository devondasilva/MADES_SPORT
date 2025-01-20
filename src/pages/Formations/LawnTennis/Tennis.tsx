
// import box from "../../../assets/Images/ballsboxAsset 6.png";
import Newsletter from "../../../components/email/newsletter";
import Foot from "../../../components/footer/foot/foot";
import Banner from "../../../components/formation/banner/banner";
import Editions from "../../../components/formation/edition/editions";
import Header from "../../../components/Header/header";

export default function Tennis() {
  return (
    <>
      <Header />
      <Banner 
        title="LAWN TENNIS" 
        imageSrc='https://th.bing.com/th/id/R.c8907dbf3167dbb3a57815849bfac96b?rik=Eq6Jpd4GxbkT6g&pid=ImgRaw&r=0' 
      />
      <Editions />
      <div className="text-center mt-4 mb-5 sm:block hidden">
        <button className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800">
          Voir toutes nos formations
        </button>
      </div>
      <Newsletter />
      <Foot />
    </>
  );
}
