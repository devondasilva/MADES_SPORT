import React from "react";
import Im from "../../assets/Images/tennis/freecompress-IMG_3509 (1).jpg";

interface Props {
    cardColor: string;
    onOkCliqued: ()=> boolean;
}


const Card: React.FC<Props>=(props: Props)=>{

   

    return (
        <>
        <div className="flex justify-center">
            <div>
                <div className="h-50 overflow-hidden">
                    <img src={Im} alt="" className="h-52"/>
                </div>
                <p>My card is {props.cardColor}</p>
                <div className="flex justify-between">
                    <button onClick={props.onOkCliqued}>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>

        </div>
        
        
        
        </>



    )
}

export default Card;