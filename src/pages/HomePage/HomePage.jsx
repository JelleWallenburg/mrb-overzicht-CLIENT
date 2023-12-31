import { Link } from "react-router-dom"
import car from "../../assets/car.webp"
import './HomePage.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

function HomePage() {

  return(
    <main>
    <section className="bg" style={{backgroundImage: car}}>
      <div className= "color-overlay d-flex justify-content-center align-items-center">
        <Container fluid="md">
          <Row>
            <Col><h1>Overzicht op jouw wegenbelasting</h1></Col>
          </Row>
          <br/>
          <Row>
            <Col><Link to="/signup"> <Button className="text-black"><h2>Aan de slag</h2></Button></Link></Col>
          </Row>
        </Container>
      </div>
    </section>

   
      <Stack gap= {3} className="d-flex space-around" style={{padding: '1vh 5vh' }}>
        <div><h1>Waarom een mrb-overzicht?</h1></div>
        <p>Het overzicht geeft <b>gratis</b> inzicht in jouw maandelijks te betalen motorrijtuigenbelasting. Door onze simulatie is het mogelijk om vooraf te weten te komen wat de motorrijtuigenbelasting gaat kosten. Op dit moment is het mrb-overzicht alleen bruikbaar voor personenauto's en motorrijtuigen. In de berekening wordt nog geen rekening gehouden met de fijnstoftoeslag en opcenting.</p>
      </Stack>


      <Container style={{padding: '0vh 6vh' }}>
        <Row>
          <Col>
            <Card className="bg-secondary text-white">
              <Card.Body >
                <Card.Title><b>1.</b> Maak een account</Card.Title>
               </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-secondary text-white" >
              <Card.Body>
                <Card.Title><b>2.</b> Creëer jouw garage </Card.Title>
               </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className="bg-secondary text-white" >
              <Card.Body>
                <Card.Title><b>3.</b> Voeg een voertuig toe</Card.Title>
               </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default HomePage;