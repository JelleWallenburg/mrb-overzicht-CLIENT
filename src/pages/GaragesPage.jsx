import { useState, useEffect} from "react";
import Loading from "../components/Loading";
import Garage from "../components/Garage";
import NewGarageForm from "../components/NewGarageForm";

import garageMethods from "../services/garage.service";


function GaragesPage () {
  const [garages, setGarages] = useState(null);
  const [changed, setChanged]= useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function getAllGarages() {
    try{
      const response = await garageMethods.getGarages();
      setGarages(response);
      setIsLoading(false);
    }
    catch (error) {
      console.log("Error getAllGarages", error)
    }
  }

  useEffect(() => {
    garageMethods.getGarages()
    getAllGarages()
  }, [changed]) 

  if(isLoading===true) {
    return (
      <Loading/>
    )
  }

  return(
    <main>
        <h1> Overzicht van garages</h1>
      <div>
        {garages.map(garage => {
          return(
            <div className= "garage-overview" key={garage._id}>
                <Garage garage= {garage} change= {{changed, setChanged}}/>
            </div>
          )
        })}
        <NewGarageForm change= {{changed, setChanged}}/>
      </div>
    </main>


  )
};

export default GaragesPage;