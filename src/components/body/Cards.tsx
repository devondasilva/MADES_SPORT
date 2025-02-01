import { useState } from "react";
import Card from "./card";

const Cards: React.FC = () => {
    const [messageShowed, setMessageShowed] = useState<boolean>(false);

    function message(): boolean {
        setMessageShowed(true);
        return true;
    }

    return (
        <>
            <div className="flex justify-center mt-10">
                <div>
                    {messageShowed && (
                        <div>
                            <p> J'aime la life</p>
                        </div>
                    )}
                    <div>
                        <Card cardColor="green" onOkCliqued={message} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;