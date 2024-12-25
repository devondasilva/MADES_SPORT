


interface Partnerprops{
    lienIm: string;
}



 const Partner:React.FC<Partnerprops>=({lienIm})=>{

return(

        <>

            <div className="mx-4">
                <img src={lienIm} alt="" />
            </div>

        </>

)


 }

 export default Partner;