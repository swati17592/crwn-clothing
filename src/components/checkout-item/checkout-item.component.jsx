import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: {namr, imageUrl, price, quantity} }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'></span>
        <span className='quantity'></span>
        <span className='price'></span>
        <div className='remove-item'>
        &#10005;
        </div>
    </div>
)

export default CheckoutItem;