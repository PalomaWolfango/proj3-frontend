import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import MenuUser from "../Menu/menu-user";
import axios from "axios";
import { useParams } from 'react-router-dom';


function ProjectList() {

    const [projects, setProjects] = useState([]);

    let { id } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:4000/api/roles/buscarProjetosUser/` + id)
        .then(resp => {
            console.log(resp)
            setProjects(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    })


       
    return(
        <div style={{marginBottom: '50px'}}>
            <><MenuUser />
            <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', marginBottom: '25px', textAlign: 'center'}}>Projects List</h1>
            <Row xs={2} md={1} className="g-2">
                <Col>
                    {projects.map(project=> (
                        <Card style={{borderColor:"#00867d", marginBottom: '25px'}} >
                            <Card.Body>
                                <Card.Title key={project._id} style={{textTransform: 'uppercase', color: '#00867d'}}>{project.nome}</Card.Title>
                                <Card.Text key={project._id}> {project.descricao} </Card.Text>
                                <Card.Link href="/project-details">More Details</Card.Link>
                            </Card.Body>
                        </Card> 
                    ))}
                </Col>
            </Row>
            </>
        </div>
    )
}


export default ProjectList;