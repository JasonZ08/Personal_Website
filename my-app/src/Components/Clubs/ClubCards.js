import Card from 'react-bootstrap/Card';
import '../Experience/ExperienceCards.css'
import Button from 'react-bootstrap/esm/Button';

function ClubCards(props) {
    const {picture, title, text, site} = props.values 
    return (
        <div className='cardEdit'>
            <Card>
                <Card.Img  variant="top" src={picture}/>
                <Card.Body>
                    <Card.Title className='fs-2'>{title}</Card.Title>
                    <Card.Text className='fs-6'>
                        {text}
                        <Button variant="secondary" href={site} target='_blank'>Website</Button>
                    </Card.Text> 
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClubCards