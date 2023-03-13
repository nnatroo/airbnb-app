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
  const [highlightNavbar, setHighlightNavbar] = useState(false);

  const cancelHighlight = () => {
    setHighlightNavbar(!highlightNavbar)
  }


  const activeHandler = () => {
    setIsActive(!isActive);
  };
  
  return <>
    <nav style={{ boxShadow: isActive && "none"}}>
      <AirbnbIcon />
      <Search isActive={activeHandler} />
      <UserControls />
    </nav>
    { isActive && <SearchExt cancelHighlight={cancelHighlight}/>}
    
  </>
}

export default Navbar;
