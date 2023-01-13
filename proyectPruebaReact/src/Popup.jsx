import { useState } from "react";
import './Popup.css'

export const Popup = ({textPopup, ShowPopUp}) =>{
    debugger;
    if(ShowPopUp && hide){
        setHide(false)
    }

    const [hide, setHide] = useState(false);
    const styleContainer = hide ? 'hide-PopUp' : '';

    const hidePopUp = () => {
        setHide(true);
    }
    return(
        <>
        <div className={styleContainer}>
            <div className="container-PopUp">
                <div className="header">
                    <button onClick={hidePopUp}>X</button>
                </div>
                <div className="text-Popup">
                    <p>
                        {textPopup}
                    </p>
                </div>
                <div>
                    <button>Aceptar</button>
                </div>
            </div>
        </div>
        </>
    );
}