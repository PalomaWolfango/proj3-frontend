import React, { useEffect, useState } from "react";
import axios from "axios";


function TesteReq () {

    const [requirementsDescription, setRequirementsDescription] = useState([]);

    useEffect(()=>{
        const data = "{\"method\": \"RequisitoContract:readRequisito\",\"args\": [\"01\"]}";
        const accessToken = 'ec616c20-891c-11ec-9428-9badf8d817a6-admin';

        fetch('http://localhost:8801/invoke/my-channel1/fabric-contract', {
            method: 'post',
            headers: new Headers ({
                'Authorization' : 'Bearer ' + accessToken,
                'Content-Type': 'text/plain'
            }),
            body: data
        })
        .then(resp => resp.json())
        .then(response => setRequirementsDescription(response.response))
        .catch(err => {
            console.log(err)
        }) 
    });

    return (
        <div>
            <li>{requirementsDescription.description}</li>
        </div>
    )
}

export default TesteReq;