import React, { Component } from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = _ => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = _ => {
        this.setState(prevState => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }

    render() {
        return (
            <>
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;
