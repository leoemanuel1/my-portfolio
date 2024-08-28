import React from 'react';

export default function ContactUs() {
  return (
    <div className="pageContainer">
    <div className="contactus-container">
      <h1 className="form-title">Contact Us</h1>
      <div className="content-wrapper">
        <img src="/img/8.jpg" alt="Description 1" className="flexbox-image2" />
        <div className="right-content">
          <div className="about-me">  
            <p>Hello!</p>
            <p>I am Leonardo, your agent! How can I help you?</p>          
          </div>
          <hr />
          <form action="submit-form.php" method="post">
            <input type="text" className="form-input" name="name" placeholder="Your Name" required />
            <input type="email" className="form-input" name="email" placeholder="Your Email" required />
            <textarea name="message" className="form-input" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="form-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
