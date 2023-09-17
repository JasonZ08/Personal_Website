import Card from 'react-bootstrap/Card';
import './ExperienceCards.css'

function ExperienceCards(){
    return (
        <>
        <Card className='cardEdit'>
            <Card.Img  variant="top" src="travelers_back.png"/>
            <Card.Body>
                <Card.Title>Travelers</Card.Title>
                <Card.Text>
                    Some stuff about Travelers Some stuff about Travelers 
                    Some stuff about Travelers Some stuff about Travelers
                    Some stuff about Travelers Some stuff about Travelers
                    Some stuff about Travelers Some stuff about Travelers 
                </Card.Text> 
            </Card.Body>
        </Card>
    </>
    )
}

export default ExperienceCards