import React from 'react';
import classes from './navigationItem.module.css'

const NavigationItem = props => (
    <li className={classes.NavigationItem}>
        <a
            href={props.link}
            className={props.active && classes.active}
        >{props.children}</a>
    </li>
)

export default NavigationItem;
