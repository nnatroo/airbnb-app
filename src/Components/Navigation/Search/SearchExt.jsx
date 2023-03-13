
import classes from "../../Modules/SearchExt.module.css";

const SearchExt = () => {
    return <>

        <div className={classes.searchExt}>
            <div className={classes.searchExtInput}>
                <div>
                    <label htmlFor="where">Where</label>
                    <input type="text" name="where" placeholder="search destinations"/>
                </div>
                <div>
                    <span>Check In</span>
                    <span>Date</span>
                </div>
                <div>
                    <span>Check Out</span>
                    <span>Add Dates</span>
                </div>
                <div>
                    <span>Who</span>
                    <span>Add Guests</span>
                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <span>Search</span>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default SearchExt;