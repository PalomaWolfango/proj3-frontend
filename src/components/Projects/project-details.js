import React, { useEffect, useState } from "react";
import MenuUser from "../Menu/menu-user";
import './project-details.css'; 
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import AddCircle from '@material-ui/icons/AddCircle';
import axios from "axios";
import { useParams } from 'react-router-dom';


function ProjectDetails() {

    const [projectsName, setProjectsName] = useState([]);
    const [projectsTeam, setProjectsTeam] = useState([]);
    const [requirements, setRequirements] = useState([]);

    let { id, name, projectId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/api/projetos/` + projectId)
        .then(resp => {
            console.log(resp)
            setProjectsName(resp.data)
        })
        .catch(err => {
            console.log(err)
        });

        axios.get(`http://localhost:4000/api/roles/buscarMembrosEquipaporProjeto/` + projectId)
        .then(resp => {
            console.log(resp)
            setProjectsTeam(resp.data)
        })
        .catch(err => {
            console.log(err)
        });
    });

    useEffect(()=>{
        const data = "{\"method\": \"RequisitoContract:readAllRequisitos\",\"args\": []}";
        const accessToken = '13932250-8bf9-11ec-909a-6b8bc5fb8c1a-admin';

        fetch('http://localhost:8801/invoke/my-channel1/fabric-contract', {
            method: 'post',
            headers: new Headers ({
                'Authorization' : 'Bearer ' + accessToken,
                'Content-Type': 'text/plain'
            }),
            body: data
        })
        .then(resp => resp.json())
        .then(response => setRequirements(response.response))
        .catch(err => {
            console.log(err)
        }) 
    });

    
    return(
        <><MenuUser />
        {/* -----------------PROJETOS---------------------------- */}
            <div className="div-project-title">
                <h1 key={projectsName._id} className="project-title">{projectsName.nome}: <label>{projectsName.descricao}</label> </h1> 
            </div> 

            {/* LEFT */}
            <div className="div-team">
                <div>
                    <h3><b>TEAM</b></h3>
                    <div className="team-text">
                        {projectsTeam.map(projectTeam => (
                            projectsName.idGestor === projectTeam._id ? (
                                <li key={projectTeam._id}> <b>{projectTeam.nome}</b></li>
                            ) : (
                                <li key={projectTeam._id}>{projectTeam.nome}</li>
                            )
                        ))}
                    </div>
                </div> 
            </div>

            {/* -----------------REQUISITOS---------------------------- */}
            {/* RIGHT */}
            <div className="div-req" >
                <h3>
                    <b className="b-req">REQUIREMENTS</b>
                    <IconButton style={{float: 'right', width: 'auto', padding: '0px', marginRight: '100px'}} href={'/create-req/' + id + '/' + name + '/' + projectId}>
                        <AddCircle style={{color: '#00867d', fontSize: '40px'}} /> 
                    </IconButton>
                </h3>
                <div className="div-req-cards">
                    <Row xs={1} md={1} className="g-4" className="row" >
                        <Col className="col">
                            {requirements &&
                                requirements.map((element, index)=>
                                    {
                                        if(element.projectId === projectId) {
                                            return (
                                                <Card style={{borderColor:"#00867d", marginTop: "10px"}} >
                                                    <Card.Body>
                                                        <Link className="link-req" to={{pathname: '/change-req/' + id + '/' + name + '/' + projectId + '/' + element.idRequisito}}>
                                                            <Card.Text key={index} >
                                                                {element.description}
                                                            </Card.Text>  
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            )
                                        } 
                                    }
                                )
                            }
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
    
}

export default ProjectDetails;