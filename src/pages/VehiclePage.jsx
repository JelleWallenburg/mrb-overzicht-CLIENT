import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VehicleDetail from "../components/VehicleDetail";
import Loading from "../components/Loading";

import vehicleMethods from "../services/vehicle.service";

function VehiclePage() {
  const {id} = useParams();
 
  
  const [vehicle, setVehicle]= useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getOneVehicle(id){
    try{
      const response = await vehicleMethods.getVehicle(id)
      setVehicle(response);
      setIsLoading(false);
    }
    catch (error){
      console.log("error get one vehicle", error)
    }
  }

  useEffect(() => {
    getOneVehicle(id)
  })

  if(isLoading===true) {
    return (
      <Loading/>
    )
  }
  return(
    <div>
      <h1> Gedetailleerde informatie</h1>
      <main>
        <VehicleDetail vehicle= {vehicle}/>
      </main>
      
    </div>
  )
}

export default VehiclePage;