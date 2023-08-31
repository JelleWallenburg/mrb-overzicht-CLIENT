import { Link } from "react-router-dom"

function HomePage() {

  return(
    <div>
      <p>Homepage works</p>

      <Link to="/signup"> <button>Aan de slag </button></Link>
    </div>
  )
}

export default HomePage;