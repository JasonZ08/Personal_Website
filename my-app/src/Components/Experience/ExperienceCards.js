import Card from 'react-bootstrap/Card';
import './ExperienceCards.css'

function ExperienceCards(props){
    const {picture, title, date, text} = props.values
    return (
    <div className='cardEdit'>
        <Card>
            <Card.Img  variant="top" src={picture}/>
            <Card.Body>
                <Card.Title className='fs-2'>{title}</Card.Title>
                <Card.Subtitle>{date}</Card.Subtitle>
                <Card.Text>
                    {text}
                </Card.Text> 
            </Card.Body>
        </Card>
    </div>
    )
}

export default ExperienceCards