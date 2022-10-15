import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Stack, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

const index = (props: any) => {
    const text = 'ReactPortfolio';

    const handleClick = () => {
        props.setSession(false);
    };

    return (
        <Navbar bg='dark' variant='dark' sticky='top'>
            <Container>
                <Navbar.Brand href='#home'>{text}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <div className='login-container'>
                    <Button className='p-1 m- 0' onClick={handleClick}>
                        Logout
                    </Button>
                </div>
            </Container>
        </Navbar>
    )
}

export default index;