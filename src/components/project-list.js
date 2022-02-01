import React from "react";
import { Card, Row, Col } from "react-bootstrap";

class ProjectList extends React.Component {
    render() {
        return(
            <div>
                <h1 style={{color: 'grey', margin: '15px', marginTop: '90px', marginBottom: '25px', textAlign: 'center'}}>Projects List</h1>
                <Row xs={1} md={4} className="g-4" style={{margin: '5px'}}>
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col>
                    <Card style={{borderColor:"#00867d"}} >
                        <Card.Body>
                        <Card.Title style={{textTransform: 'uppercase', color: '#00867d'}}>Projeto 1</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Link href="#">More Details</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>	
        )
    }
}

export default ProjectList;