import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
      })
      .then(() => navigate("/garages"))
      .catch(err => console.error(err))
  }


  return(
      <Form onSubmit={handleLoginSubmit} style={{padding: "10%"}}>
        <h1>Log in</h1>
        <br/>
        <Form.Group className="mb-3" controlId="user">
          <Form.Label>Gebruikersnaam</Form.Label>
          <Form.Control type="text" name= "username" placeholder="Vul gebruikersnaam in" value={user.username} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control type="password" name= "password" placeholder="Vul wachtwoord in" value={user.password} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Inloggen</Button>
      </Form>
  )
}

export default LogInPage