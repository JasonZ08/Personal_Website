import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Contact() {
    return (
        <div className="ContactContainer">
            <h1 className="py-5 ">
                Contact
            </h1>
            <h3 className="py-3">
                Form Coming Soon!
            </h3>
            <div className="ButtonContainer py-3">
                <img src="phone.png" width={25} height={25}/><span className="ps-2 pe-4">571-268-7291</span>
                <img src="mail.png" width={25} height={25}/><span className="ps-2 pe-4">jasonzhong0408@gmail.com</span>
                <img src="linkedin.png" width={25} height={25}/><span className="ps-2 pe-4"> <a href="https://www.linkedin.com/in/jason-zhong-56a4a1228/" target="_blank">LinkedIn</a></span>
            </div>
        </div>  
    )
}

export default Contact
