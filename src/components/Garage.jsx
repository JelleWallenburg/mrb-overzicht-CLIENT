import garagesMethods from "../services/garage.service";
import { Link } from "react-router-dom"

function Garage({garage}){

  const deleteThisGarage = () => {
    garagesMethods.deleteGarage(garage)
    window.location.reload(); //is this smart or is there a better way?
  }

  return(
    <div className="garage">
      <Link to={`/garage/${garage._id}`}><h2>{garage.garageName}</h2></Link>
      <h3>{garage.postalCode}</h3>
      <button onClick={deleteThisGarage}>Delete</button>
    </div>
  
  )
}

export default Garage;