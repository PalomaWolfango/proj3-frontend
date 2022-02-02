import React from "react";
import MenuUser from "../Menu/menu-user";
import './project-details.css'; 
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import AddCircle from '@material-ui/icons/AddCircle';

class ProjectDetails extends React.Component {
    render() {
        return(
            <><MenuUser />
                <div>
                    <h1 className="project-title">Project Name</h1> 
                </div> 

                {/* LEFT */}
                <div className="div-team">
                    <div>
                        <h3><b>TEAM</b></h3>
                        <div className="team-text">
                            <li>Paloma</li>
                            <li>Mónica</li>
                            <li>Terrorista</li>
                        </div>
                    </div> 
                </div>

                {/* RIGHT */}
                <div className="div-req" >
                    <h3>
                        <b className="b-req">REQUIREMENTS</b>
                        <IconButton style={{float: 'right', width: 'auto', padding: '0px', marginRight: '100px'}}>
                            <AddCircle style={{color: '#00867d', fontSize: '40px'}}/> 
                        </IconButton>
                    </h3>
                    <div className="div-req-cards">
                        <Row xs={1} md={1} className="g-4" className="row" >
                            {Array.from({ length: 12 }).map((_, idx) => (
                                <Col className="col">
                                    <Card style={{borderColor:"#00867d"}} >
                                        <Card.Body>
                                            <Link className="link-req" to="/">
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
}

export default ProjectDetails;