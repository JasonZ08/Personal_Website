import Card from 'react-bootstrap/Card';
import '../Experience/ExperienceCards.css'

function ProjectCards(props){
    const {title, text} = props.values
    return (
    <div className='cardEdit'>
        <Card>
            <Card.Body>
                <Card.Title className='fs-1 py-3'>{title}</Card.Title>
                <Card.Text className='fs-6'>
                    {text}
                </Card.Text> 
            </Card.Body>
        </Card>
    </div>
    )
}

export default ProjectCards