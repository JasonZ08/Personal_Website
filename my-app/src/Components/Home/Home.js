import MyNavBar from '../Navigation_Bar/Navbar';
import Introduction from '../Introduction/Introduction';
import Experience from '../Experience/Experience';
import Stack from 'react-bootstrap/Stack';
import Projects from '../Projects/Projects';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css'
import Coursework from '../Coursework/Coursework';
import Clubs from '../Clubs/Clubs';


function Home(){
    return (
        <div className='Home'>
            <Stack>
                <MyNavBar/> 
                <Introduction />
                <Experience />
                <Projects />
                <Coursework />
                <Clubs />
            </Stack>
        </div>
    );
}

export default Home;

