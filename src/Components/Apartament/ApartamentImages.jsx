import { useState, useLayoutEffect, useRef } from "react";
import classes from "../Modules/ApartamentImages.module.css";
import ApartamentImage from "./ApartamentImage";
import Arrow from "../UI/Arrow";

const ApartamentImages = (props) => {
  const [count, setCount] = useState(100);
  const [width, setWidth] = useState(0);
  const apartmentRef = useRef();

  useLayoutEffect(() => {
    setWidth(apartmentRef.current.clientWidth);
  });

  const leftArrowClick = () => {
    setCount((prevValue) => prevValue - 100);
    let width = document.querySelector(
      "." + classes["images"] + " img"
    ).clientWidth;
    document.getElementById(
      "images" + props.id
    ).style.transform += `translateX(${width}px)`;
    console.log(width);
  };

  const rightArrowClick = () => {
    setCount((prevValue) => prevValue + 100);
    let width = document.querySelector(
      "." + classes["images"] + " img"
    ).clientWidth;
    document.getElementById(
      "images" + props.id
    ).style.transform += `translateX(-${width}px)`;
  };

  return (
    <div ref={apartmentRef} className={classes["apartment-images"]}>
      <div id={"images" + props.id} className={classes["images"]}>
        {props.items.map((image, index) => (
          <ApartamentImage
            key={index}
            id={index}
            src={image}
            width={width}
            height={width}
          />
        ))}
      </div>

      <Arrow onClick={leftArrowClick} left={true} />
      <Arrow onClick={rightArrowClick} left={false} />
    </div>
  );
};
export default ApartamentImages;
