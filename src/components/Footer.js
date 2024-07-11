import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"


function Footer() {
  return (

        <div className="main-footer pt-3 pb-3">
            <div className="justify-content-center d-flex flex-row ">
            <div>
            <Button className="m-2" href='https://github.com/jfutrell22/'>Git Hub</Button>
            </div>
            <div>
            <Button className="m-2" href='mailto:jrfutrell@my.waketech.edu'>jrfutrell@my.waketech.edu</Button>
            </div>
            
            <div>
            <Button className="m-2" href='https://LinkedIn.com/'>LinkedIn</Button>
            </div>
            </div>
            
            

            <p class="text-center pt-2"><i>&#169;John Futrell 2023</i></p>
        </div>

  );
}

export default Footer;