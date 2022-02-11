import React from "react";
/* import axios from "axios"; */
import MenuUser from "../Menu/menu-user";
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuid } from "uuid";

function CreateReq() {

    let { projectId } = useParams();
    const navigate = useNavigate();
    
    function createRequirement (e) {
        e.preventDefault();

        let description = document.getElementById('validationDefaultDescription').value;
        
        const data = "{\"method\": \"RequisitoContract:createRequisito\",\"args\": [\"" + uuid() + "\",\"" + description + "\",\"" +  projectId + "\"]}";
        const accessToken = '631750d0-8b36-11ec-95bf-653d80bf87f9-admin';
    
        fetch('http://localhost:8801/invoke/my-channel1/fabric-contract', {
            method: 'post',
            headers: new Headers ({
                'Authorization' : 'Bearer ' + accessToken,
                'Content-Type': 'text/plain'
            }),
            body: data
        })
        .then(resp => resp.json())
        .then(response => {
            alert("Requirement successfully added!");
            navigate(-1);
        })
        .catch(err => {
            console.log(err)
        }) 
    } 
        
    return(
        <>
        <MenuUser />
        <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', textAlign: 'center'}}>Create Requirement</h1>
        <div className="container" style={{ border: '3px solid #00867d', padding: '15px 35px', marginTop: '90px', maxWidth: '500px' }}>
            <form onSubmit={(e) => createRequirement(e)} >
                <div className="mb-3" style={{marginTop: '30px'}}>
                    <textarea type="text" id="validationDefaultDescription" className="form-control" placeholder="Requirement Description" rows="5"/>
                </div>
                <div style={{textAlign: 'center', marginTop: '80px'}}>
                    <button type="submit" class="btn btn-info" href="#" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 60px'}}>Create</button>
                </div>
            </form> 
        </div></>
    )
} 


export default CreateReq;