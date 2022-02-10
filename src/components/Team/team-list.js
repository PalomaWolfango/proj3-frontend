import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import MenuPM from "../Menu/menu-pm";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { IconButton } from "@material-ui/core";
import AddCircle from '@material-ui/icons/AddCircle';


function TeamList() {

    const [teams, setTeams] = useState([]);

    let { id, name } = useParams();

    useEffect(() => {
        axios.get('http://localhost:4000/api/equipas')
        .then(resp => {
            console.log(resp)
            setTeams(resp.data)
        })
        .catch(err => {
            console.log(err)
        });

    });
       
    return(
        <div style={{marginBottom: '50px'}}>
            <><MenuPM />
            <div style={{margin: '15px', marginTop: '100px', textAlign: 'center', width: 'auto'}}>
                <div>
                    <IconButton style={{float: 'right', width: 'auto', padding: '0px', marginRight: '60px'}} href={'/create-team/' + id + '/' + name }>
                        <AddCircle style={{color: '#00867d', fontSize: '40px'}} /> 
                    </IconButton>
                </div>
                <div style={{width: 'fit-content', textAlign: 'center', marginLeft: '650px'}}>
                    <h1 style={{color: 'grey', marginBottom: '25px', marginRight: '0px'}}>
                        Teams List
                    </h1>
                </div>
                
            </div>
            
            <Row xs={2} md={1} className="g-2">
                <Col>
                    {teams.map(team=> (
                        <Card style={{borderColor:"#00867d", marginBottom: '25px'}} >
                            <Card.Body>
                                <Card.Title key={team._id} style={{textTransform: 'uppercase', color: '#00867d'}}>{team.nome}</Card.Title>
                                <Card.Text key={team._id}>{team.contacto}</Card.Text>
                                <Card.Link href={'/team-members/' + id + '/' + name + '/' + team._id}>Members</Card.Link>
                            </Card.Body>
                        </Card> 
                    ))}
                </Col>
            </Row>
            </>
        </div>
    )
}


export default TeamList;