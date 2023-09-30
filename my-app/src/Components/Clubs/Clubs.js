import "bootstrap/dist/css/bootstrap.min.css";
import "./Clubs.css"
import ClubCards from "./ClubCards";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Clubs() {
    const data = [
        {
            "picture" : "poker.jpg",
            "title" : "UMD Poker Club",
            "text" : "I actually only recently got into poker, which was around two weeks ago. "
            + "I'm fascinated by the mathematical aspect of poker. I love calculating probabilities and expected values and determining whether or not I should play a hand. "
            + "I've been watching youtube videos to learn how professionals like Phil Ivey and Daniel Negreanu play. \n\n",
            "site" : "https://terplink.umd.edu/organization/poker-club-umd"
        },
        {
            "picture" : "soccer.jpg",
            "title" : "UMD Club Soccer",
            "text" : "I've played soccer ever since I was 7 years old, playing on "
            + "both a club team and the high school varsity team. Naturally, that " 
            + "made me join the club soccer team at UMD where we train and play "
            + "against other schools' club soccer team. I currently play as a left "
            + "wing and am trying to model my play after Mitoma, a professional player on Brighton. \n\n",
            "site" : "https://sites.google.com/site/marylandclubsoccer/"
        },
        {
            "picture" : "startup_shell.png",
            "title" : "Startup Shell",
            "text" : "Startup Shell is a UMD student-run organization that helps "
            + "rising entrepreneurs by providing resources and a space to collaborate " 
            + "and explore new ideas. I've currently just been attending ShellTalks, which " 
            + "are Startup Shell talk shows that feature many entrepreneurs and founders like "
            + "Simon Last and Prakash Janakiraman. I have yet to find a startup idea that "
            + "interests me, but I am actively looking for one. \n\n",
            "site" : "https://startupshell.org/"
        }
    ]

    return (    
        <div className="ClubContainer">
            <h1 className="py-5">Clubs</h1>
            <Container fluid="md">
                <div>
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Row className="py-5" key = {idx}>
                            <Col className="px-5"><ClubCards values={data[idx*2]}/></Col>
                            
                            <Col className="px-5"><ClubCards values={data[idx*2 + 1]}/></Col>
                        </Row>
                    ))}
                </div>
                <div>
                    <Row className="py-5">
                        <Col className="px-5"><ClubCards values={data[2]}/></Col>
                        <Col className="px-5"></Col>
                    </Row>
                </div>
            </Container>  
        </div>
    )
}

export default Clubs