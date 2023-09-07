import { useState } from "react";

import vehiclesMethods from "../services/vehicle.service";

function NewVehicleForm({change, id}){
  const {changed, setChanged} = change;
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
    <div className="addVehicle" onSubmit={handleSubmit}>
      <form>
        <label>Kenteken</label>
        <input type="text" name= "licensePlate" value={vehicle.licensePlate} onChange={handleChange}/>
        <button type="submit">Voeg voertuig toe</button>
      </form>

    </div>
    
  )
};

export default NewVehicleForm;