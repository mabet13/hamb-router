import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
<<<<<<< HEAD
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
=======
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
<<<<<<< HEAD
        purchasing: false
    }

    componentDidMount () {
        console.log(this.props); 
        this.props.onInitIngredients();
=======
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        console.log(this.props);
        // axios.get( 'https://react-my-burger.firebaseio.com/ingredients.json' )
        //     .then( response => {
        //         this.setState( { ingredients: response.data } );
        //     } )
        //     .catch( error => {
        //         this.setState( { error: true } );
        //     } );
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
    }

    updatePurchaseState ( ingredients ) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        return sum > 0;
    }

    purchaseHandler = () => {
<<<<<<< HEAD
        if (this.props.isAuthenticated) {
            this.setState( { purchasing: true } );
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
=======
        this.setState( { purchasing: true } );
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
    }

    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    }

    purchaseContinueHandler = () => {
<<<<<<< HEAD
        this.props.onInitPurchase();
=======
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
        this.props.history.push('/checkout');
    }

    render () {
        const disabledInfo = {
            ...this.props.ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
<<<<<<< HEAD
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
=======
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1

        if ( this.props.ings ) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
<<<<<<< HEAD
                        isAuth={this.props.isAuthenticated}
=======
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
                        price={this.props.price} />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
<<<<<<< HEAD
=======
        if ( this.state.loading ) {
            orderSummary = <Spinner />;
        }
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
<<<<<<< HEAD
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
=======
        ings: state.ingredients,
        price: state.totalPrice
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
    };
}

const mapDispatchToProps = dispatch => {
    return {
<<<<<<< HEAD
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
=======
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( BurgerBuilder, axios ));