import garagesMethods from "../services/garage.service";
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import CloseButton from 'react-bootstrap/CloseButton';

function Garage({garage, change}){
  const { setChanged} = change;
  
  const deleteThisGarage = () => {
    setChanged(false)
    garagesMethods.deleteGarage(garage)
    .then(response => {
       setChanged(true)
    })
    .catch(err => console.error("delete this garage", err));
    setChanged(false);
  }

  return(
    <Card className="bg-info" style={{margin:"5vh"}}>
      <CloseButton onClick={deleteThisGarage} style={{padding: "1vh"}}/>
      <Card.Body>
        <Card.Title><h2>{garage.garageName}</h2></Card.Title>
        <Card.Text><h3>{garage.postalCode}</h3></Card.Text>
        <Card.Link href={`/garage/${garage._id}`}><h4>Bekijk deze garage</h4></Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Garage;