import Card from 'react-bootstrap/Card';
import './ExperienceCards.css'

function ExperienceCards(props){
    const {picture, title, date, text} = props.values
    return (
    <div className='cardEdit'>
        <Card>
            <Card.Img  variant="top" src={picture}/>
            <Card.Body>
                <Card.Title className='fs-1 py-2'>{title}</Card.Title>
                <Card.Subtitle className='py-3 fs-4'>{date}</Card.Subtitle>
                <Card.Text className='fs-5'>
                    {text}
                </Card.Text> 
            </Card.Body>
        </Card>
    </div>
    )
}

export default ExperienceCards      