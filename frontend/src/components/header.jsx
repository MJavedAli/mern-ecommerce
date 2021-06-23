import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'

const Header = () => {
    return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
    <Container>
        <Navbar.Brand href="#home">Modesty Attires</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="#home">
            <i className="fas fa-shopping-cart"></i>
               &nbsp;CART</Nav.Link>
            <Nav.Link href="#link">
            <i className="fas fa-user"></i>
              &nbsp;SIGN IN</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
        </>
    )
}

export default Header
