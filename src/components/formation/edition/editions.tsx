import Im from "../../../assets/Images/black-man-with-tennis-racket-beach.jpg";
import Im2 from "../../../assets/Images/portrait-athletic-male-tennis-player.jpg";
import Im3 from "../../../assets/Images/people-playing-padle-tennis-inside.jpg";
import Edition from "./edition";

const Editions: React.FC = () => {
  const contenu = [
    {
      im: Im,
      titre: "EDITION 2022",
      adres: "https://github.com/",
    },
    {
      im: Im2,
      titre: "EDITION 2023",
      adres: "https://github.com/",
    },
    {
      im: Im3,
      titre: "EDITION 2024",
      adres: "https://github.com/",
    },
  ];

  return (
    <div className="flex justify-center py-6 my-4 bg-gray-100">
      <div className="w-full max-w-[1200px] py-4">
        <div>
          <h1
            className="text-sky-700 text-center my-4 text-4xl font-semibold"
            style={{ fontFamily: "Lexend2" }}
          >
            BEACH TENNIS
          </h1>
          <p>
            {" "}
            LOrem Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam optio voluptate similique? Ipsa quae commodi illo eum
            nesciunt recusandae et odio animi. Maxime deleniti natus labore vero
            ad repudiandae consectetur. Veniam ratione quis ipsum voluptates
            quia. Modi quia ab dolores quam voluptatum itaque accusantium
            voluptatem sit nihil reprehenderit officia ut, impedit, commodi
            dolore consectetur deleniti unde! Nesciunt soluta assumenda maxime.
            Possimus architecto quisquam impedit. Repellendus magnam
            reprehenderit expedita hic quidem voluptatibus quae suscipit eius
            qui nisi eveniet dignissimos vitae velit iure cupiditate omnis
            laborum, rem corporis architecto, explicabo sint ratione? Ducimus,
            sed. Dolorum quae molestias perferendis eum esse corporis ab.
          </p>
          <div className="mt-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contenu.map((item, index) => (
              <Edition
                key={index}
                image={item.im}
                title={item.titre}
                adres={item.adres}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editions;
