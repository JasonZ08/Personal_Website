import './Experience.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ExperienceCards from './ExperienceCards';

function Experience() {
    const data = [
        {
            "picture" : "travelers_back.png",
            "title" : "Travelers",
            "text" : "Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers" + 
            "Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers"
        },
        {
            "picture" : "capitalone_back.jpg",
            "title" : "Capital One",
            "text" : "Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers" + 
            "Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers"
        },
        {
            "picture" : "nova_back.jpg",
            "title" : "NOVA SysTEMic",
            "text" : "Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers" + 
            "Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers"
        },
        {
            "picture" : "puma_back.png",
            "title" : "PUMA",
            "text" : "Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers" + 
            "Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers Some stuff about Travelers"
        }
    ]

    return (
        <div className="ExpContainer">
            <h1>Experience</h1>
            <div>
            {Array.from({ length: 2 }).map((_, idx) => (
                <div className='ExpCards' key = {idx}>
                    <ExperienceCards values={data[idx*2]}/>
                    <ExperienceCards values={data[idx*2 + 1]}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Experience