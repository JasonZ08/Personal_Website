import { Link } from "react-router-dom"
import React from 'react'
import profilePic from "./profileIcon.png"
import { useEffect } from 'react'
import "../styles.css"
export default function Navbar() {

    useEffect(() => {

        const change = () => {

            let scrollPosition = Math.round(window.scrollY);

            if (scrollPosition > 75) {
                document.getElementById("nav").classList.add("sticky");
            }
            else {
                document.getElementById("nav").classList.remove("sticky");
            }
        }
        window.addEventListener("scroll", change)
    }, []
    )

    return(
    <nav className="nav" id = "nav">     
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
    )
}
