import React from "react";
import "./Aboutus.css";

function AboutContact() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About RentSmart</h1>
        <p className="about-text">
          RentSmart is a leading platform dedicated to making renting smarter,
          easier, and more accessible. Whether it's gadgets, tools, or lifestyle
          products – we believe in affordability and convenience.
        </p>
        <p className="about-text">
          Our mission is to help people save money and resources through a
          sustainable rental model, without compromising on quality or comfort.
        </p>
      </div>

      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        <p>
        Email:{" "}
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=nkmudafale192@gmail.com&su=Query%20Regarding%20RentSmart"
  target="_blank"
  rel="noopener noreferrer"
>
  nkmudafale192@gmail.com
</a>

      </p>
        <p className="contact-item">
          📞 <strong>Phone:</strong> +91 810-300-6948
        </p>
        <p className="contact-item">
          📍 <strong>Address:</strong> 202, TechHub Tower, Indore, India
        </p>
      </div>
    </div>
  );
}

export default AboutContact;
  