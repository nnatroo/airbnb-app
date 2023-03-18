import React from 'react'
import classes from "../Modules/ApartamentImage.module.css";

const ApartamentImage = (props) => {
    return (
        <img style={{width: props.width, height: props.height}} className={classes.image} loading="lazy" src={props.src} alt={"Apartment"}/>
    );

}
export default ApartamentImage;