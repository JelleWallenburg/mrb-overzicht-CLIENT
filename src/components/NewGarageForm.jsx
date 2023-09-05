import { useState } from "react";

import garageMethods from "../services/garage.service"

function NewGarageForm(){
  const [garage, setGarage] = useState({garageName: '', postalCode: ''});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGarage(garage => ({...garage, [name]:value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    garageMethods.addGarage(garage)
      .then(response => {
          setGarage({garageName: '', postalCode: ''})
          window.location.reload(); //is this smart or is there a better way?
        })
      .catch(err => console.error(err))
  }

  return(
    <div className="addGarage" onSubmit={handleSubmit}>
        <form>
          <label>Garage Naam</label>
          <input type="text" name="garageName" value={garage.garageName} onChange={handleChange}/>
          <label>Postcode</label>
          <input type="text" name="postalCode" value={garage.postalCode} onChange={handleChange}/>
          <button type="submit">Voeg garage toe</button>
        </form>
    </div>
  )
};

export default NewGarageForm;