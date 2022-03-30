
import classes from './MealForm.module.css';

const MealForm =(props) => {
    return (
        <div className={classes.inputMain} >
            <div>
            <label className={classes.inputLabel} >Amount  </label>
            <input type="text" className={classes.inputField} />
            </div>
            <div>
                <button className={classes.button} >+Add</button>
            </div>
        </div> 

    )
}

export default MealForm;