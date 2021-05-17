import React from 'react';
import { CartActionType } from '../../redux/cart/cart.types';

import './cart-item.styles.scss';

const CartItem=({item:{imageUrl,name,price,quantity}})=>(
    <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
    <span className='name'>{name}</span>
    <span className='price'>{quantity} X ${price}</span>
</div>
    </div>
)

export default CartItem;
//<img alt it text for describe for pic 