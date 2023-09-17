import './Experience.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack';
import ExperienceCards from './ExperienceCards';

function Experience() {
    return (
        <div className="ExpContainer">
            <h1>Experience</h1>
            <div className='ExpCards'>
                {Array.from({ length: 2 }).map((_, idx) => (
                    <div>
                        <ExperienceCards />
                        <ExperienceCards />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience