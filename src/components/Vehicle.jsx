import vehiclesMethods from "../services/vehicle.service";

function Vehicle({id, vehicle, change}){
  
  const {changed, setChanged} = change;
 
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
      <h3>{vehicle.licensePlate}</h3>
      <h3>{vehicle.mrb}</h3>
      <button onClick={deleteThisVehicle}>Delete</button>
    </div>
  )
}

export default Vehicle;