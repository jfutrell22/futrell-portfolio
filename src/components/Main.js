
import './Main.css';
import Projects from './Projects';
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MyPic from './MyPic';


function Main() {
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
        <Skills></Skills>
        <Projects></Projects>
        
    </div>
    

  );
}

export default Main;