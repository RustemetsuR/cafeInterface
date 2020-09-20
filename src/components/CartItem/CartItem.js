import React from 'react';
import './CartItem.css';

const CartItem = props => {
    return (
        <div key={props.id} className='cartItem' onClick={props.clicked}>
            <h4 className='cartItem-name'>{props.name}</h4>
            <p className='cartItem-quantity'>x{props.quantity}</p>
            <p className='cartItem-totalPrice'>{props.totalPrice} kgs</p>
        </div>
    );
};

export default CartItem;