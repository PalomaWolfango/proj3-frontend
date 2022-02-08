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
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <Col className="col">
                                <Card style={{borderColor:"#00867d"}} >
                                    <Card.Body>
                                        <Link className="link-req" to={{pathname: '/change-req/' + id + '/' + name + '/' + projectId}}>
                                            <Card.Text>
                                                Requisito Descrição
                                            </Card.Text>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    )
    
}

export default ProjectDetails;