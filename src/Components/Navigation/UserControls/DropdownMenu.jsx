import React from "react";
import classes from "../../Modules/DropdownMenu.module.css";

const DropdownMenu = (props) => {
  const backdropClickHandle = () => {
    props.onCancel();
  };

  return (
    <>
      <div onClick={backdropClickHandle} className={classes["backdrop"]} />
      <div className={`${classes["dropdown-menu-container"]} animate__animated animate__bounceIn animate__faster`}>
        <ul>
          <li className={classes["dropdown-menu-item"]} id={classes["first"]}>Sign up</li>
          <li className={classes["dropdown-menu-item"]}>Log in</li>
          <hr className={classes['hr']} />
          <li className={classes["dropdown-menu-item"]}>Airbnb your home</li>
          <li className={classes["dropdown-menu-item"]}>Host an experience</li>
          <li className={classes["dropdown-menu-item"]} id={classes["last"]}>
            Help
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
