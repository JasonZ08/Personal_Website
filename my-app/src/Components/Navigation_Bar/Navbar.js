import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';

//make buttons on the navbar reuseable

const MyNavBar = () => {
    return (
        <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark" className='p-4'>
            <Container fluid="md">
                <Navbar.Brand>
                    <Image src="/profileIcon.png" roundedCircle />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Button variant='dark' onClick={() => {
                                const intro = document.getElementsByClassName("Introduction")[0]
                                intro.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <h4>Jason Zhong</h4>
                            </Button>{' '}
                        </Nav.Link>
                        <Button variant='dark' onClick={() => {
                                const intro = document.getElementsByClassName("ExpContainer")[0]
                                intro.scrollIntoView({ block: "start", behavior: 'smooth' });
                            }}>
                                <h4>Experience</h4>
                        </Button>{' '}
                        <Button variant='dark' onClick={() => {
                                const intro = document.getElementsByClassName("ProjContainer")[0]
                                intro.scrollIntoView({ block: "start", behavior: 'smooth' });
                            }}>
                            <h4>Projects</h4>
                        </Button>{' '}
                        <Button variant='dark' onClick={() => {
                                const intro = document.getElementsByClassName("CourseContainer")[0]
                                intro.scrollIntoView({ block: "start", behavior: 'smooth' });
                            }}>
                            <h4>Courses</h4>
                        </Button>{' '}
                        <Button variant='dark' onClick={() => {
                                const intro = document.getElementsByClassName("ClubContainer")[0]
                                intro.scrollIntoView({ block: "start", behavior: 'smooth' });
                            }}>
                            <h4>Clubs</h4>
                        </Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default MyNavBar
