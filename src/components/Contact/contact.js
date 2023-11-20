import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contactPage">
        <div className="contact">
            <h1 className="contactTitle">Contact me</h1>
            <span className="contactDesc"> Please fill out the form below to discuss any work opportunities</span>
            <form action="" className="contactForm">
                <input type="text" className="name" placeholder='Your name' />
                <input type="email" className="email" placeholder='Your email' />
                <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
            </form>
        </div>

    </section>
  )
}

export default Contact