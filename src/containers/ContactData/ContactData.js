import React from 'react';
import './ContactData.css';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder, changeContactData, clearContactData } from '../../store/actions/ordersActions';
import { clear } from '../../store/actions/menuActions';

const ContactData = () => {

    const name = useSelector(state => state.orders.name);
    const phone = useSelector(state => state.orders.phone);
    const street = useSelector(state => state.orders.street);

    const cart = useSelector(state => state.menu.cart);

    const dispatch = useDispatch();

    const changedData = event =>{
        const value = event.target.value;
        const targetName = event.target.name;
        dispatch(changeContactData(targetName,value));
    }

    const createFetchOrder = async event => {
        event.preventDefault();
        let foodsInCart = [];

        cart.map(cart => {
            return foodsInCart.push({
                name: cart.name,
                quantity: cart.quantity,
            });
        });

        const order = {
            contactData: {
                name: name,
                phone: phone,
                street: street,
            },
            foodsInCart,
        }

        dispatch(createOrder(order));
        dispatch(clear());
        dispatch(clearContactData());
    }





    return (
        <form className='contact-data' onSubmit={createFetchOrder}>
            <div className='form-element'>
                <label htmlFor='name'>Name: </label>
                <input onChange={changedData} value={name} placeholder='Example Examplovich' id='name' name='name' required />
            </div>
            <div className='form-element'>
                <label htmlFor='phone'>Phone Number: </label>
                <input onChange={changedData} value={phone} placeholder='0999-999-999' id='phone' name='phone' type="tel" required />
            </div>
            <div className='form-element'>
                <label htmlFor='street'>Street: </label>
                <input onChange={changedData} value={street} placeholder="Pushkin's Street" id='Street' name='street' type='text' required />
            </div>

            <button type='submit'>Create An Order</button>
        </form>
    );
};

export default ContactData;