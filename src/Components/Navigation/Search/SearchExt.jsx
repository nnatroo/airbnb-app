
import classes from "../../Modules/SearchExt.module.css";
import backdrop from "../../Modules/Languages.module.css";

const SearchExt = (props) => {
    return <>
        <div className={backdrop.backdrop} onClick={props.cancelHighlight}></div>
        <div className={classes.searchExt}>
            <div className={classes.searchExtInput}>
                <div className={classes.searchDest}>
                    <span>Where</span>
                    <input type="text" name="where" placeholder="search destinations"/>
                </div>
                <div className={classes.searchInputValues}>
                    <small>Check In</small>
                    <span>Add Dates</span>
                </div>
                <div className={classes.searchInputValues}>
                    <small>Check Out</small>
                    <span>Add Dates</span>
                </div>
                <div className={classes.searchExtBtn}>
                    <div className={classes.addGuests}>
                    <small>Who</small>
                    <span>Add Guests</span>
                    </div>
                    <div className={classes.magnifyingGlassIcon}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default SearchExt;