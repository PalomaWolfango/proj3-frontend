import React from "react";
import MenuAdmin from "../Menu/menu-admin";
import axios from "axios";

class CreateTeam extends React.Component {

    render(){
        
        return(
            <>
            <MenuAdmin />
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
} 


function createTeam(e) {
    e.preventDefault();

    let request =  {
        nome: document.getElementById('validationDefaultName').value,
        contacto: document.getElementById('validationDefaultContact').value
    }

    axios.post('http://localhost:4000/api/equipas', request)
    .then( resp => {
        alert("Team successfully added!");
        window.location.reload(false);
    })
    .catch( err => {
        /* alert("Wrong Credentials!"); */
    })
}


export default CreateTeam;