import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName,setBtnName] = useState("Login");

  useEffect(() =>{

  },[]);
  
  const submitHandler=()=>{
    setBtnName("Logout");
  }
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img
            className="w-56"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center ">
          <ul className="flex px-10 m-4">
            <li className=" px-4"><Link to="/">Home</Link></li>
            <li className=" px-4"><Link to={"/about"}>About Us</Link></li>
            <li className=" px-4"><Link to={"/contact"}>Contact Us</Link></li>
            <li className=" px-4"><Link to={"/cart"}>Cart</Link></li>
            <button className="login-btn" onClick={submitHandler}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };