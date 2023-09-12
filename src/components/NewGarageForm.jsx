import { useState } from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import garageMethods from "../services/garage.service"

function NewGarageForm({change}){
  const {setChanged} = change;
  const [garage, setGarage] = useState({garageName: '', postalCode: ''});
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGarage(garage => ({...garage, [name]:value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setChanged(false)
    
    garageMethods.addGarage(garage)
      .then(response => {
          console.log("response", response)
          setGarage({garageName: '', postalCode: ''})
          setChanged(true)
        })
      .catch(err => console.error("handlesubmit error", err));
    setChanged(false)
  }

  return(
    <Form className= "bg-info" onSubmit={handleSubmit} style={{padding: "10%"}}>
      <h1>Voeg een garage toe</h1>
      <Form.Group className="mb-3" controlId="garagename">
        <Form.Label>Naam van garage</Form.Label>
        <Form.Control type="text" name="garageName" placeholder="Vul garagenaam in" value={garage.garageName} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="postalcode">
        <Form.Label>Postcode van garage</Form.Label>
        <Form.Control type="text" name="postalCode" placeholder="Vul postcode in" value={garage.postalCode} onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">Voeg garage toe</Button>
    </Form>
  )
};

export default NewGarageForm;