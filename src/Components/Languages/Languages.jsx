import React from "react";
import classes from "../Modules/Languages.module.css";
import "animate.css";

const Languages = (props) => {
  const clickHandler = () => {
    props.onCancel();
  };

  return (
    <div>
      <div onClick={clickHandler} className={classes.backdrop}></div>
      <div className={`${classes.modal} `}>
        <span className={classes.title}>Suggested languages and regions</span>
        <div className={classes.buttons}>
          <ul onClick={clickHandler} className={classes.button}>
            <li>English</li>
            <li style={{ opacity: "80%" }}>United States</li>
          </ul>
          <ul onClick={clickHandler} className={classes.button}>
            <li>ქართული</li>
            <li style={{ opacity: "80%" }}>საქართველო</li>
          </ul>
          <ul onClick={clickHandler} className={classes.button}>
            <li>Русский</li>
            <li style={{ opacity: "80%" }}>Россия</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Languages;
