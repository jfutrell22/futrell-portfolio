import 'bootstrap/dist/css/bootstrap.min.css';
import { TypeAnimation } from 'react-type-animation';



function Banner() {
    return (
        <div className='text-center'>
            <h1 className='mt-5 pt-3'>
            <TypeAnimation
                sequence={[
                    'Welcome To My Portfolio!',
                    800,
                    
                ]}
                style={{ fontSize: '2em' }}
                repeat={0}
                speed={0}
            />
            </h1>
            
        </div>
        
    );
  }
  
  export default Banner;