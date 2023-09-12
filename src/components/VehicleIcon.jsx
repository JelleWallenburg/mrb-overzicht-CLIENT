import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={faMotorcycle} />

function VehicleIcon({vehicle}){
  console.log(vehicle.voertuigsoort)

  if (vehicle.voertuigsoort=== "Personenauto") {
    return(
      <>
      <FontAwesomeIcon icon={faCarSide} size='xl'/>
      </>
    )
  }

  if (vehicle.voertuigsoort=== "Motorfiets") {
    return(
      <>
      <FontAwesomeIcon icon={faMotorcycle} size='xl'/>
      </>
    )
  }

  return(
    <>
    </>
  )
}

export default VehicleIcon