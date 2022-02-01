import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class MenuAdmin extends React.Component {
    render() {
        return(
            <div>
                <Navbar expand="lg" fixed="top" style={{backgroundColor: '#4db6ac'}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-right">
                        <Nav.Link href="/home-admin" style={{fontSize: '20px'}}>Home</Nav.Link>
                        <Nav.Link href="/create-user" style={{fontSize: '20px', marginLeft: '150px'}}>Create User</Nav.Link>
                        <Nav.Link href="/create-project" style={{fontSize: '20px', marginLeft: '150px'}}>Create Project</Nav.Link>
                        <Nav.Link href="/" style={{fontSize: '20px', marginLeft: '587px'}}>Logout</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>	
        )
    }
}

export default MenuAdmin;