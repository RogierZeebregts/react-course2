import React from 'react';
import classes from './navigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = _ => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
)

export default NavigationItems;
