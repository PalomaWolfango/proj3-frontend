import React from "react";
import MenuAdmin from "../Menu/menu-admin";
import imageAdmin from "../images/home_admin.png";
import "../images/images.css";
import { useParams } from "react-router-dom";


function HomeAdmin() {

    let { name } = useParams();

    return(
        <><MenuAdmin />
        <div>
            <div>
                <img src={imageAdmin} alt="ImageAdmin" className="center" style={{marginTop:'150px'}}/>
                <h2 className="header" style={{marginTop: '20px'}}>Welcome <b style={{color: '#4db6ac'}}>{name}</b>!</h2>
            </div>
        </div>
        </>	
    )
    
}

export default HomeAdmin;