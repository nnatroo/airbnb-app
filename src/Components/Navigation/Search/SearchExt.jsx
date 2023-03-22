import React from 'react'
import classes from "../../Modules/SearchExt.module.css";
import backdrop from "../../Modules/Languages.module.css";
import 'animate.css';

const SearchExt = (props) => {


  return (
    <>
      <div className={`${classes.searchExt} animate__animated animate__slideInDown animate__faster`}>
        <div className={classes.searchExtInput}>
          <div className={classes.searchDest}>
            <span>Where</span>
            <input type="text" name="where" placeholder="search destinations" />
          </div>
          <div className={classes.searchInputValues}>
            <small>Check In</small>
            <span>Add Dates</span>
          </div>
          <div className={classes.searchInputValues}>
            <small>Check Out</small>
            <span>Add Dates</span>
          </div>
          <div className={classes.searchExtBtn}>
            <div className={classes.addGuests}>
              <small>Who</small>
              <span>Add Guests</span>
            </div>
            <div className={classes.magnifyingGlassIcon}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ zIndex: "100" }}
        className={backdrop.backdrop}
        onClick={props.cancelHighlight}
      />
    </>
  );
};

export default SearchExt;
