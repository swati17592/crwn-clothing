import React from 'react';

import './cart-items.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, qunatity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{qunatity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;