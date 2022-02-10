import React from "react";
import MenuAdmin from "../Menu/menu-admin";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreateUser() {

    const navigate = useNavigate();

    function createUser (e) {
        e.preventDefault();
    
        let request =  {
            nome: document.getElementById('validationDefaultName').value,
            contacto: document.getElementById('validationDefaultContact').value,
            username: document.getElementById('validationDefaultUsername').value,
            password: document.getElementById('validationDefaultPassword').value,
            tipo: document.getElementById('userType').value   
        }
    
        axios.post('http://localhost:4000/api/users', request)
        .then( resp => {
            alert("User successfully added!");
            navigate(-1);
        })
        .catch( err => {
            /* alert("Wrong Credentials!"); */
        })
    }
        
    return(
        <>
        <MenuAdmin />
        <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', textAlign: 'center'}}>Create User</h1>
        <div className="container" style={{ border: '3px solid #00867d', padding: '50px 35px', marginTop: '90px', maxWidth: '500px' }}>
            <form onSubmit={(e) => createUser(e)}>
                <div className="mb-3">
                    <input type="text" id="validationDefaultName" className="form-control"  placeholder="Name"/>
                </div>
                <div className="mb-3">
                    <input type="text" id="validationDefaultContact" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="text" id="validationDefaultUsername" className="form-control" placeholder="Username" />
                </div>
                <div className="mb-3">
                    <input type="password"  id="validationDefaultPassword" className="form-control" placeholder="Password" />
                </div>
                <div>
                    <div style={{float: 'left', marginBottom: '20px'}} >
                        <select name="user-type" id="userType">
                            <option value="tipo0">User Type</option>
                            <option value="admin">Administrator</option>
                            <option value="user">User</option>
                            <option value="gestor">Project Manager</option>
                        </select>
                    </div>
                </div>
                <div style={{textAlign: 'center', marginTop: '120px'}}>
                    <button type="submit" class="btn btn-info" href="#" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 60px'}}>Create</button>
                </div>
            </form> 
        </div></>
    )
}

export default CreateUser;