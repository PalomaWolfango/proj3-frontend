import React from "react";
import MenuUser from "../Menu/menu-user";
import imageUser from "../images/home_user.png";
import "../images/images.css";


class HomeUser extends React.Component {
    render() {
        return(
            <><MenuUser />
            <div>
                <div>
                    <img src={imageUser} alt="ImageUser" className="center" style={{marginTop:'180px'}}/>
                    <h2 className="header" style={{marginTop: '50px'}}>Welcome <b style={{color: '#4db6ac'}}>Terrorista</b>!</h2>
                </div>
            </div>
            </>	
        )
    }
}

export default HomeUser;