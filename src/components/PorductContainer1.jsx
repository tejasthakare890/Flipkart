// src/ProductContainer.js

import { Link } from 'react-router-dom';
import './ProductContainer1.css';

const products = [
  {
    image: '/Gym.png',
    title: 'Gym Essentials',
    discount: 'Up to 80% Off',
  },
  {
    image: 'Instruments.png',
    title: 'String Instruments',
    discount: 'Up to 70% Off',
  },
  {
    image: '/Microphones.png',
    title: 'Top Selling Microphones',
    discount: 'From ₹49',
  },
  {
    image: '/camera.png',
    title: 'Camera ',
    discount: 'Up to 80% Off',
  },
  {
    image: '/Mens.jpg',
    title: 'Mens Shoes',
    discount: 'Up to 70% Off',
  },
  {
    image: '/Cricket.png',
    title: 'Cricket bat',
    discount: 'Up to 70% Off',
  },
];

const ProductContainer1 = () => {
  return (
    <div className="product-container">
      <h2>Sports, health, &more</h2>
      
      <Link to="/Login">
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.discount}</p>
          </div>
        ))}
      </div>
      </Link>
    </div>
  );
};

export default ProductContainer1;
