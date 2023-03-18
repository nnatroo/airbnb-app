import React from 'react'
import classes from "../Modules/Arrow.module.css";

const Arrow = (props) => {

    return (
        <i onClick={props.onClick} className={(props.left ? (classes['arrow-left'] + " fa-circle-chevron-left") : (classes['arrow-right'] + " fa-circle-chevron-right")) + " fa-solid"}></i>
    )
}

export default Arrow;