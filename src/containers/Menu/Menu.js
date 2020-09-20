import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuData, addToCart } from '../../store/actions/menuActions';
import './Menu.css';
import MenuItem from '../../components/MenuItem/MenuItem';
import Spinner from '../../components/UI/Spinner/Spinner';

const Menu = () => {

    const dispatch = useDispatch();

    const menu = useSelector(state => state.menu.menu);

    useEffect(() => {
        dispatch(fetchMenuData());
    }, [dispatch]);

    const add = id => {
        const index = menu.findIndex(menu => menu.id === id);
        dispatch(addToCart(menu[index].id));
    }

    return (
        <div className='menu-box'>
            {menu.length === 0 ?
                <Spinner />
                :
                menu.map(menu => {
                    return <MenuItem
                        key={menu.name}
                        name={menu.name}
                        image={menu.image}
                        price={menu.price}
                        add={() => add(menu.id)} />
                })}

        </div>
    );
};

export default Menu;