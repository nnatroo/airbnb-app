import React from "react";
import AirbnbIcon from "../../UI/AirbnbIcon";
import Search from "../Search/Search";
import UserControls from '../UserControls/UserControls'
import classes from "../../Modules/Navbar.module.css";

function Navbar(){
    return (
        <nav>
            <AirbnbIcon />
            <Search />
            <UserControls />
        </nav>
    )
}

export default Navbar;