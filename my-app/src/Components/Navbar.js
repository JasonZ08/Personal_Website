
export default function Navbar(){
    return <nav className="nav">
        <a href = "/" className = "site-title">Jason</a>
        <ul>
            <li>
                <a href = "/work">Work</a>
            </li>
            <li>
                <a href = "/projects">Projects</a>
            </li>
            <li>
                <a href = "/clubs">Clubs</a>
            </li>
            <li>
                <a href = "/contact">Contact Me</a>
            </li>
        </ul>
    </nav>
}