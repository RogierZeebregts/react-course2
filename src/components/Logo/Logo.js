import React from 'react';
import LogoImage from '../../assets/images/logo.png';
import classes from './logo.module.css'

const Logo = props => (
    <div className={classes.Logo}>
        <img src={LogoImage} alt="MyBurger"/>
    </div>
)

export default Logo
