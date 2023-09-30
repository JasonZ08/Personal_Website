import './Experience.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ExperienceCards from './ExperienceCards';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Experience() {
    const data = [
        {
            "picture" : "travelers_back.png",
            "title" : "Travelers",
            "date" : " Jun-Aug 2023",
            "text" : "I primarily worked in front-end development, creating" + 
            " features and functionalities (buttons, modals, popup boxes) to the home page of a tool that Travelers was building. " +
            "I also developed unit tests and Playwright tests to ensure that the React components were working properly."
        },
        {
            "picture" : "capitalone_back.jpg",
            "title" : "Capital One",
            "date" : " Jan-Apr 2023",
                "text" : "I developed an algorithm to cut the time to find the kth order neighbor of a node in a graph by 80%. The algorithm required the use of a Python " +
                "library called GraphFrames, which queried graphs based on the magnitude of millions of nodes and billions of edges. Additionally, I used the Matplotlib library to create graphs " +
            "that highlighted overall trends between size of the graph and the time it took GraphFrames to query it."
        },
        {
            "picture" : "nova_back.jpg",
            "title" : "NOVA SysTEMic",
            "date" : " Jul-Aug 2022",
            "text" : "At a local community college, I helped teach Arduino to middle school students. " + 
            "I came up with a lecture on the piezzo buzzer that allowed students to play pop songs out loud. I also co-lectured " +
            "students on how to program the LCD screen and LCD matrix, allowing them to build fun basic games."
        },
        {
            "picture" : "puma_back.png",
            "title" : "PUMA",
            "date" : " Jul-Aug 2022",
            "text" : "I collaborated with two other coworkers in a high-paced setting to help drive sales. I guided customers and helped them " + 
            "find products that matched their needs and wants. I helped load and stock up shoes and clothes in the storage room, and " +
            "I also worked as cashier to handle payments and returns."
        }
    ]

    return (
        <div className="ExpContainer py-5">
            <h1>Experience</h1>
            <Container fluid="md">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Row className="py-5"key = {idx}>
                        <Col className="px-5">
                            <ExperienceCards values={data[idx*2]}/>
                        </Col>
                        <Col className="px-5">
                            <ExperienceCards values={data[idx*2 + 1]}/>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export default Experience