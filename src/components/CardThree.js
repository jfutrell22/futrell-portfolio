import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Img.css'

function CardThree() {
  return (
    <>
      <Card style={{ width: '22rem' }}>
      <img className='card-img' src={require('../assets/topsail_bootstrap_1200.png')}  /> 
      <Card.Body>
      <Card.Title>Topsail Beach Refresh</Card.Title>
      <Card.Text> 
          This was my first project using Bootstrap. I practiced my design skills and learned more about responsive web design. 
      </Card.Text>
      </Card.Body>
      </Card>
      
    </>
  );
}

export default CardThree;