import React from 'react'
import classes from "../../Modules/Search.module.css";

const Search = (props) => {
  const clickHandler = () => {
    props.isActive();
  }

  return (
    <>
      <div className={classes.search} onClick={clickHandler}>
        <li>
          <b>Anywhere</b>
        </li>
        <hr color="grey" />
        <li>
          <b>Any week</b>
        </li>
        <hr color="grey" />
        <li>Add guests</li>
        <li className={classes.searchIcon}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
      </div>
    </>
  );
};
export default Search;
