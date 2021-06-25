import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
    <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>
        <i class="fas fa-shopping-bag"></i>
         &nbsp; Zainab.com</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

        <LinkContainer to='/cart'>
            <Nav.Link >
            <i className="fas fa-shopping-cart"></i>
               &nbsp;CART</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/signin'>
            <Nav.Link>
            <i className="fas fa-user"></i>
              &nbsp;SIGN IN</Nav.Link>
         </LinkContainer>

        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
        </>
    )
}

export default Header
