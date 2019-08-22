import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
<<<<<<< HEAD
            <NavigationItems isAuthenticated={props.isAuth} />
=======
            <NavigationItems />
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
        </nav>
    </header>
);

export default toolbar;