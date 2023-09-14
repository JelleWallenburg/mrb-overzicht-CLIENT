import Card from 'react-bootstrap/Card'
import VehicleIcon from "../components/VehicleIcon"
import Table from "react-bootstrap/Table"

function VehicleDetail({vehicle}){
  return(
    <Card style={{margin: "0% 15%"}}>   
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
              <td>{vehicle[0].brandstof_omschrijving}</td>
            </tr>
            <tr>
              <td>Datum eerste toelating</td>
              <td>{vehicle[0].datum_eerste_toelating}</td>
            </tr>
            <tr>
              <td>CO2-uitstoot NEDC</td>
              <td>{vehicle[0].co2_uitstoot_gecombineerd} gram per kg</td>
            </tr>
            <tr>
              <td>CO2-uitstoot WLTP</td>
              <td>{vehicle[0].emissie_co2_gecombineerd_wltp} gram per kg</td>
            </tr>
            <tr>
              <td>Bruto bpm</td>
              <td>€ {vehicle[0].bruto_bpm}</td>
            </tr>
            <tr>
              <td>Motorrijtuigenbelasting (mrb) per 3 maanden</td>
              <td>€ {vehicle[0].mrb}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default VehicleDetail;