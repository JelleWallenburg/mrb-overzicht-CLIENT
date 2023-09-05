import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";
import authMethods from "../services/auth.service";

function SignUpPage(){
  const [user, setUser] = useState({username: "", email:"", password: ""});

  const navigate= useNavigate()

  const handleChange= (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser(user => ({...user, [name]:value}))
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    console.log("user",user)

    authMethods.signUp(user)
    .then(() => navigate('/login'))
    .catch(err => console.log(err))
  }

  return(
    <div>
      <h1>Aanmelden</h1>
      <form className="signUpForm" onSubmit={handleSignUpSubmit}>
        <label>Gebruikersnaam</label>
        <input type="text" name= "username" value= {user.username} onChange={handleChange}/>
        <label>Email</label>
        <input type="text" name= "email" value= {user.email} onChange={handleChange}/>
        <label>Wachtwoord</label>
        <input type="password" name= "password" value= {user.password} onChange={handleChange}/>
        <button type="submit">Maak account aan</button>       
      </form>
      <Link to="/login"> <button>Login </button></Link>
    </div>
  )
}
export default SignUpPage;