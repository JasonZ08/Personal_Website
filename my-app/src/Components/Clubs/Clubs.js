import "bootstrap/dist/css/bootstrap.min.css";
import "./Clubs.css"
import ClubCards from "./ClubCards";

function Clubs() {
    const data = [
        {
            "picture" : "poker.jpg",
            "title" : "Poker Club",
            "text" : "something",
        },
        {
            "picture" : "soccer.jpg",
            "title" : "Soccer Club",
            "text" : "something",
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