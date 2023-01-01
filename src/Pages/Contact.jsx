
import React from 'react';
import '../Styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style = {{backgroundImage: `url(https://cdn.geekwire.com/wp-content/uploads/2015/05/pizza.jpg)`}}></div>
        <div className='rightSide'>
            <h1> Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder='Enter Full Name...' type="text" />
                <label htmlFor="name">Email</label>
                <input name="name" placeholder='Enter Your Email...' type="email" />
                <label htmlFor="message">Message</label>
                <textarea rows='6' placeholder='Enter Message...' name="message" required></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
