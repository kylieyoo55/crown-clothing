
import { CartActionType } from './cart.types';
import {addItemToCart, decreaseQuantityCart} from './cart.utils';

const INITIAL_STATE={
    hidden:true,
cartItems:[]
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionType.TOGGLE_CART_HIDDEN :
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionType.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            };
        case CartActionType.REMOVE_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(
                    item=>item.id !== action.payload.id
                    ) }

        case CartActionType.DECREASE_QUANTITY:
            return {
                ...state,
                cartItems:decreaseQuantityCart(state.cartItems,action.payload)
            }

        default:
            return state;
    }
}

export default cartReducer;