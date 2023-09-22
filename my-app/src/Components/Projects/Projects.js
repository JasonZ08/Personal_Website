import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCards from "./ProjectCards";
import "./ProjectCards.css"

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
            "text" : "The purpose of this project was to identify all information regarding a book (ISBN, paes, description) based" +   
            "on the books spine. This way, users can just take a picture of a group of books on a shelf or in a library, and know all there is to about all the books " +
            "without having to flip through each one" + 
            "\n \nTechnologies Used: Python, YOLOv5, Tkinter, NumPy, Torch, Pytesseract, Beautiful Soup, OpenCV"
        },
        {
            "title" : "Random Forest Optimization",
            "text" : "This project was a fun experiment to see if I could optimize Random Forest to perform even better."
            + "The idea behind this project was that Random Forest also considers features that are irrelevant to the class variable. "
            + "Thus, if Random Forest puts emphasis on more useful features, it may have a better accuracy."
            + "\n \nTechnologies Used: Python, NumPy, Pandas, Scikit-learn, Matplotlib"
        },
        {
            "title" : "Theft Detection",
            "text" : "Given a video, this project attempted to identify at which times certain objects disappeared from the video."
            + "This project kept track of all the items at each frame of the video, and if the count of an object decreased after a certain amount of time,"
             +"a warning would be issued that the object had disappeared. \n\nTechnologies Used: Python, NumPy, OpenCV, YOLOv5, Tkinter"
        }
    ]

    return (
        <div className="ProjContainer">
            <h1 className="py-5">Projects</h1>
            <div>
            {Array.from({ length: 2 }).map((_, idx) => (
                <div className='ProjCards' key = {idx}>
                    <ProjectCards values={data[idx*2]}/>
                    <ProjectCards values={data[idx*2 + 1]}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects