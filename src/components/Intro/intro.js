import React from 'react'

import './intro.css'
import meImg from "../../assets/me.jpg"
import hireImg from "../../assets/hiring.png"
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">

        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Smith</span> <br /> Web developer</span>
        <p className="introPara">I m a skilled web designer with experience <br /> in creating  visually appealing <br /> and user friendly websites</p>
        <Link><button className="btn"><img src={hireImg} alt="" className='hireImg'/> Hire me </button></Link>

      </div>

      <img src={meImg} alt="Profile" className="bg" />



    </section>
  )
}

export default Intro