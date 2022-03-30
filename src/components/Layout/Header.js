import {Fragment } from 'react';
import HaederCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import Discription from '../Discription/Discription';

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
            <Discription/>
            
        </Fragment>
    )
};

export default Header;