import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class MenuUser extends React.Component {
    render() {
        return(
            <div>
                <Navbar expand="lg" fixed="top" style={{backgroundColor: '#4db6ac'}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="/home-user" style={{fontSize: '20px', color: 'white'}}>Home</Nav.Link>
                        <Nav.Link href="/projects-list" style={{fontSize: '20px', marginLeft: '150px', color: 'white'}}>Projects List</Nav.Link>
                        <Nav.Link href="/" style={{fontSize: '20px', marginLeft: '876px', color: 'white'}}>Logout</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>	
        )
    }
}

export default MenuUser;