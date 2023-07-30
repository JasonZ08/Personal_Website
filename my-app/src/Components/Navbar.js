import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MyNavBar = () => {
    return (
        <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark" className='p-4   '>
            <Container className='mx-6'>
                <Navbar.Brand href="#home">
                    <h2>Jason Zhong</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default MyNavBar
