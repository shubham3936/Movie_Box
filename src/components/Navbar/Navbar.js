import React from "react";
import "./Navbar.css";
import navbar from "../../images/navbar/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar({ showSignInButton }) {

  const navigate = useNavigate();

  function goToSignInPage()
  {
    navigate("/sign-in");
  }
  return (
    <div className="navbar_container">
      <img className="navbar_logo" src={navbar} alt="logo" />
      {showSignInButton === false ? " " : <button className="navbar_button" onClick={goToSignInPage}>Sign In</button>}
    </div>
  );
}

export default Navbar;