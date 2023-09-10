import { Link } from "react-router-dom"
import car from "../assets/white-sedan.jpg"

function HomePage() {

  return(
    <div>
      <p>Homepage works</p>
      {/* <img src= {car} alt="car driving" width="100%"/> */}

      <Link to="/signup"> <button>Aan de slag </button></Link>
    </div>
  )
}

export default HomePage;