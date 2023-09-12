import "./App.css";
import "./index.css";

import "./scss/custom.scss"
import { Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import GaragesPage from "./pages/GaragesPage";
import GaragePage from "./pages/GaragePage";
import VehiclePage  from "./pages/VehiclePage"

//components
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignUpPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LogInPage />
            </IsAnon>
          }
        />
        <Route
          path="/garages"
          element={
            <IsPrivate>
              <GaragesPage />
            </IsPrivate>
          }
        />
        <Route
          path="/garage/:id"
          element={
            <IsPrivate>
              <GaragePage />
            </IsPrivate>
          }
        />
        <Route
          path="/vehicle/:id"
          element={
            <IsPrivate>
              <VehiclePage/>
            </IsPrivate>
          }
        />
      </Routes>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
