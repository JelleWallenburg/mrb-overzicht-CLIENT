import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL 
});

const getVehicles = (id) => {
  const storedToken = localStorage.getItem('authToken');
  return api.get(`/vehicles/?inGarageOf=${id}`, { headers: { Authorization: `Bearer ${storedToken}`}})
    .then(response => response.data)
    .catch(err => console.error("Error getVehicles", err));
}

const addVehicle= (id, oneVehicle) => {
  const storedToken = localStorage.getItem('authToken');
  return api.post(`/vehicles/?inGarageOf=${id}`, {licensePlate: oneVehicle.licensePlate},{headers: { Authorization: `Bearer ${storedToken}`}})
  .then(response =>  response.data)
  .catch(err => console.error("Error addVehicle", err));
}

const deleteVehicle= (id, oneVehicle) => {
  const storedToken = localStorage.getItem('authToken');
  return api.delete(`/vehicles/?inGarageOf=${id}`, {data: {_id:oneVehicle._id}, headers: { Authorization: `Bearer ${storedToken}`}})
  .then(response => console.log(response.data))
  .catch(err => console.error(err))
}

const vehiclesMethods = {
  getVehicles,
  addVehicle,
  deleteVehicle
};

export default vehiclesMethods;