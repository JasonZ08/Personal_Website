import Card from 'react-bootstrap/Card';
import '../Experience/ExperienceCards.css'

function ClubCards(props) {
    const {picture, title, text} = props.values 
    return (
        <div className='cardEdit'>
            <Card>
                <Card.Img  variant="top" src={picture}/>
                <Card.Body>
                    <Card.Title className='fs-2'>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text> 
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClubCards