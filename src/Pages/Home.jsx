import React from 'react';
import {Link} from 'react-router-dom';
//import PizzaOven from '../Assets/bannerimage.jpg';


import "../Styles/Home.css";

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(https://imageio.forbes.com/specials-images/imageserve/5f974a4f5210e336503abf92/Baked-tasty-margherita-pizza-in-Traditional-wood-oven-in-Naples-restaurant--Italy-/960x0.jpg?format=jpg&width=960)`}}>
      <div className='headerContainer'>
        
        <h1> Shane's Pizza House</h1>
        <p> GRAB A SLICE</p>
        <Link to="/menu">
        <button> Order Now</button>
        </Link>
        </div>
      </div>
  )
}

export default Home
