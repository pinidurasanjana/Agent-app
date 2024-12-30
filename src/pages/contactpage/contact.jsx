import React from "react";
import "./contact.scss";

function ContactPage() {
  return (
    <div className="contactPage">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us for any queries or assistance.</p>
      <form>
        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
