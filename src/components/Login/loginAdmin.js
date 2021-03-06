import React from "react";
import imageLogin from "../images/login.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

class LoginAdmin extends React.Component {
    

    render(){
    
        return(
            <>
            <div className="container" style={{ border: '3px solid #00867d', padding: '50px 35px', maxWidth: '500px', marginTop: '7%'}}>
                <div>
                    <img src={imageLogin} alt="ImageLogin" className="center" style={{marginBottom: '40px', width: '25%'}}/>
                </div>
                <form onSubmit={(e) => login(e)}>
                    <div class="mb-3">
                        <label for="validationDefaultUsername" class="form-label">Username</label>
                        <input type="username" class="form-control" id="validationDefaultUsername" aria-describedby="usernameHelp" />
                        <div id="usernameHelp" class="form-text">We'll never share your username with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div style={{textAlign: 'center', marginTop: '60px'}}>
                    
                    <button id="button-login" type="submit" class="btn btn-info" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 60px'}}>Login</button>
                    
                    </div>
                </form>
            </div></>
        )
    }
} 

function login (e) {
    e.preventDefault();
    
    
    let request =  {
        username: document.getElementById('validationDefaultUsername').value,
        password: document.getElementById('exampleInputPassword1').value   
    }
    axios.post('http://localhost:4000/api/users/login', request)
    .then( resp => {
        const userId = resp.data.id_user;
        const userName = resp.data.name;
        
        if (resp.data.user === 'gestor') {
            window.location = "/home-pm/" + userId + "/" + userName;
        } else {
            if (resp.data.user === 'admin') {
                window.location = "/home-admin/" + userId + "/" + userName;
            } else {
                if (resp.data.user === 'user') {
                    window.location = "/home-user/" + userId + "/" + userName;
                }else {
                    alert(resp.data.message);
                }
            } 
        }
    })
    .catch( err => {
        /* alert("Wrong Credentials!"); */
    })
}



export default LoginAdmin;