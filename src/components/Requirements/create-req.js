import React from "react";
/* import axios from "axios"; */
import MenuUser from "../Menu/menu-user";

class CreateReq extends React.Component {

    render(){
        
        return(
            <>
            <MenuUser />
            <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', textAlign: 'center'}}>Create Requirement</h1>
            <div className="container" style={{ border: '3px solid #00867d', padding: '15px 35px', marginTop: '90px', maxWidth: '500px' }}>
                <form /* onSubmit={(e) => createUser(e)} */>
                    <div className="mb-3" style={{marginTop: '30px'}}>
                        <input type="text" id="validationDefaultName" className="form-control"  placeholder="Name"/>
                    </div>
                    <div className="mb-3">
                        <textarea type="text" id="validationDefaultDescription" className="form-control" placeholder="Requirement Description" rows="5" />
                    </div>
                    <div style={{textAlign: 'center', marginTop: '80px'}}>
                        <button type="submit" class="btn btn-info" href="#" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 60px'}}>Create</button>
                    </div>
                </form> 
            </div></>
        )
    }
} 


// function createUser (e) {
//     e.preventDefault();

//     let request =  {
//         nome: document.getElementById('validationDefaultName').value,
//         contacto: document.getElementById('validationDefaultContact').value,
//         username: document.getElementById('validationDefaultUsername').value,
//         password: document.getElementById('validationDefaultPassword').value,
//         tipo: document.getElementById('userType').value   
//     }

//     axios.post('http://localhost:4000/api/users', request)
//     .then( resp => {
//         alert("User successfully added!");
//         window.location.reload(false);
//     })
//     .catch( err => {
//         /* alert("Wrong Credentials!"); */
//     })
// } 



export default CreateReq;