
import React, { useState } from 'react';
import './Home.css';
import imageEcho from  './Images/echo3.jpg';
import shoe1 from  './Images/shoe1.jpg';
import shoe2 from  './Images/shoe2.jpg';
import shoe3 from  './Images/shoe3.jpg';
import bag from './Images/bag.jpg';
import productData from './ProductData';
import ProductDetails from './ProductDetails';
import { Link } from 'react-router-dom';

const productsData = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10, image: './images/earpods.jpg' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 20, image: './images/iphone.jpg' },
     { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 30, image: './images/laptop.jpg' },
    { id: 4, name: 'Product 4', description: 'Description for Product 1', price: 10, image: './images/earpods.jpg' },
   
];

const Home = () => {

  
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  const handleRemove = () => {
    setSelectedProduct(null); 
  };

  const handleCancel = () => {
    setSelectedProduct(null); 
  };
  const handleClicked = () => {
    window.scrollTo(0, 0); 
  };
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to<span> E.Com </span>Online Store</h1>
  
      </header>
      
      <div className="product-list">
      
      <div className="product-list-left" >
      <Link to={`/shop`} onClick={handleClicked} className="product-link">
          <a class="swipe">Get Started <span class="container"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></span> </a>
          </Link>
        <h3>We picked some</h3>
        <span className='product-list-left-span'>cool things</span> 
        <h3>for you!*</h3>

      </div>
      <Link to={`/shop`} onClick={handleClicked} className="product-link">
      <div className="product-list-right">
      
      {productsData.map(product => (
          <div key={product.id} className="product-item" onClick={() => handleClick(product)}>

            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name} />
         
          </div>
        ))}
      </div>
      </Link>
      </div>
      
     
      <div className="sidebar">
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onRemove={handleRemove}
            onCancel={handleCancel}
          />
        )}
      </div>\ 
      <Link to={`/shop`} onClick={handleClicked} className="product-link">
      <div className='midhome'>
     <img src={imageEcho}/>
        
        <div>
          
          <p>In the Echo Chamber of Fashion, Find Your Voice</p>
          <br/>
          <p>Price : $10</p> 
        </div>
        
     </div>
     </Link>
     <div  className='shoeCollection'>
     <div>
     <h3>Shoe Collections</h3>
     </div>
     <div>
     <Link to={`/shop`} onClick={handleClicked} className="product-link">
     <a class="swipe">Get Started <span class="container"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></span> </a>
     </Link>
     
     </div>
       
     
     </div>
     <Link to={`/shop`} onClick={handleClicked} className="product-link"><div className='midimg'>
     <div className='midimg-left'>
        <img src={shoe2}/>
        <img src={shoe3}/>
      </div>
      <img src={shoe1}/>
     
     </div></Link>
     <Link to={`/shop`} onClick={handleClicked} className="product-link">
      <h2>Bag Collections</h2>
     </Link>
     <Link to={`/shop`} onClick={handleClicked} className="product-link">
     <div className='midimg2'>
    
      <img src={bag}/>
       <div className='midimg2-right'>
        <p>Leather Messenger Bag </p>
        <p>Price: $99.99</p>
        <p>Color Options: Brown, Black</p>
        <p>Material: Genuine Leather</p>
        <p> Dimensions: 15" x 12" x 4"</p>
     </div>
     
     </div>
     </Link>
     <ul className="product-list-footer">
        {productData.map(product => (
          <li key={product.id}>
          <Link to={`/shop`} onClick={handleClicked} className="product-link"> 
            <div className="product-item">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <img src={product.image} alt={product.name} className="product-image" />
             
            </div>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Home;
