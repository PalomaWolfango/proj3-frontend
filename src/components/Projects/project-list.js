import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import MenuUser from "../Menu/menu-user";
import axios from "axios";

class ProjectList extends React.Component {

    constructor() {
        super();
    
        this.state = {
          projects: [],
          projectTeam: []
        };
    }

    componentDidMount = () => {
        
        try {
          axios.get("http://localhost:4000/api/projetos").then((response) => {
            this.setState({
                projects: response.data
            });
            
            
          });
        } catch (error) {
          console.error(error);
        }
    };

    render() {

        const { projects } = this.state; 
            
        return(
            <div style={{marginBottom: '50px'}}>
                <><MenuUser />
                <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', marginBottom: '25px', textAlign: 'center'}}>Projects List</h1>
                <Row xs={2} md={1} className="g-2">
                    <Col>
                        {projects.map(project => {
                            return( 
                                <Card style={{borderColor:"#00867d", marginBottom: '25px'}} >
                                    <Card.Body>
                                        <Card.Title style={{textTransform: 'uppercase', color: '#00867d'}}>{project.nome}</Card.Title>
                                        <Card.Text> {project.descricao} </Card.Text>
                                        <Card.Link href="/project-details">More Details</Card.Link>
                                    </Card.Body>
                                </Card>  
                            )
                        })}
                    </Col>
                </Row>
                </>
            </div>
        )
    }
}

export default ProjectList;