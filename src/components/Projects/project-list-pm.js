import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import MenuPM from "../Menu/menu-pm";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { IconButton } from "@material-ui/core";
import AddCircle from '@material-ui/icons/AddCircle';


function ProjectListPM() {

    const [projects, setProjects] = useState([]);

    let { id, name } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:4000/api/roles/buscarProjetosUser/` + id)
        .then(resp => {
            console.log(resp)
            setProjects(resp.data)
        })
        .catch(err => {
            console.log(err)
        });

    });
       
    return(
        <div style={{marginBottom: '50px'}}>
            <><MenuPM />
            {/* <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', marginBottom: '25px', textAlign: 'center'}}>Projects List</h1> */}
            <div style={{margin: '15px', marginTop: '100px', textAlign: 'center', width: 'auto'}}>
                <div>
                    <IconButton style={{float: 'right', width: 'auto', padding: '0px', marginRight: '60px'}} href={'/create-project-pm/' + id + '/' + name }>
                        <AddCircle style={{color: '#00867d', fontSize: '40px'}} /> 
                    </IconButton>
                </div>
                <div style={{width: 'fit-content', textAlign: 'center', marginLeft: '650px'}}>
                    <h1 style={{color: 'grey', marginBottom: '25px', marginRight: '0px'}}>
                        Projects List
                    </h1>
                </div>
                
            </div>
            <Row xs={2} md={1} className="g-2">
                <Col>
                    {projects.map(project=> (
                        <Card style={{borderColor:"#00867d", marginBottom: '25px'}} >
                            <Card.Body>
                                <Card.Title key={project._id} style={{textTransform: 'uppercase', color: '#00867d'}}>{project.nome}</Card.Title>
                                <Card.Text key={project._id}> {project.descricao} </Card.Text>
                                <Card.Link href={'/project-details-pm/' + id + '/' + name + '/' + project._id}>More Details</Card.Link>
                            </Card.Body>
                        </Card> 
                    ))}
                </Col>
            </Row>
            </>
        </div>
    )
}


export default ProjectListPM;