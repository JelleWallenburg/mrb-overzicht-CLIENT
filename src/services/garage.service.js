import axios from "axios";
 
const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: process.env.REACT_APP_API_URL 
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const getGarages = () => {
  const storedToken = localStorage.getItem('authToken')
  return api.get("/garages/", { headers: { Authorization: `Bearer ${storedToken}`}})
    .then(response => response.data)
    .catch(err => console.error(err))
}

const addGarage = (oneGarage) => {
  const storedToken = localStorage.getItem('authToken')
  return api.post("/garages/", {garageName: oneGarage.garageName, postalCode: oneGarage.postalCode},{headers: { Authorization: `Bearer ${storedToken}`}})
    .then(response => response.data)
    .catch(err => console.error("catch addGarage" ,err))
}

const editGarage = (id, oneGarage) => {
  const storedToken = localStorage.getItem('authToken')
  return api.put("/garages/", {_id:id,garageName: oneGarage.garageName, postalCode: oneGarage.postalCode},{headers: { Authorization: `Bearer ${storedToken}`}})
    .then(response => response.data)
    .catch(err => console.error("catch editGarage" ,err))
}


const deleteGarage= (oneGarage) => {
  const storedToken = localStorage.getItem('authToken')
  return api.delete("/garages/", {data:{_id: oneGarage._id}, headers: { Authorization: `Bearer ${storedToken}`}})
    .then(response => response.data)
    .catch(err => console.error(err))
};

const garagesMethods = {
  getGarages,
  addGarage,
  editGarage,
  deleteGarage
}

export default garagesMethods;