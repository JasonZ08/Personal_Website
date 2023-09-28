import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from 'react-bootstrap/Image';
import './Introduction.css'

function Introduction(){
    return (
        <div className='Introduction'>
            <Container fluid="sm" className="my-5">
                <Row>
                    <div className="my-5">
                    </div>
                </Row>
                <Row>
                    <div className="my-5">
                    </div>
                </Row>
                <Row>
                    <div className="my-5">
                    </div>
                </Row>
                <Row>
                    <Col>
                        <div className="my-5">
                            <h1>Hey, My name is Jason!</h1>
                            <div className="text-left my-2 py-5">
                            I'm a current undergraduate at the University of Maryland
                            and an aspiring software engineer. Coding has always been
                            fun for me, and I hope that my work can benefit people across the globe.
                            </div>
                            <div className='Separate'>Welcome to my website!</div> 
                        </div>
                    </Col>
                    <Col><Image src='/intro_pic.png' alt="my face"/></Col>
                </Row>
                <Row>
                    <div className="my-5">
                    </div>
                </Row>
                <Row>
                    <div className="my-2">
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Introduction