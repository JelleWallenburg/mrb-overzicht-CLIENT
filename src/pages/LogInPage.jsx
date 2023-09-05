import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";

function LogInPage(){
  const [user, setUser] = useState({username: "", password: ""});
  const navigate= useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const name= e.target.name;
    const value = e.target.value;

    setUser(user => ({...user, [name]: value}))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    authMethods.logIn(user)
      .then((tokenObject) => {
        storeToken(tokenObject.authToken)
        authenticateUser()
        navigate("/garages")
      })
      .catch(err => console.error(err))
  }


  return(
    <div>
      <h1>Log in</h1>
      <form className="logInForm" onSubmit={handleLoginSubmit}>
        <label>Gebruikersnaam</label>
        <input type="text" name= "username" value={user.username} onChange={handleChange}/>
        <label>Wachtwoord</label>
        <input type="password" name= "password" value={user.password} onChange={handleChange}/>
        <button type="submit">Inloggen</button>
      </form>
    </div>
  )
}

export default LogInPage