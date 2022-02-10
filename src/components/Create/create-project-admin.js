import React from "react";
import MenuAdmin from "../Menu/menu-admin";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function CreateProjectAdmin() {

    const navigate = useNavigate();

    function createProject (e) {
        e.preventDefault();
    
        let request =  {
            nome: document.getElementById('validationDefaultName').value,
            budget: document.getElementById('validationDefaultBudget').value, 
            descricao: document.getElementById('validationDefaultDescription').value,
            tipoProjeto: document.getElementById('projectType').value
              
        } 
    
        if(document.getElementById('team').value !== 'team0') {
            request["idequipa"] = document.getElementById('team').value
        }
    
        if(document.getElementById('projectManager').value !== 'pm0') {
            request["idGestor"] = document.getElementById('projectManager').value
        }
    
        axios.post('http://localhost:4000/api/projetos', request)
        .then( resp => {
            alert("Project successfully added!");
            navigate(-1);
        })
        .catch( err => {
            /* alert("Wrong Credentials!"); */
        })
    }
    
    getEquipas();
    getGestores();

    return(
        <>
        <MenuAdmin />
        <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', textAlign: 'center'}}>Create Project</h1>
        <div className="container" style={{ border: '3px solid #00867d', padding: '50px 35px', marginTop: '90px', maxWidth: '500px', marginBottom: '90px' }}>
            <form onSubmit={(e) => createProject(e)}>
                <div className="mb-3">
                    <input type="text"  id="validationDefaultName"  className="form-control"  placeholder="Project Name"/>
                </div>
                <div className="mb-3">
                    <input type="text" id="validationDefaultBudget" className="form-control" placeholder="Budget" />
                </div>
                <div style={{float: 'left', marginBottom: '20px'}} >
                    <select name="project-type" id="projectType">
                        <option value="tipo0">Project Type</option>
                        <option value="web">Web</option>
                        <option value="mobile">Mobile</option>
                        <option value="software">Software</option>
                    </select>
                </div>
                <div className="mb-3">
                    <textarea type="text" id="validationDefaultDescription" className="form-control" placeholder="Project Description" rows="5" />
                </div>
                <div style={{float: 'left'}} >
                    <select onChange={(g) => getGestoresEquipa(g)} name="team" id="team">
                        <option value="team0">Team</option>
                    </select>
                </div>
                <div style={{float: 'right'}} >
                    <select  name="project-manager" id="projectManager">
                        <option value="pm0">Project Manager</option>
                    </select>
                </div> 
                <div style={{textAlign: 'center', marginTop: '100px'}}>
                    <button type="submit" class="btn btn-info" href="#" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 60px'}}>Create</button>
                </div>
            </form> 
        </div></>
    )
} 


function getEquipas () {

    axios.get('http://localhost:4000/api/equipas')
    .then( resp => {
       
        let equipas = document.getElementById('team')
    
        for(const equipa of resp.data){ 
            if(equipas.childNodes.length -1 < resp.data.length){
                let opcao = document.createElement('option');
                opcao.setAttribute('value', equipa._id);
                opcao.innerHTML = equipa.nome;
                equipas.appendChild(opcao)
            }
        }
    })
    
}


async function getGestores () {

    let gestores = [];
    
    await axios.get('http://localhost:4000/api/users/Gestores/lista')
        .then( resp => {
            gestores = resp.data;
        })
    
    let pm = document.getElementById('projectManager')

    for(const gestor of gestores){ 
        if(pm.childNodes.length -1 < gestores.length){
            let opcao = document.createElement('option');
            opcao.setAttribute('value', gestor._id);
            opcao.innerHTML = gestor.nome;
            pm.appendChild(opcao)
        }
        
    }  
}


async function getGestoresEquipa (g) {
    const select = document.getElementById('projectManager');

    select.innerHTML = "";

    let opcao = document.createElement('option');
    opcao.setAttribute('value', 'pm0');
    opcao.innerHTML = 'Project Manager';
    select.appendChild(opcao);

    g.preventDefault();

    if(document.getElementById('team').value === "team0") getGestores();
    
    let gestores = [];

    await axios.post('http://localhost:4000/api/roles/buscarGestoresPorEquipa', {equipa: document.getElementById('team').value})
       .then( resp => {
           gestores = resp.data;
       })
       .catch(err => {
           console.log(err);
       })
       
   let pm = document.getElementById('projectManager')
   
    for(const gestor of gestores){ 
        if(pm.childNodes.length -1 < gestores.length){
           let opcao = document.createElement('option');
           opcao.setAttribute('value', gestor._id);
           opcao.innerHTML = gestor.nome;
           pm.appendChild(opcao)
        }
    } 
}



export default CreateProjectAdmin;