import 'bootstrap/dist/css/bootstrap.min.css';
import './Img.css'
import Card from 'react-bootstrap/Card';


function CardOne() {
  return (
    <>
      <Card style={{ width: '22rem'}}>
      <img className='card-img' src={require('../assets/Fig_Event_Form_750.jpg')}  /> 
      <Card.Body>
      <Card.Title>Fig Fest Form</Card.Title>
      <Card.Text>
        This was one of my fist projects creating a form with HTML. I created a splash page for a fictional fig festival.
      </Card.Text>
      </Card.Body>
      </Card>
      
    </>
  );
}

export default CardOne;