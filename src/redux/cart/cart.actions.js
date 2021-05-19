import {CartActionType} from './cart.types';

 export const toggleCartHidden =()=>({
    type:CartActionType.TOGGLE_CART_HIDDEN,
    
});

export const addItem = item=>({
    type:CartActionType.ADD_ITEM,
    payload:item
})

export const removeItem=item=>({
    type:CartActionType.REMOVE_ITEM,
    payload:item
})

export const decreadeQuantity=item=>({
    type:CartActionType.DECREASE_QUANTITY,
    payload:item
})