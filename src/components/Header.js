import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

export const Header = () => {
  const [btnName,setBtnName] = useState("Login");

  useEffect(() =>{

  },[]);
  
  const submitHandler=()=>{
    setBtnName("Logout");
  }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={submitHandler}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };