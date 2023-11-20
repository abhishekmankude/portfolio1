// import React from 'react'
import "../CSS/Contact.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4e0xjwi', 'template_gazymxs', form.current, 'GtQ0INZQ4haSB4B5U')
      .then((result) => {
          window.alert('form submitted');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  

    <div class="container-2">
    <div class="form-container">
      <h2>Contact us</h2>
      <form  ref={form} onSubmit={sendEmail}>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name"></input>

        <label for="email">Your E-mail</label>
        <input id="email" name="email" type="text" placeholder="Your email"></input>

        
        <label for="message">Your message</label>
        <textarea id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>

        <div class="text-right">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>

  )
}

export default Contact;