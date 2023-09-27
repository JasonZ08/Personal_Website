import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css"

function Contact() {
    return (
        <div className="ContactContainer">
            <h1 className="py-5 ">
                Contacts
            </h1>
            <div className="ButtonContainer py-3">
                <img src="phone.png" alt="phone" width={25} height={25}/><span className="ps-2 pe-4">571-268-7291</span>
                <img src="mail.png" alt="mail" width={25} height={25}/><span className="ps-2 pe-4">jasonzhong0408@gmail.com</span>
                <img src="linkedin.png" alt="linkedin" width={25} height={25}/><span className="ps-2 pe-4"> <a href="https://www.linkedin.com/in/jason-zhong-56a4a1228/" rel="noreferrer" target="_blank">LinkedIn</a></span>
            </div>
        </div>  
    )
}

export default Contact
