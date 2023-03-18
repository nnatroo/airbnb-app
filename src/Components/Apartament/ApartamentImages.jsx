import React from 'react'
import { useState, useLayoutEffect, useRef } from "react";
import classes from "../Modules/ApartamentImages.module.css";
import ApartamentImage from "./ApartamentImage";
import Arrow from "../UI/Arrow";

const ApartamentImages = (props) => {
  const [width, setWidth] = useState(0);
  const apartmentRef = useRef();

  let imagesAmount = props.items.length;

  useLayoutEffect(() => {
    setWidth(apartmentRef.current.clientWidth);
    const handleResize = () => {
      setWidth(apartmentRef.current.clientWidth);
    }
    window.addEventListener('resize', handleResize)
  }, []);

  let i = 0;
  const leftArrowClick = () => {
    if (i - 1 >= 0) {
      document.getElementById(
        "images" + props.id
      ).style.transform += `translateX(${width}px)`;
      i--;
    } else {
      i = imagesAmount - 1;
      document.getElementById(
        "images" + props.id
      ).style.transform = `translateX(-${(imagesAmount - 1) * width}px)`;
    }
  };

  const rightArrowClick = () => {
    
    if (i + 1 <= imagesAmount - 1) {
      document.getElementById(
        "images" + props.id
      ).style.transform += `translateX(-${width}px)`;
      i++;
    } else {
      i = 0;
      document.getElementById(
        "images" + props.id
      ).style.transform = `translateX(${0}px)`;
    }
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
