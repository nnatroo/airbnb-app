import classes from '../../Modules/UserControls.module.css'

const UserControls = (props) => {
  return (
    <>
      <div className={classes.user_controls}>
          <div href='/' className={classes.user_controls_text}>Airbnb your home</div>
        <div className={classes.user_controls_globe}>
          <i className="fa-solid fa-lg fa-globe"></i>
        </div>
        <div className={classes.user_controls_profile}>
          <i className="fa-solid fa-bars"></i>
          <i style={{color: "#797979"}} className="fa-solid fa-2xl fa-circle-user"></i>
        </div>
      </div>
    </>
  );
};

export default UserControls;
