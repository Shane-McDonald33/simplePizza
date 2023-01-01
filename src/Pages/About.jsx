import React from 'react';
import '../Styles/About.css';
function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style = {{backgroundImage: `url(https://cdn.geekwire.com/wp-content/uploads/2015/05/pizza.jpg)`}}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatibus adipisci ipsa perspiciatis laudantium veritatis, labore et est molestiae, tenetur sint voluptates. Harum voluptatum, sapiente consectetur dolor reiciendis veniam quos!</p>
      </div>
    </div>
  )
}

export default About
