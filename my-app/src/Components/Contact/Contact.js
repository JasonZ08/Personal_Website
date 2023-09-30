import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Contact() {
    return (
        <div className="ContactContainer">
            <h1 className="py-5">
                Contacts
            </h1>
            <Container className="py-2">
                <Row>
                    <Col><img src="phone.png" alt="phone" width={30} height={30}/><span className="ps-2 fs-5">571-268-7291</span></Col>
                    <Col><img src="mail.png" alt="mail" width={30} height={30}/><span className="ps-2 fs-5">jasonzhong0408@gmail.com</span></Col>
                    <Col><img src="linkedin.png" alt="linkedin" width={30} height={30}/><span className="ps-2 fs-5"> <a href="https://www.linkedin.com/in/jason-zhong-56a4a1228/" rel="noreferrer" target="_blank">LinkedIn</a></span></Col>
                </Row>
            </Container>
        </div>  
    )
}

export default Contact
