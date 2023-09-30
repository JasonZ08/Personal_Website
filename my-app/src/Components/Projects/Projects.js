import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCards from "./ProjectCards";
import "./ProjectCards.css"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Projects(){
    const data = [
        {
            "title" : "Portfolio",
            "text" : "I created a rough design of this portfolio website on Figma and coded " +
            "up the website using React. This website contains all my past work experiences and projects, while "
            + "also showing extracurricular activities that I'm interested in. \n \n" + 
            "Technologies Used: Javascript, CSS, HTML"
        },
        {
            "title" : "Bookshelf Scanning Application",
            "text" : "Imagine there's a shelf full of books right in front of you, and you don't know what books you want or need. "
            + "Well, this Bookshelf Scanning Application can retrieve all the information (ISBN, page count, summary) on all the books solely based "
            + "on the books spine. This way, you won't have to go through each book and read a summary to determine if you want the book or not."
            + "\n \nTechnologies Used: Python, YOLOv5, Tkinter, NumPy, Torch, Pytesseract, Beautiful Soup, OpenCV"
        },
        {
            "title" : "Random Forest Optimization",
            "text" : "Random Forest Optimization was a fun experiment to see if I could optimize the Random Forest to perform even better. "
            + "The idea behind this project was that Random Forest also considers features that are irrelevant to the class variable. "
            + "Thus, if Random Forest puts emphasis on more useful features, it may have a better accuracy."
            + "\n \nTechnologies Used: Python, NumPy, Pandas, Scikit-learn, Matplotlib"
        },
        {
            "title" : "Theft Detection",
            "text" : "Given a video, Theft Detection attempted to identify at which times certain objects disappeared from the video."
            + " This project kept track of all the items at each frame of the video, and if the count of an object decreased after a certain amount of time,"
             +" a warning would be issued that the object had disappeared. \n\nTechnologies Used: Python, NumPy, OpenCV, YOLOv5, Tkinter"
        }
    ]

    return (
        <div className="ProjContainer">
            <h1 className="py-5">Projects</h1>
            <Container fluid="md">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Row className="py-5" key = {idx}>
                        <Col className="px-5"><ProjectCards values={data[idx*2]}/></Col>
                        <Col className="px-5"><ProjectCards values={data[idx*2 + 1]}/></Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export default Projects