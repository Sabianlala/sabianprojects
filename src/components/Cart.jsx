import React, { useState , useEffect } from 'react';
import Navbar from './Navbar';
import './Cart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Cart = ({ cartItems , setCartItems}) => {
  const [items, setItems] = useState(cartItems);

  useEffect(() => {
    const updatedItems = cartItems.map((item) => {
      if (!item.quantity) {
        return { ...item, quantity: 1 };
      }
      return item;
    });
    setItems(updatedItems);
  }, [cartItems]);

  const handleIncrement = (productId) => {
    const updatedItems = items.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };
  
  const handleDecrement = (productId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === productId) {
        const updatedQuantity = item.quantity - 1;
        if (updatedQuantity === 0) {
          return null;
        }
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });

    const filteredItems = updatedItems.filter((item) => item !== null);
    setCartItems(filteredItems)};

  
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  
  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h1 className='h1-cart'><AiOutlineShoppingCart/>Your Cart</h1>
        {items.length === 0 ? (
          <h3 className='h3-cart empty-carts'>Your cart is empty.</h3>
        ) : (
          <div>
            <div className="row">
            {items.map((item) => (
          <div className="col-md-2" key={item.id}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.title} width={"150px"} height={"400px"} />
              <div className="card-body">
              <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="d-flex justify-content-center">
                <button className="btn btn-danger btn-lg me-2" onClick={() => handleDecrement(item.id)}>-</button>
                <button className="btn btn-success btn-lg me-5" onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              </div>
              </div>
              </div>
            ))}
            </div>
            <h3 className='h3-cart sticky-cart'>Total: ${getTotalPrice()}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;