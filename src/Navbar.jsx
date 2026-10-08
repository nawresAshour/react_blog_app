// import { Link } from "react-router";

// const Navbar = () => {
//     return ( 
//         <nav className="navbar">
//             <Link to="/" ><h1>NOSS</h1></Link>
//             <div className="links">
//                 <Link to="/">Home</Link>
//                 <Link to="/Create" style={{
//                     color:'white', backgroundColor:'#51031b' , borderRadius:'8px'
//                 }}>New Blog</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/contact">Contact US</Link>

//             </div>
//         </nav>
//      );
// }
 
// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
 
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
 
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <h1>NOSS</h1>
      </Link>
 
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
 
      {/* Navigation Links */}
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link
          to="/Create"
          className="create-link"
          onClick={handleLinkClick}
        >
          New Blog
        </Link>
        <Link to="/about" onClick={handleLinkClick}>
          About
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          Contact US
        </Link>
      </div>
    </nav>
  );
};
 
export default Navbar;
 