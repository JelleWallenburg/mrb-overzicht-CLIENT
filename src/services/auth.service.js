import axios from "axios";
 
const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005"
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const signUp = ({ username, password, course, campus }) => {
    return api.post("/auth/signup", {username, password, course, campus})
                   .then(response => response.data)
                   .catch(err => console.error(err))
}

const logIn = ({username, password}) => {
    return api.post("/auth/login", {username, password})
                .then(response => response.data)
                .catch(err => console.error(err))
}

const verifyToken = (storedToken) => {
    return api.get("/auth/verify", { headers: { Authorization: `Bearer ${storedToken}`} })
              .then(response => response.data)
              .catch(err => console.error(err))
}

const getCurrentUser = () => {
    const storedToken = localStorage.getItem('authToken')
    return api.get("/api/users", { headers: { Authorization: `Bearer ${storedToken}`} })
    .then(response => response.data)
    .catch(err => console.error(err))
}



const authMethods = {
    signUp,
    logIn,
    verifyToken,
    getCurrentUser,
}

export default authMethods;