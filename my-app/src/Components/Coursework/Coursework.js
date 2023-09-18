import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Coursework.css'

function Coursework(){
    return (
        <div className="CourseContainer">
            <h1 className="CourseHeading py-5">Coursework</h1>
            <Container fluid="md">
                <Row>
                    <Col className="header"> University of Maryland, College Park </Col>
                    <Col className="header"> Thomas Jefferson High School for Science and Technology</Col>
                </Row>
                <Row>
                    <Col> CMSC330 (Programming Languages) </Col>
                    <Col> Machine Learning</Col>
                </Row>
                <Row>
                    <Col> CMSC351 (Algorithms) </Col>
                    <Col> Artificial Intelligence</Col>
                </Row>
                <Row>
                    <Col> CMSC320 (Intro to Data Science) </Col>
                    <Col> Web App Development</Col>
                    </Row>
                <Row>
                    <Col> CMSC250 (Discrete) </Col>
                    <Col> Mobile App Development</Col>
                    </Row>
                <Row>
                    <Col> CMSC216 (Intro to Computer Systems) </Col>
                    <Col> AP Calculus BC</Col>
                </Row>
                <Row>
                    <Col> MATH240 (Linear Algebra) </Col>
                    <Col> Data Structures & Algorithms</Col>
                </Row>
                <Row>
                    <Col> MATH241 (Multivariable Calculus) </Col>
                    <Col> AP Computer Science A</Col>
                </Row>
                <Row>
                    <Col>STAT400 (Statistics)</Col>
                </Row>
                <Row>
                    <Col>CMSC132 (Object Oriented Programming)</Col>
                </Row>
                <Row>
                    <Col>BMGT210 (Foundations of Accountings)</Col>
                </Row>
                <Row>
                    <Col>PHYS171 (Intro to Physics Mechanics)</Col>
                </Row>
            </Container>
        </div>  
    )
}

export default Coursework