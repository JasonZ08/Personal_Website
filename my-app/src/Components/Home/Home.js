import mainPic from '../mainPic.jpeg'
import MyNavBar from '../Navigation_Bar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css'

function Home(){
    return (
        <div className='Home'>
            <MyNavBar/> 
            <h1>Hey! I'm</h1>   
            <h1>Jason Zhong</h1>
            <h1>A current 
            undergraduate aiming to get some <br/>
            real-world experience in full-stack 
            development</h1>
            <h1>Welcome to my website!</h1>
        </div>
    );
}

export default Home;

