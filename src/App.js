import './App.css';
import { Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LogInPage from './pages/LogInPage';
import GaragesPage from './pages/GaragesPage';

//components
import IsPrivate from './components/isPrivate';
import IsAnon from './components/isAnon';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path= "/" element= { <HomePage/>}/>
        <Route path= "/signup" element= { <IsAnon><SignUpPage/></IsAnon>}/>
        <Route path= "/login" element= { <IsAnon><LogInPage/></IsAnon>}/>
        <Route path= "/garages" element= { <IsPrivate><GaragesPage/></IsPrivate>}/>
      </Routes>
    </div>
  );
}

export default App;
