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
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim est consequatur. Qui non culpa illo, minima dignissimos sunt, corrupti omnis quam velit dolor in. Eaque eligendi in consequatur placeat!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim est consequatur. Qui non culpa illo, minima dignissimos sunt, corrupti omnis quam velit dolor in. Eaque eligendi in consequatur placeat!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim est consequatur. Qui non culpa illo, minima dignissimos sunt, corrupti omnis quam velit dolor in. Eaque eligendi in consequatur placeat!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim est consequatur. Qui non culpa illo, minima dignissimos sunt, corrupti omnis quam velit dolor in. Eaque eligendi in consequatur placeat!
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
                        <h2 style={{fontSize:"25px"}}><strong>Découvrez désormais nos prochaines formations</strong></h2>
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