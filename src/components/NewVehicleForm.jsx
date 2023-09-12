import { useState } from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import vehiclesMethods from "../services/vehicles.service";

function NewVehicleForm({change, id}){
  const {setChanged} = change;
  const [vehicle, setVehicle] = useState({licensePlate:''});
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVehicle({[name]:value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setChanged(false)
    vehiclesMethods.addVehicle(id, vehicle)
      .then(response => {
        setVehicle({licensePlate:''});
        setChanged(true);
      })
    setChanged(false)
  }

  return(
    <Form className="bg-info" onSubmit={handleSubmit} style={{padding: "10%"}}>
      <h1>Voeg voertuig toe aan deze garage</h1>
      <br/>
      <Form.Group className="mb-3" controlId="garagename">
        <Form.Label>Kenteken voertuig</Form.Label>
        <Form.Control type="text" name= "licensePlate" placeholder="Vul kenteken zonder streep in (6 tekens)" value={vehicle.licensePlate} onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">Voeg voertuig toe</Button>
    </Form>    
  )
};

export default NewVehicleForm;