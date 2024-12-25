import Review from "./review";
import './reviews.css'

import Im3 from '../../../assets/Images/profil.jpg';



const Reviews: React.FC=()=>{

    const conte=[
        {
            
            Nom:"Devon DA SILVA",
            Nationalite:"Beninoise",
            Texte: "Désormais basé aux États-Unis, j'accompagne joueurs débutants et confirmés dans leur progression, ",
            imgn: Im3
        },
        {
            Nom:"Bill gates",
            Nationalite:"Beninoise",
            Texte: "Désormais basé aux États-Unis, j'accompagne joueurs débutants et confirmés dans leur progression, ",
            imgn:"https://scontent.fcoo1-1.fna.fbcdn.net/v/t39.30808-6/384399669_279919354923781_5698624011657978969_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFdiT6MqMYkbCFH0KEOmLdM_eZDwRQSOHT95kPBFBI4dNdN2bYMAMTwYbyXSDSapMj9a27847RFHoaXeoc9dcTV&_nc_ohc=Aulqpz2QuFIQ7kNvgGjaQmp&_nc_zt=23&_nc_ht=scontent.fcoo1-1.fna&_nc_gid=A5nmRJmw9kwFpSIiDXdttTh&oh=00_AYCdu_7Aua8MFrB4DVlHmXM9cPxIvZwuFoWrDacq6Ew07g&oe=677222D8"
       
        },
        {
            Nom:"Marcus DIOMAT",
            Nationalite:"Beninoise",
            Texte: "Désormais basé aux États-Unis, j'accompagne joueurs débutants et confirmés dans leur progression, ",
            imgn:"https://scontent.fcoo1-2.fna.fbcdn.net/v/t39.30808-6/427572695_122100831368211228_2548083030529694279_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2aa760P7jqjCGdzmpvSl26KeGbwOTQg7op4ZvA5NCDmAscxS-pNhHzVV8fszY9w53_BYshzz3qHvicBqIULlR&_nc_ohc=GHXHYw9MZZYQ7kNvgHgW9M-&_nc_zt=23&_nc_ht=scontent.fcoo1-2.fna&_nc_gid=AfRb7Aya1wqyrSVcMkO_GH1&oh=00_AYBgxdQL5MyBykb8XEkzO7Mp9BLJw4pGuQBhYNIC-7_WVw&oe=677230DF"
       
        },
        {
            Nom:"Marcus DIOMAT",
            Nationalite:"Beninoise",
            Texte: "Désormais basé aux États-Unis, j'accompagne joueurs débutants et confirmés dans leur progression, "
       
        },
        {
            Nom:"Marcus DIOMAT",
            Nationalite:"Beninoise",
            Texte: "Désormais basé aux États-Unis, j'accompagne joueurs débutants et confirmés dans leur progression, "
       
        },
        {
            Nom:"Marcus DIOMAT",
            Nationalite:"Beninoise",
            Texte: "Désormais basé aux États-Unis, j'accompagne joueurs débutants et confirmés dans leur progression, "
       
        }

    ]
    return(
        <div className="flex justify-center py-4 " style={{backgroundColor:"#F5F6F7"}}>
            <div className="w-full max-w-[1200px]">
                <div>
                    <div className="my-4 text-lg"style={{ fontFamily:"Lexend2", textTransform:"uppercase"}}>
                        <h2>Nos coachs à l'étranger</h2>
                    </div>
                    <div className="ligne mb-3"></div>

                    {/* <Review/> */}
                    <div className="grid grid-cols-3 gap-3" style={{justifyContent:"space-around"}}>
                            {conte.map((item, index) => (
                                <Review key={index} Nom={item.Nom} Nationalite={item.Nationalite} Texte={item.Texte} imgn={item.imgn}/>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;