import React, { useRef } from "react";
import "./contact.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ideazjd",
        "template_a5mfdnp",
        form.current,
        "v8zeZ5JZOQC4Ry3Cj"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactTitle">Contact me</h1>
        <span className="contactDesc">
          {" "}
          Please fill out the form below to discuss any work opportunities
        </span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" name="from_name"/>
          <input type="email" className="email" placeholder="Your email" name="your_email"/>
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
