
import Formation from "./formation";
import Im from '../../../assets/Images/black-man-with-tennis-racket-beach.jpg'

import Im2 from '../../../assets/Images/portrait-athletic-male-tennis-player.jpg'
import Im3 from '../../../assets/Images/people-playing-padle-tennis-inside.jpg'












const Formations: React.FC = ()=> {
    const contenu=[
        {
            im: Im,
            titre:"BEACH TENNIS",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, placeat, repellat quaerat quia minus ipsam recusandae earum dolores blanditiis voluptas magnam unde. Cumque cum distinctio pariatur architecto facere? Illum, quis!",
            adres: "https://github.com/"
        },
        {
            im: Im2,
            titre:"LAWN TENNIS",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, placeat, repellat quaerat quia minus ipsam recusandae earum dolores blanditiis voluptas magnam unde. Cumque cum distinctio pariatur architecto facere? Illum, quis!",
            adres: "https://github.com/"
        },
        {
            im: Im3,
            titre:"PADEL SPORT",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, placeat, repellat quaerat quia minus ipsam recusandae earum dolores blanditiis voluptas magnam unde. Cumque cum distinctio pariatur architecto facere? Illum, quis!",
            adres: "https://github.com/"
        },
        
    ]

    return(
        <div className="flex justify-center py-4 " style={{backgroundColor:"#F5F6F7"}}>
            <div className="w-full max-w-[1200px]">
            <div>
                <h1 className="text-sky-700" style={{display:"flex", justifyContent:"center", margin:"20px", fontFamily:"Lexend2", fontSize:"35px"}}>NOS FORMATIONS</h1>
                <div className='grid grid-flow-col gap-2' style={{color:"black", borderRadius:"8px"}}>
                         {contenu.map((item, index) => (
                            <Formation key={index} im={item.im} titre={item.titre} content={item.content} adres={item.adres} />
                        ))}
            </div>
                      
                
               
            </div>
                {/* <div>
                    <div className="cont" style={{ justifyContent:"center", width:"1500px", marginTop:"50px", textAlign:"center" }}>
                            <img src={Im1} alt="" style={{}}/>
                            <h1 style={{marginTop:"50px", fontFamily:"Lexend2"}}>Achille TAKPA</h1>
                            <p style={{fontSize:"30px"}}>Un message pour tous les adhérents de MADES/BUS</p>
                    </div>
                <div>
                    
            </div>
        </div> */}
    </div>
    </div>
    )
}

export default Formations;