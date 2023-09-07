import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import Vehicle from "../components/Vehicle";
import NewVehicleForm from "../components/NewVehicleForm";

import vehiclesMethods from "../services/vehicle.service";

function GaragePage(){
  const {id} = useParams();

  const [vehicles, setVehicles]= useState(null);
  const [changed, setChanged] = useState(false);// we can also pass the state of changed down from the garage
  const [isLoading, setIsLoading] = useState(true);

  async function getAllVehicles(id) {
    try{
      const response = await vehiclesMethods.getVehicles(id);
      setVehicles(response);
      console.log("response",response)
      setIsLoading(false);
    }
    catch (error){
      console.log("Error getAllVehicles", error)
    }  
  }

  useEffect(() => {
    getAllVehicles(id)
  }, [changed])
  
  if(isLoading === true) {
    return(
      <Loading/>
    )
  }

  return(
    <div>
      <h1>Overzicht van voertuigen</h1>
      <main>
        {vehicles.map(vehicle => {
          return(
            <div className="vehicle-overview" key= {vehicle._id}>
              <Vehicle id= {id} vehicle= {vehicle} change = {{changed, setChanged}}/>
            </div>
          )
        })}
        <NewVehicleForm id = {id} change = {{changed, setChanged}}/>
      </main>
    </div>
  )
}

export default GaragePage;