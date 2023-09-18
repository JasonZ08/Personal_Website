import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCards from "./ProjectCards";
import "./ProjectCards.css"

function Projects(){
    const data = [
        {
            "title" : "Portfolio",
            "text" : "something"
        },
        {
            "title" : "Bookshelf Scanning Application",
            "text" : "something"
        },
        {
            "title" : "Random Forest Optimization",
            "text" : "something"
        },
        {
            "title" : "Theft Detection",
            "text" : "something"
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