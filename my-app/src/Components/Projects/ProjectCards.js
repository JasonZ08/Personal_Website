import Card from 'react-bootstrap/Card';
import '../Experience/ExperienceCards.css'

function ProjectCards(props){
    const {title, text} = props.values
    return (
    <div className='cardEdit'>
        <Card style={{ width: '40rem' }}>
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

export default ProjectCards