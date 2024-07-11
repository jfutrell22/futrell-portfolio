import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function CardTwo() {
  return (
    <>
      <Card style={{ width: '22rem', marginLeft: '1em', marginRight: '1em' }}>
      <img className='card-img' src={require('../assets/Vicious_Cycles_Index_750.png')}  /> 
      <Card.Body>
      <Card.Title>Vicious Cycles Shop</Card.Title>
      <Card.Text>
          On this project I learned how to make navigation bars.
      </Card.Text>
      </Card.Body>
      </Card>
      
    </>
  );
}

export default CardTwo;