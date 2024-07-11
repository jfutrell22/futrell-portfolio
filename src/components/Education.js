import 'bootstrap/dist/css/bootstrap.min.css';
import './Education.css'


function Education() {
    return (
        <div  className='mt-4'>
        <h2 className='mb-3'>Education</h2>
            <section>
                <h3>Wake Tech Community College - Raleigh, NC</h3>
                    <p>Web Development, 2024</p>
                    <p class="justify">During my time taking classes at Wake Tech I have been exposed to a variety of programming languages and technologies. Some include HTML, CSS, JavaScript, Bootstrap, WordPress, Python, C#, more.</p>
            </section>
            <section class="justify divider">
                <h3>N.C. State University - Raleigh, NC</h3>
                <p>Agricultural and Environmental Technology, 2013</p>
                <p>Learned about a variety of technologies and environmental concerns.</p>
            </section> 
        </div>
    );
  }
  
  export default Education;