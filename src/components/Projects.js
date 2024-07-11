
import './Main.css';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';

import 'bootstrap/dist/css/bootstrap.min.css'; 



function Projects() {
  return (


   
        <div id='Projects'  className="divider-top justify-content-center pt-5">
            <h2 className="mt-3 mb-3">Projects</h2>
            <div className="d-flex flex-row">
                <CardOne></CardOne>
                <CardTwo></CardTwo>
                <CardThree></CardThree>
            </div>     
            
        </div>
        

    

  );
}

export default Projects;