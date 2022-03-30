import classes from './Discription.module.css';


const Discription=()=>{
    return(
        <div className={classes.mainBody}>
            <h1 className={classes.heading}>Delicious Food,Delivered To You</h1>
            <p className={classes.paragraph}>Choose your favorite meal from our broad selection of available meals ans enjoy a 
                delicious lunch or dinner at home.
            </p>
            <p className={classes.paragraph}>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by
                experience chefs!
            </p>
        </div>
    )
};

export default Discription;