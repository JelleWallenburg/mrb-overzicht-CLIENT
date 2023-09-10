import vehiclesMethods from "../services/vehicles.service";
import { Link } from "react-router-dom";

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
    <div className="garage">
      <Link to={`/vehicle/${vehicle._id}`}><h3>{vehicle.licensePlate}</h3></Link>
      <h3>{vehicle.mrb}</h3>
      <button onClick={deleteThisVehicle}>Delete</button>
    </div>
  )
}

export default Vehicle;