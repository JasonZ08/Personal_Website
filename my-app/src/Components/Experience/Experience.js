import './Experience.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ExperienceCards from './ExperienceCards';

function Experience() {
    const data = [
        {
            "picture" : "travelers_back.png",
            "title" : "Travelers",
            "date" : " Jun-Aug 2023",
            "text" : "I was a software engineer intern at the Traveler's Insurance Company, where I primarily worked in front-end development." + 
            " I used React, Typescript, and CSS to provide features and functionalities (buttons, modals, popup boxes) to the home page of a tool that Travelers was building. " +
            "I also created unit tests and Playwright tests to ensure that the React components were working properly."
        },
        {
            "picture" : "capitalone_back.jpg",
            "title" : "Capital One",
            "date" : " Jan-Apr 2023",
            "text" : "I was a machine learning intern at Capital One that worked to find the kth order neighbor of a node in a graph. I used the python " +
            "library GraphFrames to query graphs on the magnitude of millions of nodes and billions of edges. I used the Matplotlib library to create graphs " +
            "that highlighted overall trends between size of the graph and the time it took GraphFrames to query it."
        },
        {
            "picture" : "nova_back.jpg",
            "title" : "NOVA SysTEMic",
            "date" : " Jul-Aug 2022",
            "text" : "I was a teacher assistant at NOVA SySTEMic that helped teach Arduino to middle school students. " + 
            "I created a lecture on the piezzo buzzer which allowed students to play music out loud. I also co-lectured " +
            "students on how to program the LCD screen, allowing them to build fun basic games."
        },
        {
            "picture" : "puma_back.png",
            "title" : "PUMA",
            "date" : " Jul-Aug 2022",
            "text" : "I worked as a retail sales associate at PUMA to help drive sales. I guided customers and helped them " + 
            "find products that matched their needs and wants. I helped load and stock up shoes and clothes in the storage room, and " +
            "I also worked as cashier to handle payments and returns."
        }
    ]

    return (
        <div className="ExpContainer py-5">
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