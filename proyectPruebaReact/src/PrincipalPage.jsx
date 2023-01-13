import {PasosReceta} from './PasosReceta'
import { Popup } from './Popup'
import React, { useState } from 'react'

export const PrincipalPage = () => {
    
    const [showPopUp, setshowPopUp] = useState(false);
    const LoadPopUp = () =>{
    setshowPopUp(!showPopUp);
    }


    return(
        <>
            {showPopUp ? 
            <Popup textPopup={'asdasdasdasdas Pruebas Popup asdasdasdasd asdasdasdasdasdasd asdasdasd'}
                showPopUp={showPopUp}
            ></Popup> : ''
            }
            <div className='containerPrincipal'>
            <PasosReceta></PasosReceta>
            </div>
            <button onClick={LoadPopUp}>MostrarPopUp</button>
        </>
    )
}