import {createContext, useEffect, useReducer, useState} from "react";
import PropTypes from "prop-types";
import {actionTypes} from "../actions/cart.actions";
import { cartReducer, cartInitialState} from "../reducers/cart.reducer";
import { getTotalPricesItems } from "../utils/cart.utils";


const CartContext = createContext();

const CartProvider = ({children}) => {
    const[state, dispatch] = useReducer(cartReducer, cartInitialState);

    const [orderTotal, setOrderTotal] = useState(0);

    useEffect(() => {
        //Obtener el valor total de cada grupo de productos en el carrito
            let total = getTotalPricesItems(state.cartItems).reduce((a, b) => a + b, 0);
            setOrderTotal(total);     
    }, [state]);

    function addToCart(drink) {
        dispatch({type: actionTypes.ADD_TO_CART, payload: drink});
    }

    function removeOneFromCart(idDrink) {
        dispatch({type: actionTypes.REMOVE_ONE_FROM_CART, payload:{idDrink}});
    }

    function removeAllFromCart(idDrink) {
        dispatch({type: actionTypes.REMOVE_ALL_FROM_CART, payload:{idDrink}});
    }

    function clearCart() {
        dispatch({type: actionTypes.CLEAR_CART});
        setOrderTotal(0)
    }

    function sendOrder() {
        alert(JSON.stringify(state))
    }

    const cartValues = {
        cart: state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        sendOrder,
        orderTotal
    }

    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    )
  
}
CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export {CartContext, CartProvider}