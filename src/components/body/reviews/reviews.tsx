import Review from "./review";
import './reviews.css'



const Reviews: React.FC=()=>{

    const conte=[
        {
            
            Nom:"Devon DA SILVA",
            Nationalite:"Beninoise",
            Texte: "Désormais basé aux États-Unis, j'accompagne joueurs débutants et confirmés dans leur progression, "
        },
        {
            Nom:"Bill gates",
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
                                <Review key={index} Nom={item.Nom} Nationalite={item.Nationalite} Texte={item.Texte} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;