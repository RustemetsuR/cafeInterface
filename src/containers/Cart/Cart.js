import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';
import { removeFromCart, setModal } from '../../store/actions/menuActions';
import Modal from '../../components/UI/Modal/Modal';
import ContactData from '../ContactData/ContactData';

const Cart = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.menu.cart);
    const totalPrice = useSelector(state => state.menu.totalPrice);
    const modal = useSelector(state => state.menu.modal)

    const remove = id => {
        const index = cart.findIndex(cart => cart.id === id);
        dispatch(removeFromCart(cart[index].id));
    }

    const showModal = () => {
        dispatch(setModal(true))
    }

    const hideModal = () => {
        dispatch(setModal(false));
    }


    return (
        <div className='cart-box'>
            <div className="orders-box">
                {cart.length !== 0 ? cart.map(cart => {
                    return <CartItem
                        key={cart.id}
                        clicked={() => remove(cart.id)}
                        id={cart.id}
                        name={cart.name}
                        quantity={cart.quantity}
                        totalPrice={cart.totalPrice} />
                }) :
                    <h2>Let's Add Something Delicious!</h2>}
            </div>

            <div className="prices-box">
                <p>Delivery : 150 kgs</p>
                <p>Total Price : {totalPrice} kgs</p>

                <button disabled={cart.length === 0} onClick={showModal}>Place Order</button>

                <Modal closed={hideModal} show={modal}>
                    <ContactData/>
                </Modal>
            </div>

        </div>
    );
};

export default Cart;