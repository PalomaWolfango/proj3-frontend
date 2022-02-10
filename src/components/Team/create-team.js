import React from "react";
import MenuPM from "../Menu/menu-pm";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreateTeam() {

    const navigate = useNavigate();

    function createTeam(e) {
        e.preventDefault();
    
        let request =  {
            nome: document.getElementById('validationDefaultName').value,
            contacto: document.getElementById('validationDefaultContact').value
        }
    
        axios.post('http://localhost:4000/api/equipas', request)
        .then( resp => {
            alert("Team successfully added!");
            navigate(-1);
        })
        .catch( err => {
            /* alert("Wrong Credentials!"); */
        })
    }

    return(
        <>
        <MenuPM />
        <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', textAlign: 'center'}}>Create Team</h1>
        <div className="container" style={{ border: '3px solid #00867d', padding: '50px 35px', marginTop: '90px', maxWidth: '500px' }}>
            <form onSubmit={(e) => createTeam(e)}>
                <div className="mb-3">
                    <input type="text" id="validationDefaultName" className="form-control"  placeholder="Team Name"/>
                </div>
                <div className="mb-3">
                    <input type="text" id="validationDefaultContact" className="form-control" placeholder="Team Email" />
                </div>
                <div style={{textAlign: 'center', marginTop: '120px'}}>
                    <button type="submit" class="btn btn-info" href="#" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 60px'}}>Create</button>
                </div>
            </form> 
        </div></>
    )
}


export default CreateTeam;