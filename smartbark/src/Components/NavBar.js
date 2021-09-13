import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return(
        <div>
            <Navbar bg='dark' collapseOnSelect expand='lg' sticky='top' variant='dark' >
                <Container>
                    <Navbar.Brand href='/'>
                        SmartBark
                    </Navbar.Brand>
                    <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}