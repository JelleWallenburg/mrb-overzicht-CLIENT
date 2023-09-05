import { useState, useEffect} from "react";
import Loading from "../components/Loading"
import Garage from "../components/Garage";
import NewGarageForm from "../components/NewGarageForm"

import garageMethods from "../services/garage.service"


function GaragesPage () {
  const [garages, setGarages] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getGarages() {
      try{
        const response = await garageMethods.getGarages();
        setGarages(response);
        setIsLoading(false);
      }
      catch (error) {
        console.log(error)
      }
    }
    getGarages()
  }, []) //why will adding a missing dependency blow up everything?

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
            <div className= "garage" key={garage._id}>
                <Garage garage={garage}/>
            </div>
          )
        })}
        <NewGarageForm/>
      </main>
    </div>
  )
};

export default GaragesPage;