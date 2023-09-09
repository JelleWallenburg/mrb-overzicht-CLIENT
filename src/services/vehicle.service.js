import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL 
});

const getVehicle = (id) => {
  const storedToken = localStorage.getItem('authToken');
  return api.get(`/vehicle/?id=${id}`, { headers: { Authorization: `Bearer ${storedToken}`}})
    .then(response => response.data)
    .catch(err => console.error("Error getVehicle", err));
}

const vehicleMethods = {
  getVehicle
};

export default vehicleMethods;