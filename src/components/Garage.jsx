import { useState } from "react";

import Card from 'react-bootstrap/Card'
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from "@fortawesome/free-solid-svg-icons"

import garagesMethods from "../services/garage.service";

function Garage({garage, change}){
  const { setChanged} = change;
  const [showEdit, setShowEdit]= useState(false);
  const [updatedGarage, setUpdatedGarage]= useState({garageName: '', postalCode: ''})

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdatedGarage(garage => ({...garage, [name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setChanged(false)
    
    garagesMethods.editGarage(garage._id, updatedGarage)
      .then(response => {
          setUpdatedGarage({garageName: '', postalCode: ''})
          setChanged(true)
          setShowEdit(false);
        })
      .catch(err => console.error("handlesubmit error", err));

    setChanged(false)
  }

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
      <div className="d-flex flex-row align-items-center">
      <CloseButton onClick={deleteThisGarage} style={{padding: "1vh"}}/>
      <FontAwesomeIcon icon={faEdit} size="lg" onClick={() => setShowEdit(!showEdit)}  />
      </div>

      {!showEdit &&
      <Card.Body>
        <Card.Title><h2>{garage.garageName}</h2></Card.Title>
        <Card.Text>{garage.postalCode}</Card.Text>
        <Card.Link href={`/garage/${garage._id}`}><h4>Bekijk deze garage</h4></Card.Link>
      </Card.Body>
      }

      {showEdit && 
      (
      <Form onSubmit={handleSubmit} style={{padding: "3%"}}>
        <Form.Group className="mb-3" controlId="garageName">
          <Form.Label>Naam van garage</Form.Label>
          <Form.Control type="text" name= "garageName" placeholder="Vul garagenaam in" value={updatedGarage.garageName} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="postalcode">
          <Form.Label>Postcode van garage</Form.Label>
          <Form.Control type="text" name= "postalCode" placeholder="Vul postcode in" value={updatedGarage.postalCode} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">Pas garage aan</Button>
      </Form>
      )}

    </Card>
  )
}

export default Garage;