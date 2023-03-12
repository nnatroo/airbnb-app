import classes from "../Modules/Apartament.module.css";


const Apartament = (props) => {
    return <> 
        <div className={classes['apartament-card']}>
            <div className={classes['apartment-image-div']}>
                <img src={props.img} alt={"Apartment"}/>
                <i class="fa-regular fa-heart"></i>
            </div>

            <div className={classes['apartment-rest']}>
                <div className={classes['apartment-location-rating']}>
                    <span className={classes['apartment-location']}> {props.location} </span>
                    <span><i class="fa-solid fa-star"></i>&nbsp;{props.rating} </span>
                </div>
                <span className={classes['apartment-description']}>{props.description} </span>
                <span className={classes['apartment-date']}>Mar {props.startDate} - {props.endDate} </span>
            </div>

            <span className={classes['apartment-price']}><b>${props.price}</b>&nbsp;night</span> 
        </div>
    
    </>
}
export default Apartament;