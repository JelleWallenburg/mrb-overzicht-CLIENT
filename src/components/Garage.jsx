import garagesMethods from "../services/garage.service";
import { Link } from "react-router-dom"

function Garage({garage, change}){
  const { setChanged} = change;
  setChanged(false)

  const deleteThisGarage = () => {
    setChanged(false)
    garagesMethods.deleteGarage(garage)
    .then(response => {
       setChanged(true)
    })
    .catch(err => console.error("delete this garage", err));
    setChanged(false);
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