import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Tratamento de Cabelos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Listagem</Nav.Link>
                        <Nav.Link href="/adicionar">Adicionar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;