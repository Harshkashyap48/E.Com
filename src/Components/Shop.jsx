
import React, { useState ,useEffect } from 'react';
import productData from './ProductData';
import './Shop.css';
import Cart from './Cart';



function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setShowPopup(true);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
    if (!showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [showPopup]);

  
  return (
    <div>
    <button className='yourCart' onClick={toggleCart}>Your Cart</button>
     
      <ul className="product-list">
        {productData.map(product => (
          <li key={product.id}>
            <div className="product-item">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <img src={product.image} alt={product.name} className="product-image" />
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
      {showCart && <Cart cartItems={cartItems} removeFromCart={removeFromCart} closeCart={toggleCart} />}
      
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Item Added to Cart</h2>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
