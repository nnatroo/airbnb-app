import classes from "../Modules/ApartamentImage.module.css";

const ApartamentImage = (props) => {
    return (
        <img loading="lazy" src={props.src} alt={"Apartment"}/>
    );

}
export default ApartamentImage;