import './board.css'
import box from '../../../assets/Images/ballsboxAsset 6.png'

export default function Board(){
    return(
        <>
            <div className="flex justify-center bg-sky-600">
                <div className="w-full max-w-[1200px]">
                    <div className='flex'>  
                        <div className='flex-auto w-6/12 justify-center text-sm text-white m-4 pt-4'>
                            <h1 style={{fontFamily:"Lexend2", fontSize:"35px"}}><strong>La fierté de tout un continent</strong></h1>
                            <p className='mt-4'><strong>MADES</strong> est une organisation dynamique dédiée à la promotion du sport et de l'excellence dans les domaines du tennis, du CrossFit et bien plus encore. Nous accompagnons les entraîneurs dans leur parcours professionnel en proposant des programmes de formation innovants et des outils adaptés aux besoins actuels du marché.
                            Notre mission est de transformer la passion en profession, en négociant des opportunités internationales pour les coachs et en leur offrant des ressources pour réussir. Grâce à une équipe de professionnels engagés, MADES crée des expériences d'apprentissage enrichissantes et impactantes, tout en renforçant la communauté sportive à travers le monde.
                            </p>
                        </div>
                        <div className='flex-1 pt-4' style={{ display:"flex",justifyContent:"end"}}>
                            <img src={box} alt="" style={{height:"250px", width:"auto"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenant flex justify-center">
                <div className="w-full max-w-[1200px]">
                <div className='haut'>
                        <h2 className='m-4' style={{fontSize:"25px"}}><strong>Découvrez désormais nos prochaines formations</strong></h2>
                    </div>

                </div>
                </div>
        {/* <div className='contenant2'>
                    <div className='haut'>
                        <h2><strong>Découvrez désormais nos prochaines formations</strong></h2>
                    </div>
                </div>
                <div  className='cont'>
                    <div className='row' style={{   alignItems: "center", textAlign: "center", margin:"70px" }}>
                        <div className='col' style={{ flex: 1, }}>
                                <span style={{ fontSize: "90px", fontFamily: "Lexend2" }}>50+</span>
                                <br />
                                Pays du Monde
                            </div>
                            <div className='col' style={{ flex: 1 }}>
                                <span style={{ fontSize: "90px", fontFamily: "Lexend2" }}>15+</span>
                                <br />
                                Coach placés
                            </div>
                            <div className='col' style={{ flex: 1 }}>
                                <span style={{ fontSize: "90px", fontFamily: "Lexend2" }}>12+</span>
                                <br />
                                Années d'expériences
                        </div>
                    </div>
                </div> */}

        
    </>
    )
}