import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useCart();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
