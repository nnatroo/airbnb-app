import React from 'react'
import classes from "../Modules/Languages.module.css";

const Languages = (props) => {
  const clickHandler = () => {
    props.onCancel();
  };

  return (
    <>
      <div onClick={clickHandler} className={classes.backdrop}></div>
      <div className={classes.modal}>
      {/* <i className={`fa-solid fa-lg fa-xmark ` + classes.close}></i> */}
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
    </>
  );
};

export default Languages;
