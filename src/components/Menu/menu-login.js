import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class MenuLogin extends React.Component {
    render() {
        return(
            <div>
                <Navbar expand="lg" fixed="top" style={{backgroundColor: '#4db6ac'}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto" >
                        <Nav.Link href="#admin" style={{fontSize: '20px'}}>Administrator</Nav.Link>
                        <Nav.Link href="#user" style={{marginLeft: '150px', fontSize: '20px'}}>User</Nav.Link>
                        <Nav.Link href="#user" style={{marginLeft: '150px', fontSize: '20px'}}>Project Manager</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>	
        )
    }
}

export default MenuLogin;