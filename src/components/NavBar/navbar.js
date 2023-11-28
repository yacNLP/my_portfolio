import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from '../../assets/ConntactMe.png'
import { Link } from "react-scroll";
import mobMenu from '../../assets/mobile_menu.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false )

  const [offset, setOffset] = useState(-50);

  useEffect(() => {
    const handleResize = () => {
      // Ajustez ici la valeur de l'offset en fonction de la taille de l'écran
      const newOffset = window.innerWidth < 768 ? -100 : -50;
      setOffset(newOffset);
    };

    // Ajoutez un écouteur d'événements pour détecter les changements de taille de l'écran
    window.addEventListener("resize", handleResize);

    // Appelez handleResize au montage initial pour définir l'offset initial
    handleResize();

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // La dépendance vide garantit que useEffect est appelé uniquement au montage et au démontage du composant
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="aboutMeSection" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
       {/*  <Link className="desktopMenuListItem">Clients</Link> */}
      </div>

      <button className="desktopMenuBtn">
      <Link
  to="contactPage"
  spy={true}
  smooth={true}
  offset={-50}
  duration={500}
  className="desktopMenuBtn"
  activeClass="activeContactLink"
>
  <img src={contactImg} alt="" className="desktopMenuImg" />
  Contact me
</Link>

      </button>

      <img src={mobMenu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>

      <div className="navMenu" style={{display : showMenu? 'flex' : 'none'}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Home</Link>
        <Link activeClass="active" to="aboutMeSection" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>About</Link>
        <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={offset} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Portfolio</Link>
        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Contact</Link>
       {/*  <Link className="desktopMenuListItem">Clients</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
