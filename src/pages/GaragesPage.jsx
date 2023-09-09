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
    <div>
      <h1> Overview of garages</h1>
      <main>
        {garages.map(garage => {
          return(
            <div className= "garage-overview" key={garage._id}>
                <Garage garage= {garage} change= {{changed, setChanged}}/>
            </div>
          )
        })}
        <NewGarageForm change= {{changed, setChanged}}/>
      </main>
    </div>
  )
};

export default GaragesPage;