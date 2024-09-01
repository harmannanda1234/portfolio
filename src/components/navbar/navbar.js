import React from "react";
import "./navbar.css";
// import logo from "../../assets/logo.png";
import contactlog from "../../assets/contact.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img src={logo} alt="H"className='logo'/> */}
      <div className="text1">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className="H">H</span>
          <span>arman</span> <span className="H">N</span>
          <span>anda</span>
        </Link>
      </div>
      <div className="deskMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="deskMenuItem"
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="deskMenuItem"
        >
          About
        </Link>

        <Link className="deskMenuItem">Portfolio</Link>

        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="deskMenuItem"
        >
          Experience
        </Link>
      </div>
      <button
        className="deskMenuBtn"
        onClick={() => {
          document
            .getElementById("contactPage")
            .scrollIntoView({ behavior: "smooth", offset: "+70" });
        }}
      >
        <img src={contactlog} alt="CONTACT" className="deskMenuImg" />
        CONTACT
      </button>
    </nav>
  );
};

export default Navbar