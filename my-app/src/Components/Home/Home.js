import MyNavBar from '../Navigation_Bar/Navbar';
import Introduction from '../Introduction/Introduction';
import Experience from '../Experience/Experience';
import Stack from 'react-bootstrap/Stack';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css'


function Home(){
    return (
        <div className='Home'>
            <Stack>
                <MyNavBar/> 
                <Introduction />
                <Experience />
            </Stack>
        </div>
    );
}

export default Home;

