import classes from "../Modules/AirbnbIcon.module.css";

const AirbnbIcon = () => {
    return <> 
        <a href="/">
            <div className={classes['icon-div']}>
                <i class="fa-brands fa-airbnb"></i>
                <span className={classes.navbar_title}>airbnb</span>
            </div>
        </a>
    </>
}
export default AirbnbIcon;