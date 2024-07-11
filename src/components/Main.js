// import Carousel from 'react-bootstrap/Carousel';
// import ListGroup from 'react-bootstrap/ListGroup';
import './Main.css';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import AboutMe from "./AboutMe";
import Education from "./Education";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MyPic from './MyPic';
// import FigFestProject from '../../public/assets/Fig_Event_Form_750.jpg';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Projects() {
  return (


    <div className="main-section">
       
        <div className="d-flex flex-row">
            <div>
                <AboutMe></AboutMe>
                <Education></Education>
            </div>
            <div className='mt-3'>
                <MyPic></MyPic>
            </div>
        </div>
        <div id='Projects'  className="divider-top justify-content-center pt-5">
            <h2 className="mt-3 mb-3">Projects</h2>
            <div className="d-flex flex-row">
                <CardOne></CardOne>
                <CardTwo></CardTwo>
                <CardThree></CardThree>
            </div>     
            
        </div>
        
    </div>
    
    


























    
    // <Carousel>
    //   <Carousel.Item class="text-center">
    //     <img src={require('../assets/Fig_Event_Form_750.jpg')} class="text-center" />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //   <img src={require('../assets/Vicious_Cycles_Index_750.png')} class="text-center" />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //   <img src={require('../assets/topsail_bootstrap_1200.png')} class="text-center" />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default Projects;