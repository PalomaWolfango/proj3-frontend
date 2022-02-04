import React from "react";
import MenuAdmin from "../Menu/menu-admin";

class CreateProjectAdmin extends React.Component {
    render(){
        return(
            <>
            <MenuAdmin />
            <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', textAlign: 'center'}}>Create Project</h1>
            <div className="container" style={{ border: '3px solid #00867d', padding: '50px 35px', marginTop: '90px', maxWidth: '500px' }}>
                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control"  placeholder="Project Name"/>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Budget" />
                    </div>
                    <div style={{float: 'left', marginBottom: '20px'}} >
                        <select name="project-type" id="projectType">
                            <option value="tipo0">Project Type</option>
                            <option value="tipo1">Tipo 1</option>
                            <option value="tipo2">Tipo 2</option>
                            <option value="tipo3">Tipo 3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <textarea type="text" class="form-control" placeholder="Project Decription" rows="5" />
                    </div>
                    <div style={{float: 'left'}} >
                        <select name="team" id="team">
                            <option value="team0">Team</option>
                            <option value="team1">Team 1</option>
                            <option value="team2">Team 2</option>
                            <option value="team3">Team 3</option>
                        </select>
                    </div>

                    <div style={{float: 'right'}} >
                        <select name="project-manager" id="projectManager">
                            <option value="pm0">Project Manager</option>
                            <option value="pm1">Tipo 1</option>
                            <option value="pm2">Tipo 2</option>
                            <option value="pm3">Tipo 3</option>
                        </select>
                    </div>

                    <div style={{textAlign: 'center', marginTop: '100px'}}>
                    <button type="submit" class="btn btn-info" href="#" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 60px'}}>Create</button>
                    </div>
                </form> 
            </div></>
        )
    }
} 

export default CreateProjectAdmin;