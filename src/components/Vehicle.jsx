import vehiclesMethods from "../services/vehicles.service";
import VehicleIcon from "../components/VehicleIcon"
import Card from 'react-bootstrap/Card'
import CloseButton from 'react-bootstrap/CloseButton';

function Vehicle({id, vehicle, change}){
  
  const {setChanged} = change;
 
  const deleteThisVehicle = () => {
    setChanged(false)
    vehiclesMethods.deleteVehicle(id, vehicle)
    .then(response => {
      setChanged(true)
    })
    .catch(err => console.error("deleteThisVehicle", err));

  }


  return(
    <Card className="bg-info" style={{margin:"5vh"}}>
      <CloseButton onClick={deleteThisVehicle} style={{padding: "1vh"}}/>
      
      <Card.Body>
        <VehicleIcon vehicle={vehicle}/>
        <Card.Title><h3>{vehicle.licensePlate}</h3></Card.Title>
        <Card.Text><h3>€ {vehicle.mrb}</h3></Card.Text>
        <Card.Link href={`/vehicle/${vehicle._id}`}><h4>Bekijk dit voertuig</h4></Card.Link>
      </Card.Body>
    </Card>

  )
}

export default Vehicle;