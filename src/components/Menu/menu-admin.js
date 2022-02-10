import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import ExitToAppIcon  from '@material-ui/icons/ExitToApp';

function MenuAdmin() {
    

        let { id, name } = useParams();

        return(
            <div>
                <Navbar expand="lg" fixed="top" style={{backgroundColor: '#4db6ac'}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-right">
                        <Nav.Link href={"/home-admin/" + id + "/" + name}  style={{fontSize: '20px', color: 'white'}}>Home</Nav.Link>
                        <Nav.Link href={"/create-user/" + id + "/" + name} style={{fontSize: '20px', marginLeft: '90px', color: 'white'}}>Create User</Nav.Link>
                        <Nav.Link href={"/create-project-admin/" + id + "/" + name} style={{fontSize: '20px', marginLeft: '90px', color: 'white'}}>Create Project</Nav.Link>
                        <Nav.Link href="/" style={{fontSize: '20px', marginLeft: '610px', color: 'white'}}><b>{name}</b> <ExitToAppIcon /></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>	
        )
    
}

export default MenuAdmin;