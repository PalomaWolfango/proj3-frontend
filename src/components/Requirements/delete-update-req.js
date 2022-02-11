import React, { useEffect, useState } from "react";
/* import axios from "axios"; */
import MenuUser from "../Menu/menu-user";
import { useParams, useNavigate  } from 'react-router-dom';

function ChangeReq()  {

    let { reqId, projectId } = useParams();

    const [reqDescription, setReqDescription] = useState([]);

    const navigate = useNavigate();


    useEffect(()=>{
        const data = "{\"method\": \"RequisitoContract:readRequisito\",\"args\": [\"" + reqId + "\"]}";
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
        .then(response => setReqDescription(response.response.description))
        .catch(err => {
            console.log(err)
        }) 
    });

    function deleteRequirement (e) {
        e.preventDefault();
        
        const data = "{\"method\": \"RequisitoContract:deleteRequisito\",\"args\": [\"" + reqId + "\"]}";
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
            alert("Requirement successfully deleted!");
            navigate(-1);
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    function updateRequirement (e) {
        e.preventDefault();

        let newDescription = document.getElementById('validationDefaultDescription').value;
        
        const data = "{\"method\": \"RequisitoContract:updateRequisito\",\"args\": [\"" + reqId + "\",\"" + newDescription + "\",\"" +  projectId + "\"]}";
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
            alert("Requirement successfully updated!");
            navigate(-1);
        })
        .catch(err => {
            console.log(err)
        }) 
    }
        
    return(
        <>
        <MenuUser />
        <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', textAlign: 'center'}}>Manage Requirement</h1>
        <div className="container" style={{ border: '3px solid #00867d', padding: '50px 35px', marginTop: '90px', maxWidth: '500px' }}>
            <form >
                <div className="mb-3">
                    <textarea type="text" id="validationDefaultDescription" className="form-control" rows="5" defaultValue={reqDescription}></textarea>
                </div>
                <div style={{textAlign: 'center', marginTop: '80px'}}>
                    <button type="submit" class="btn btn-info" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 60px', float: 'left'}} onClick={updateRequirement}>Update</button>
                </div>
                <div style={{textAlign: 'center', marginTop: '80px'}}>
                    <button type="submit" class="btn btn-danger" style={{color: 'white', padding: '5px 60px', float: 'right'}} onClick={deleteRequirement}>Delete</button>
                </div>
            </form> 
        </div></>
    )
}


export default ChangeReq;