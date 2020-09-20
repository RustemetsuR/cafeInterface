import React from 'react';
import './MenuItem.css';

const MenuItem = props => {
    return (
        <div className="menu-item">
            <img className="menu-food-image" src={props.image} alt={props.name}/>
            <h3 className="menu-food-name">{props.name}</h3>
            <p className="menu-food-price"> Price: {props.price} kgs</p>
            <button onClick={props.add}>Add</button>
        </div>
    );
};

export default MenuItem;