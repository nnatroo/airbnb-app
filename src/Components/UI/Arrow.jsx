import classes from "../Modules/Arrow.module.css";

const Arrow = (props) => {

    return (
        <i onClick={props.onClick} className={(props.left ? (classes['arrow-left'] + " fa-circle-left") : (classes['arrow-right'] + " fa-circle-right")) + " fa-regular"}></i>
    )
}

export default Arrow;