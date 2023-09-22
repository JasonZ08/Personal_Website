import "bootstrap/dist/css/bootstrap.min.css";
import "./Clubs.css"
import ClubCards from "./ClubCards";

function Clubs() {
    const data = [
        {
            "picture" : "poker.jpg",
            "title" : "Poker Club",
            "text" : "I actually only recently got into poker, which was around two weeks ago. "
            + "I'm fascinated by the mathematical aspect of poker. I love calculating probabilities and expected values and determining whether or not I should play a hand. "
            + "I've been watching youtube videos to learn how professionals like Phil Ivey and Daniel Negreanu play.",
        },
        {
            "picture" : "soccer.jpg",
            "title" : "Soccer Club",
            "text" : "I've played soccer ever since I was 7 years old, playing on "
            + "both a club team and the high school varsity team. Naturally, that " 
            + "made me join the club soccer team at UMD where we train and play "
            + "against other schools' club soccer team. I currently play as a left "
            + "wing and am trying to model my play after Mitoma, a professional player on Brighton.",
        }
    ]

    return (    
        <div className="ClubContainer">
            <h1 className="py-5">Clubs</h1>
            <div>
                {Array.from({ length: 1 }).map((_, idx) => (
                    <div className='ClubCards' key = {idx}>
                        <ClubCards values={data[idx*2]}/>
                        <ClubCards values={data[idx*2 + 1]}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clubs