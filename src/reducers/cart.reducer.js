import {actionTypes} from "../actions/cart.actions";


export const cartInitialState = {
    cartItems: [],
}


export const cartReducer = (state, { type, payload={} }) => {
    const {idDrink} = payload

    let drinkInCart = state.cartItems.find((item) => item.idDrink === idDrink)
    
    switch (type) {
        case actionTypes.ADD_TO_CART: 
        //Saber si el prod a agregar ya esta en el carrito
            if (drinkInCart) {
                //Si ya esta el producto incrementamos en 1
                let cartItemsUpdated = state.cartItems.map(item => {
                    if (item.idDrink === idDrink) {
                       return {
                        ...item,
                        quantity: item.quantity + 1
                       }
                    }
                    return item
                });
                return{
                    ...state,
                    cartItems: cartItemsUpdated
                }
            } else {
                //Si no esta el producto, lo agregamos al carrito +1
                payload.quantity = 1
                return{
                    ...state,
                    cartItems: [...state.cartItems, payload]
                }
            }
        case actionTypes.REMOVE_ONE_FROM_CART:
            //Existe el prod en el carrito?
            if (drinkInCart.quantity > 1) {
                //Si quantity es > a 1, entonces resta 1
                let cartItemsUpdated = state.cartItems.map(item => {
                    if (item.idDrink === idDrink) {
                       return {
                        ...item,
                        quantity: item.quantity - 1
                       }
                    }
                    return item
                });
                return{
                    ...state,
                    cartItems: cartItemsUpdated
                }
            } else {
                //Si quantity es < a 1, entonces elimina el elemento de la lista
                let cartItemsUpdated = state.cartItems.filter(item => item.idDrink !== idDrink);
                return{
                    ...state,
                    cartItems: cartItemsUpdated
                }
            }
        case actionTypes.REMOVE_ALL_FROM_CART:
            if (drinkInCart) {
                let cartItemsUpdated = state.cartItems.filter(item => item.idDrink !== idDrink)
                return{
                    ...state, 
                    cartItems: cartItemsUpdated
                }  
            }
            return state;
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
    }
}