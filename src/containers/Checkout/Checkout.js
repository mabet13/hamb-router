import React, { Component } from 'react';
<<<<<<< HEAD
import { Route, Redirect } from 'react-router-dom';
=======
import { Route } from 'react-router-dom';
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
<<<<<<< HEAD
//import * as actions from '../../store/actions/index';
=======
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/contact-data' );
    }

    render () {
<<<<<<< HEAD
        let summary = <Redirect to="/" />
        if ( this.props.ings ) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
=======
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData} />
            </div>
        );
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
    }
}

const mapStateToProps = state => {
    return {
<<<<<<< HEAD
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

export default connect( mapStateToProps )( Checkout );
=======
        ings: state.ingredients
    }
};

export default connect(mapStateToProps)(Checkout);
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
