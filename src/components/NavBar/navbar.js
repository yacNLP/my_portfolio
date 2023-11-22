import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from '../../assets/ConntactMe.png'
import { Link } from "react-scroll";
import mobMenu from '../../assets/mobile_menu.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false )
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="aboutMeSection" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem">Portfolio</Link>
       {/*  <Link className="desktopMenuListItem">Clients</Link> */}
      </div>

      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact me
      </button>

      <img src={mobMenu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>

      <div className="navMenu" style={{display : showMenu? 'flex' : 'none'}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Home</Link>
        <Link activeClass="active" to="aboutMeSection" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>About</Link>
        <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Portfolio</Link>
        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Contact</Link>
       {/*  <Link className="desktopMenuListItem">Clients</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
