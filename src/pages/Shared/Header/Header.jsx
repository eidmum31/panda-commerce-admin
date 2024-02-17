import React, { useContext, useState } from "react";
import panda from "../../../assets/panda.png";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { AuthContext } from "../../../pages/Providers/Authprovider";
import { Link } from "react-router-dom";
const Header = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut();
  }
  return (
    <div className="navbar  bg-base-300 p-3">
      <div className="navbar-start">
       
        <img className="h-[70px]" src={panda}></img>
      </div>
    
      <div className="navbar-end">
        
        
        
        {
            user&&<>
            <Link className="btn me-2 disabled">{user?.email}</Link>
            <Link onClick={handleLogOut} className="btn">Log Out</Link>
            </>
        }
        
      </div>
    </div>
  );
};

export default Header;
