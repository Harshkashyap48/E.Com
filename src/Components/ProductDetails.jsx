
import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onRemove, onCancel }) => {
    console.log(product)
  
  if (!product) {
    return null; 
  }

  const handleRemove = () => {
    onRemove();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.name} />
      <div className="buttons">
        <button onClick={handleRemove}>Remove</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ProductDetails;
