import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'
import Home from './Pages/Home';
import Menu from "./Pages/Menu";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/menu" exact element={<Menu/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
