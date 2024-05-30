import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <li>
      <img src={item.image} alt={item.name} />
      {/* <img src="apple-iphone-15-pro-1.jpg" alt="iphone" /> */}
      {item.name} - ${item.price} x {item.quantity}
      <div>
        <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY', id: item.id })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY', id: item.id })}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
