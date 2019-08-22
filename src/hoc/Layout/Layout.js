import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
<<<<<<< HEAD
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
=======
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

<<<<<<< HEAD
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );
=======
export default Layout;
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
