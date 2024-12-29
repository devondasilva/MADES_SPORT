import Review from "./review";
import "./reviews.css";

const Reviews: React.FC = () => {
  const conte = [
    {
      Nom: "Marc TODJINOU",
      Nationalite: "Beninoise",
      Texte: "Je suis désormais basé en Tunisie, où j'accompagne des joueurs débutants et confirmés dans leur progression. Mon objectif est de leur offrir les outils nécessaires pour réussir, que ce soit pour des compétitions locales ou internationales.",
      imgn: "https://scontent.fcoo1-1.fna.fbcdn.net/v/t39.30808-6/465554822_1336605314385897_5993397596093347025_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG9-YJKkBfqbA0HEX9Sk2nDVD9z_E1s4zhUP3P8TWzjOOyX6RyGkWmYg6Pk6uADIQ2GEI-Vz5VPYTRnRqbEwSpb&_nc_ohc=5tKtoAdzoUYQ7kNvgEZZDk_&_nc_zt=23&_nc_ht=scontent.fcoo1-1.fna&_nc_gid=AJHKk5NpkgEdaOgknfthpa4&oh=00_AYBLa-I1OIXmv-pYxjkJVytCdG8a0Xc-PayINGmX_2Ex4Q&oe=6772FB3C",
      proflink: "https://web.facebook.com/marc.robert.7796420",
    },
    {
      Nom: "Renold SAIZONOU",
      Nationalite: "Beninoise",
      Texte: "En Tunisie, je forme des joueurs passionnés, qu'ils soient débutants ou plus expérimentés. Mon approche est centrée sur la technique et la stratégie de jeu, avec une attention particulière à la préparation mentale des athlètes.",
      imgn: "https://scontent.fcoo1-1.fna.fbcdn.net/v/t39.30808-6/384399669_279919354923781_5698624011657978969_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFdiT6MqMYkbCFH0KEOmLdM_eZDwRQSOHT95kPBFBI4dNdN2bYMAMTwYbyXSDSapMj9a27847RFHoaXeoc9dcTV&_nc_ohc=Aulqpz2QuFIQ7kNvgGjaQmp&_nc_zt=23&_nc_ht=scontent.fcoo1-1.fna&_nc_gid=A5nmRJmw9kwFpSIiDXdttTh&oh=00_AYCdu_7Aua8MFrB4DVlHmXM9cPxIvZwuFoWrDacq6Ew07g&oe=677222D8",
      proflink:"https://web.facebook.com/profile.php?id=100087171542529"
    },
    {
      Nom: "Bonaventure DANHOUAN",
      Nationalite: "Beninoise",
      Texte: "Je travaille actuellement en Tunisie, où je partage mes connaissances et mon expérience avec des joueurs souhaitant progresser à tous les niveaux. Mon approche est de rendre chaque joueur unique dans son jeu tout en renforçant sa confiance en lui.",
      imgn: "https://scontent.fcoo1-2.fna.fbcdn.net/v/t39.30808-6/427572695_122100831368211228_2548083030529694279_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2aa760P7jqjCGdzmpvSl26KeGbwOTQg7op4ZvA5NCDmAscxS-pNhHzVV8fszY9w53_BYshzz3qHvicBqIULlR&_nc_ohc=GHXHYw9MZZYQ7kNvgHgW9M-&_nc_zt=23&_nc_ht=scontent.fcoo1-2.fna&_nc_gid=AfRb7Aya1wqyrSVcMkO_GH1&oh=00_AYBgxdQL5MyBykb8XEkzO7Mp9BLJw4pGuQBhYNIC-7_WVw&oe=677230DF",
      proflink:"https://web.facebook.com/profile.php?id=61556336846023"
    },
    {
      Nom: "Hervé TOGBE",
      Nationalite: "Beninoise",
      Texte: "Mon expérience en Tunisie m'a permis de travailler avec une grande variété de joueurs. Je me concentre sur l'adaptation des techniques aux besoins spécifiques de chaque individu, et je cherche constamment à tirer le meilleur de chacun.",
      imgn: "https://scontent.fcoo1-2.fna.fbcdn.net/v/t39.30808-6/443716267_2098085550548562_6522925727280137677_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH4_ZgmcR7lMhtC3jhFXO4QWerdaRhAXIFZ6t1pGEBcgcRL_6GGjl0lDKx7RpXoKnRa4Ith-Sl4uHN58sXwUtF-&_nc_ohc=a79OqDc3iF0Q7kNvgE6kk0v&_nc_zt=23&_nc_ht=scontent.fcoo1-2.fna&_nc_gid=AOdDycNYU8dEeFp5UHI4uIi&oh=00_AYB1HzJz8X-HhReuTeQYndjz5EEIBBZSRYJJ-dfbHsekGw&oe=67731B6A", // Remplacez l'URL avec une image réelle pour Marc
      proflink:"https://web.facebook.com/herve.togbe.75"
    },
    {
      Nom: "Magloire YAKPA",
      Nationalite: "Beninoise",
      Texte: "Je suis maintenant basé en Tunisie et j'accompagne les joueurs pour améliorer leur jeu technique et tactique. Mon objectif est de faire évoluer chaque athlète avec des séances adaptées à ses capacités et ses ambitions.",
      imgn: "https://scontent.fcoo1-1.fna.fbcdn.net/v/t1.6435-9/69911097_2144666782311105_4378255593861808128_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeET22xFSr9LAlckHQtAsjNQhDBRE2jfkBeEMFETaN-QF5YBjJaHWaAjjMT5bPZzvc39TMiWYpVRRv1o3vx4dNSp&_nc_ohc=fzwQ_fRN-jEQ7kNvgG8We4d&_nc_zt=23&_nc_ht=scontent.fcoo1-1.fna&_nc_gid=ARcm4HQfLtKVmnZb3-SIpLN&oh=00_AYCJNK_M9kfS4S3RAOEB52tUE6l3ULDy0HIZMbxE-QNmqg&oe=6794A67F",// Remplacez l'URL avec une image réelle pour Magloire
      proflink:"https://web.facebook.com/photo/?fbid=2144666778977772&set=a.796375957140201"
    },
    {
      Nom: "Emmanuel OKOU",
      Nationalite: "Beninoise",
      Texte: "En Tunisie, je me concentre sur la progression des joueurs en améliorant leur condition physique, leur agilité, et leur mentalité sur le terrain. Mon but est de les préparer à relever de nouveaux défis dans leur carrière sportive.",
      imgn: "https://scontent.fcoo1-1.fna.fbcdn.net/v/t39.30808-6/461089179_550243090992236_7579230373325571281_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGewRjLfgmPp54_om6aKtJ0NBVmH71GTrs0FWYfvUZOuy202E-tPIXC5PZ7WKSC7h5GtRu25qc4ycxnaZr7apXZ&_nc_ohc=6HdfDqeLR00Q7kNvgFryJqI&_nc_zt=23&_nc_ht=scontent.fcoo1-1.fna&_nc_gid=Ap8pbQAoYSBHy72h0Q66_S1&oh=00_AYAKnzCWWLytRZlqchBXV5kIrWqu37xmDksVxvnUKmzQdg&oe=6773184D", // Remplacez l'URL avec une image réelle pour Modeste
      proflink:"https://web.facebook.com/profile.php?id=100080196486137"
    },
  ];

  return (
    <div className="flex justify-center py-6 mt-6 bg-gray-100">
      <div className="w-full max-w-[1200px]">
        <div>
          <p
            className="flex justify-center text-lg text-sky-700 my-4 uppercase font-bold"
            style={{
              fontFamily: "Lexend2",
              fontSize: "35px",
              padding: "20px",
            }}
          >
            NOS COACHS A L'étranger
          </p>
          <div className="ligne mb-3"></div>

          {/* Grille responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {conte.map((item, index) => (
              <Review
                key={index}
                Nom={item.Nom}
                Nationalite={item.Nationalite}
                Texte={item.Texte}
                imgn={item.imgn}
                proflink={item.proflink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
