
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

function NavBar() {
  const { isLoggedIn, logOutUser} = useContext(AuthContext)
  return(
    <nav>
      {isLoggedIn && (
        <>
        <button onClick={logOutUser}> Uitloggen </button>
        </>
      )}
    </nav>
  )
}

export default NavBar;