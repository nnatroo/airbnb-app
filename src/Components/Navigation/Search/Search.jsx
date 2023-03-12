import classes from "../../Modules/Search.module.css";

const Search = () => {
    return <>

        <div className={classes.search}>
        <li><b>Anywhere</b></li>
        <hr color="grey" />
        <li><b>Anyweek</b></li>
        <hr color="grey" />
        <li>Add Guests</li>
        <li className={classes.searchIcon}><i className="fa-solid fa-magnifying-glass"></i></li>
        </div>
    
    </>
}
export default Search;