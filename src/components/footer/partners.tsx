import Partner from "./partner";
import Im4 from '../../assets/Images/log.png'




const Partners: React.FC=()=>{

    const ConteIm=[
        {
          lienIm : Im4
        },
        {
            lienIm : Im4
        },
        {
            lienIm : Im4
        },
        {
            lienIm : Im4
        }
    ]

    return(
        <>        
            <div className="grid grid-cols-6 overflow-hidden px-4 ">
                {ConteIm.map((item,index)=>(
                    <Partner key={index} lienIm={item.lienIm} />
                ))}
            </div>
        </>



    )
}


export default Partners;