import { Link } from "react-router-dom"
import profilePic from "./profileIcon.png"
export default function Navbar(){
    return <nav className="nav">     
        <Link to = "/" className = "site-title">
            <img src = {profilePic} id = "icon" alt = "icon" />Jason
            </Link>
        <ul>
            <li>
                <Link to = "/work">Work</Link>
            </li>
            <li>
                <Link to = "/projects">Projects</Link>
            </li>
            <li>
                <Link to = "/clubs">Clubs</Link>
            </li>
            <li>
                <Link to = "/contact">
                <button>
                    Contact Me
                </button>
                </Link>
            </li>
        </ul>
    </nav>
}