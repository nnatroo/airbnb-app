import React from "react";
import AirbnbIcon from "../../UI/AirbnbIcon";
import Search from "../Search/Search";
import UserControls from "../UserControls/UserControls";
import SearchExt from "../Search/SearchExt";
// import LearnMore from "../LearnMore/LearnMore";
import "../../Modules/Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const activeHandler = () => {
    setIsActive(!isActive);
  };
  
  return (
    // style={{paddingBottom: isActive ? '4rem' : '0.7rem'}}
    <nav style={{ paddingBottom: isActive ? "10rem" : "0.7rem" }}>
      <AirbnbIcon />
      <Search isActive={activeHandler} />
      <UserControls />
    </nav>
  );
}

export default Navbar;
