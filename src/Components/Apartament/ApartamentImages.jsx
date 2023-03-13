import {useState} from "react";
import classes from "../Modules/ApartamentImages.module.css";
import ApartamentImage from "./ApartamentImage";


const ApartamentImages = (props) => {
    const [count, setCount] = useState(0);

    return (<div className={classes['.apartment-images']}>
            {props.items.map((image, index) => 
            <ApartamentImage 
                key={index}
                id={index}
                src={image}
            />)}
            
        </div>
    );

}
export default ApartamentImages;