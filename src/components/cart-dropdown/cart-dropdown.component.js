import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {createStructuredSelector} from 'reselect';

import './cart-dropdown.styles.scss';

const CartDropdown =({total,cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>

{
    
    cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />
        ))
}


        {cartItems.length?
        (
     
  
     <div className='total-price'>

<span>Total:</span>
<span> ${total}</span>
</div>
       

        ) :
        (<span className='empty-message'>
        Your Cart is Empty</span>
        )}
 

        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }
        }>
        GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps=createStructuredSelector({
cartItems:selectCartItems,
total:selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

