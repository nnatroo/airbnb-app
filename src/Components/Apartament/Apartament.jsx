import classes from "../Modules/Apartament.module.css";
import ApartamentImages from "./ApartamentImages";

const Apartament = (props) => {
    return <> 
        <div className={classes['apartament-card']}>
            <div className={classes['apartment-image-div']}>
                    <ApartamentImages id={props.id} items={[props.img, "https://a0.muscache.com/im/pictures/miso/Hosting-666292570835609608/original/321b15ba-1b3b-4ebb-ad33-b5b2344d05f7.jpeg?im_w=720", props.img, "https://a0.muscache.com/im/pictures/miso/Hosting-666292570835609608/original/321b15ba-1b3b-4ebb-ad33-b5b2344d05f7.jpeg?im_w=720", props.img]}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
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