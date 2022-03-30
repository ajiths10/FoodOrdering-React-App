import {Fragment } from 'react';
import HaederCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'


const Header = (props) => {

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>KingMeals</h1>
                <HaederCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of decicious food!" />
            </div>
        </Fragment>
    )
};

export default Header;