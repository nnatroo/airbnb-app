import React from 'react'
import classes from "../Modules/Apartaments.module.css";
import Apartament from "./Apartament";

const Apartaments = (props) => {
    return <div className={classes['apartaments-div']}>
        {props.items.map((apartament, index) => 
        <Apartament
            key={index}
            id={index}
            img={apartament.img}
            location={apartament.location}
            rating={apartament.rating}
            description={apartament.description}
            startDate={apartament.startDate}
            endDate={apartament.endDate}
            price={apartament.price}

        />)}
    </div>
}
export default Apartaments;