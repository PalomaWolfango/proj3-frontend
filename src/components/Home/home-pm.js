import React from "react";
import MenuPM from "../Menu/menu-pm";
import imagePM from "../images/home_pm.png";
import "../images/images.css";
import axios from "axios";

class HomePM extends React.Component {

    constructor() {
        super();
    
        this.state = {
            user_info: [],
        };
    }

    componentDidMount = () => {
        try {
          axios.get("http://localhost:4000/api/users/" + this.props.userID).then((response) => {
            this.setState({
                user_info: response.data,
            });
          });
        } catch (error) {
          console.error(error);
        }
      };

    render() {

        const { user_info } = this.state;

        return(
            <><MenuPM />
            <div>
                <div>
                    <img src={imagePM} alt="ImagePM" className="center" style={{marginTop:'180px'}}/>
                    <h2 className="header" style={{marginTop: '80px'}}>Welcome <b style={{color: '#4db6ac'}}>{user_info.nome}</b>!</h2>
                </div>
            </div>
            </>	
        )
    }
}

export default HomePM;