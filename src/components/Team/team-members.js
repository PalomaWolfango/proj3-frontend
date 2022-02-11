import React, { useEffect, useState } from "react";
import MenuPM from "../Menu/menu-pm";
import axios from "axios";
import { useParams } from 'react-router-dom';
import './team.css'; 


function TeamMembers() {

    let { idEquipa } = useParams();

    const [members, setMembers] = useState([]);
    const [teamName, setTeamName] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/roles/buscarMembrosEquipa/` + idEquipa)
        .then(resp => {
            console.log(resp)
            setMembers(resp.data)
        })
        .catch(err => {
            console.log(err)
        });

        axios.get(`http://localhost:4000/api/equipas/` + idEquipa)
        .then(resp => {
            console.log(resp)
            setTeamName(resp.data)
        })
        .catch(err => {
            console.log(err)
        });
    });

  

    function addMemberToTeam (e) {
        e.preventDefault();
    
        let request =  { 
            descricao: document.getElementById('validationDefaulDescription').value,
            idUtilizador: document.getElementById('memberName').value,
            idEquipa: idEquipa
        } 
    
        axios.post('http://localhost:4000/api/roles', request)
        .then( resp => {
            alert("Member successfully added!");
            window.location.reload();
        })
        .catch( err => {
            console.log(err);
            /* alert("Wrong Credentials!"); */
        })
    }

    GetUsers();
       
    return(
        <div style={{marginBottom: '50px'}}>
            <><MenuPM />
            <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', marginBottom: '25px', marginLeft: '80px'}}>{teamName.nome}</h1>
            
            <div style={{float: 'left', width: '15%', marginTop: '50px'}}>
                <div style={{float: 'left', width: 'auto', marginLeft: '80px'}} >
                    <form onSubmit={(e) => addMemberToTeam(e)}>
                        <select name="member-name" id="memberName">
                            <option value="tipo0">Members</option>
                        </select>
                        <input type="text" id="validationDefaulDescription" className="form-control"  placeholder="Description" style={{marginTop: '15px'}}/>
                        <button type="submit" class="btn btn-info" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 58px', marginTop: '30px'}}>Add </button>
                    </form>
                </div>
            </div>    
            <div style={{float: 'right', width: '80%', marginTop: '40px'}}>
                <div className="div-team" style={{width: '1050px', justifyContent: 'center', display: 'flex'}}>
                    <div>
                        <h3><b>TEAM MEMBERS</b></h3>
                        <div className="team-text">
                            {members.map(member => (
                                <li key={member._id}>{member.nome}</li>
                            ))}
                        </div>
                    </div> 
                </div>
            </div>
            </>
        </div>
    )
}

 function GetUsers () {

    let users = [];

    let { idEquipa } = useParams();

    let mensagem = {idEquipa:idEquipa}

  
    
    axios.post('http://localhost:4000/api/users/Users/lista' , mensagem)
        .then( resp => {
            users = resp.data;


            let pm = document.getElementById('memberName')

                for(const member of users){ 
                if(pm.childNodes.length -1 < users.length){
                let opcao = document.createElement('option');
                opcao.setAttribute('value', member._id);
                opcao.innerHTML = member.nome;
                pm.appendChild(opcao)
        }
    }  
})
    
    
}


export default TeamMembers;