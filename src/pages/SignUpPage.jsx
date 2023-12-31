import { useNavigate } from "react-router-dom";
import { useState} from "react";
import authMethods from "../services/auth.service";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
    console.log("user", user)

    authMethods.signUp(user)
    .then(() => navigate('/login'))
    .catch(err => console.log(err))
  }

  return(
    <Form onSubmit={handleSignUpSubmit} style={{padding: "10%"}}>
      <h1>Aanmelden</h1>
      <br/>
      <Form.Group className="mb-3" controlId="user">
        <Form.Label>Gebruikersnaam</Form.Label>
        <Form.Control type="text" name= "username" placeholder= "Vul gebruikersnaam in" value= {user.username} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="text" name= "email" placeholder="Vul email in" value= {user.email} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="user">
        <Form.Label>wachtwoord</Form.Label>
        <Form.Control type="password" name= "password" placeholder="Vul wachtwoord in" value= {user.password} onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">Aanmelden</Button>
    </Form>

  )
}
export default SignUpPage;