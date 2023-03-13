import classes from "../Modules/Apartament.module.css";


const Apartament = (props) => {
    return <> 
        <div className={classes['apartament-card']}>
            <div className={classes['apartment-image-div']}>
                <img loading="lazy" src={props.img} alt={"Apartment"}/>
                <i className="fa-regular fa-heart"></i>
            </div>
            

            <div className={classes['apartment-rest']}>
                <div className={classes['apartment-location-rating']}>
                    <span className={classes['apartment-location']}> {props.location} </span>
                    <span><i className="fa-solid fa-star"></i>&nbsp;<span className={classes.number}>{props.rating}</span> </span>
                </div>
                <span className={classes['apartment-description']}>{props.description} </span>
                <span className={classes['apartment-date']}>Mar <span className={classes.number}>{props.startDate}</span> - <span className={classes.number}>{props.endDate}</span> </span>
            </div>

            <span className={classes['apartment-price']}><b>$<span className={classes.number}>{props.price}</span></b>&nbsp;night</span> 
        </div>
    
    </>
}
export default Apartament;