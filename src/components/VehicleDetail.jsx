import Card from 'react-bootstrap/Card'
import VehicleIcon from "../components/VehicleIcon"
import Table from "react-bootstrap/Table"

function VehicleDetail({vehicle}){
  return(
    <Card>   
      <VehicleIcon vehicle={vehicle[0]}/>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Kenmerk</th>
              <th>Waarde</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kenteken</td>
              <td>{vehicle[0].licensePlate}</td> 
            </tr>
            <tr>
              <td>Voertuigsoort</td>
              <td>{vehicle[0].voertuigsoort}</td>
            </tr>
            <tr>
              <td>Massa ledig voertuig</td>
              <td>{vehicle[0].massa_ledig_voertuig} kg</td>
            </tr>
            <tr>
              <td>Brandstof</td>
              <td>{vehicle[0].brandstof}</td>
            </tr>
            <tr>
              <td>Bruto bpm</td>
              <td>€ {vehicle[0].bruto_bpm}</td>
            </tr>
            <tr>
              <td>Motorrijtuigenbelasting (mrb)</td>
              <td>€ {vehicle[0].mrb}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default VehicleDetail;