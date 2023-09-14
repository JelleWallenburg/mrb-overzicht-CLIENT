import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom"
import "./Footer.css"

function Footer(){

  return(
    
    <Navbar className="footer-custom fixed-bottom">
      <Container className="flex-d justify-content-center">
        <Nav>
          <p>© Made by <Link to="https://github.com/JelleWallenburg">Jelle</Link>, 2023. All rights reserved.</p>
        </Nav>

      </Container>
    
    </Navbar>


  )
}

export default Footer;