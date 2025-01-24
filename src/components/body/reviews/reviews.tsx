import Review from "./review";

const Reviews: React.FC = () => {
  const conte = [
    {
      Nom: "Marc TODJINOU",
      imgn: "https://scontent.fcoo1-1.fna.fbcdn.net/v/t39.30808-6/465554822_1336605314385897_5993397596093347025_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG9-YJKkBfqbA0HEX9Sk2nDVD9z_E1s4zhUP3P8TWzjOOyX6RyGkWmYg6Pk6uADIQ2GEI-Vz5VPYTRnRqbEwSpb&_nc_ohc=MlECV0mjk9EQ7kNvgEBKspW&_nc_zt=23&_nc_ht=scontent.fcoo1-1.fna&_nc_gid=AFlRlmnMqBSfTDFks_XCK4k&oh=00_AYAG9XLslW9NWI08J7zDDvM-XdSctfBaqrH49umnuv4sew&oe=67981D7C",
      proflink: "https://web.facebook.com/marc.robert.7796420",
    },
    {
      Nom: "Renold SAIZONOU",
      imgn: "https://scontent.fcoo1-1.fna.fbcdn.net/v/t39.30808-6/384399669_279919354923781_5698624011657978969_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFdiT6MqMYkbCFH0KEOmLdM_eZDwRQSOHT95kPBFBI4dNdN2bYMAMTwYbyXSDSapMj9a27847RFHoaXeoc9dcTV&_nc_ohc=Dth-hHGRE28Q7kNvgGqMcbJ&_nc_zt=23&_nc_ht=scontent.fcoo1-1.fna&_nc_gid=AfGZuJWhXREyBb6OoPX0peM&oh=00_AYBNGFztRbXo7HlSG6NVxvO5xfN_yBOG42WHxAGd0jwgeA&oe=67982618",
      proflink:"https://web.facebook.com/profile.php?id=100087171542529"
    },
    {
      Nom: "Bonaventure DANHOUAN",
      imgn: "https://scontent.fcoo1-2.fna.fbcdn.net/v/t39.30808-6/427572695_122100831368211228_2548083030529694279_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2aa760P7jqjCGdzmpvSl26KeGbwOTQg7op4ZvA5NCDmAscxS-pNhHzVV8fszY9w53_BYshzz3qHvicBqIULlR&_nc_ohc=gJmi8FXFGbwQ7kNvgFJ-b2Q&_nc_zt=23&_nc_ht=scontent.fcoo1-2.fna&_nc_gid=ACmRvUoyq-dnpdlVfgumdW4&oh=00_AYAIxFbIA5_7XhDvn0iTGHh1YlhX_5urQdjTByG9Acfo-w&oe=6798341F",
      proflink:"https://web.facebook.com/profile.php?id=61556336846023"
       },
    {
      Nom: "Hervé TOGBE",
      imgn: "https://scontent.fcoo1-1.fna.fbcdn.net/v/t39.30808-6/464152290_1327878335258595_1650798853703442931_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFK7ZViIvNI12lOB4Cd4C3zO7TU9gR0NXQ7tNT2BHQ1dOcQ0LUzqn9kYu_u4dSvcoBhsyfAkMQrJINiY1G7DW-E&_nc_ohc=gaVoIyLd2BUQ7kNvgGNEIAj&_nc_zt=23&_nc_ht=scontent.fcoo1-1.fna&_nc_gid=AV3gdMqEm3VjPtmh63aFF9A&oh=00_AYDZdw1lSjOZYJit2noj47lBTzIi381-YBDgCj-10l8Jkg&oe=67981B59",
      proflink:"https://web.facebook.com/herve.togbe.75"
    },
    {
      Nom: "Magloire YAKPA",
      imgn: "https://scontent.fcoo1-1.fna.fbcdn.net/v/t1.6435-9/69911097_2144666782311105_4378255593861808128_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeET22xFSr9LAlckHQtAsjNQhDBRE2jfkBeEMFETaN-QF5YBjJaHWaAjjMT5bPZzvc39TMiWYpVRRv1o3vx4dNSp&_nc_ohc=fzwQ_fRN-jEQ7kNvgG8We4d&_nc_zt=23&_nc_ht=scontent.fcoo1-1.fna&_nc_gid=ARcm4HQfLtKVmnZb3-SIpLN&oh=00_AYCJNK_M9kfS4S3RAOEB52tUE6l3ULDy0HIZMbxE-QNmqg&oe=6794A67F",// Remplacez l'URL avec une image réelle pour Magloire
      proflink:"https://web.facebook.com/photo/?fbid=2144666778977772&set=a.796375957140201"
    },
    {
      Nom: "Emmanuel OKOU",
      imgn: "https://scontent.fcoo1-1.fna.fbcdn.net/v/t39.30808-6/289607313_139433585406524_2872088515594973908_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEMHMIIYhVLj697Vr_MuVdGqGuw3V1Vl6Goa7DdXVWXoSdR68YhqAEnaUkz9S6_8_OzMkg-dyS_oWISshWgQWmH&_nc_ohc=Ti-J6jijsJ0Q7kNvgEHYhoO&_nc_zt=23&_nc_ht=scontent.fcoo1-1.fna&_nc_gid=Ay9xXrgVZmr1aRK7ZFNF7Wd&oh=00_AYCWJeAU4-EF4pkZ6iaBuKGlmoTn-CFeL_UkkHfAL-9u6Q&oe=679824F5",
      proflink:"https://web.facebook.com/profile.php?id=100080196486137"
    },
  ];

  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <div className="w-full max-w-[1200px]">
        <div>
         <p
              className="flex justify-center text-lg text-black my-1 uppercase font-bold"
              style={{
                fontFamily: "Lexend2",
                fontSize: "25px",
                padding: "20px",
              }}
            >
              NOS COACHS À L'ÉTRANGER
            </p>
            <div className="ligne mb-3 text-sm text-center text-gray-600 px-4">
              Chez <strong>MADES</strong>, nous sommes fiers de collaborer avec des coaches talentueux et expérimentés établis aux quatre coins du globe. Grâce à leur expertise et à leur passion, ils apportent un savoir-faire unique et adapté aux besoins locaux, tout en incarnant nos valeurs d'excellence et de professionnalisme.
            </div>

          {/* Grille responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 px-4">
            {conte.map((item, index) => (
              <Review
                key={index}
                Nom={item.Nom}
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
