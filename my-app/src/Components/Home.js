import mainPic from './mainPicNBG2.png'
import './home.css'
function Home(){
    return (
        <div id = 'container'>
            <div id = 'intro'>Hey! I'm</div>
            <div id = 'name'>Jason Zhong</div>
            <div id = 'statement'>A current 
            undergraduate aiming to get some <br/>
            real-world experience in full-stack 
            development</div>
            <div id = 'welcome'>Welcome to my website!</div>
            <img src={mainPic} alt = "Main" id='mainPic'/>
        </div>
    );
}

export default Home;

