import './Navbar.css'
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import carwheel from '../../assets/carwheel.png'


function NavBar() {
  const { isLoggedIn, logOutUser} = useContext(AuthContext)
  const navigate = useNavigate()

  async function logOutThisUser() {
    await logOutUser()
    navigate("/")
  }

  return(
    <Navbar expand="lg" className="navbar-dark navbar-custom sticky-top">
      <Container className='d-flex justify-content-around'>
        <Navbar.Brand href="/"><img src={carwheel} width="30" height="30"/> mrb-overzicht</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!isLoggedIn && (
              <>
                <Nav.Link href="/login">Inloggen</Nav.Link>
                <Nav.Link href="/signup">Aanmelden</Nav.Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Nav.Link href="/garages">Mijn garages</Nav.Link>
                <Nav.Link onClick={logOutThisUser}>Uitloggen</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;