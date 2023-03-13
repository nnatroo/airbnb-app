import {useState} from "react";
import classes from "../Modules/ApartamentImages.module.css";
import ApartamentImage from "./ApartamentImage";
import Arrow from "../UI/Arrow";

const ApartamentImages = (props) => {
    const [count, setCount] = useState(100);

    
    const leftArrowClick = () => {
        setCount(prevValue => prevValue - 100);
        document.getElementById("images" + props.id).style.left = "-5rem"
    }

    const rightArrowClick = () => {
        setCount(prevValue => prevValue + 100);
        document.getElementById("images" + props.id).style.left = "5rem"
    }

    return (<div className={classes['.apartment-images']}>
            <div id={"images" + props.id} className={classes['images']}>
                {props.items.map((image, index) => 
                <ApartamentImage
                    key={index}
                    id={index}
                    src={image}
                />)}
            </div>
            
            <Arrow onClick={leftArrowClick} left={true}/>
            <Arrow onClick={rightArrowClick} left={false}/>
            
        </div>
    );

}
export default ApartamentImages;