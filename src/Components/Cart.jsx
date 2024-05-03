
import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart, closeCart }) {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Cart</h2>
             <button className="button" onClick={closeCart}>
                 <span class="X"></span>
                 <span class="Y"></span>
                 <div class="close">Close</div>
             </button>
      </div>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id}>
            <div className="cart-item">
            
              <img src ={item.image}/>
              <div>
              <span>{item.name}</span>
              <br/>
              <span>Quantity: {item.quantity}</span>
              </div>
             
              <button className='remove' onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
