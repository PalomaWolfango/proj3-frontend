import React from "react";
import MenuPM from "../Menu/menu-pm";
import imagePM from "../images/home_pm.png";
import "../images/images.css";
import { useParams } from 'react-router-dom';


function HomePM() {
    
    let { name } = useParams();

    return(
        <><MenuPM />
        <div>
            <div>
                <img src={imagePM} alt="ImagePM" className="center" style={{marginTop:'180px'}}/>
                <h2 className="header" style={{marginTop: '80px'}}>Welcome <b style={{color: '#4db6ac'}}>{ name }</b>!</h2>
            </div>
        </div>
        </>	
    )
}

export default HomePM;