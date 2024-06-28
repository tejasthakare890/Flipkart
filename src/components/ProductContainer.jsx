// src/ProductContainer.js

import { Link } from 'react-router-dom';
import './ProductContainer.css';

const products = [
  {
    image: '/nescafe.png',
    title: 'Coffee Powder',
    discount: 'Up to 80% Off',
  },
  {
    image: 'Geared Cycles.png',
    title: 'Geared Cycles',
    discount: 'Up to 70% Off',
  },
  {
    image: '/stationery.jpg',
    title: 'Top Selling Stationery',
    discount: 'From ₹49',
  },
  {
    image: '/remote-car.png',
    title: 'Remote Control Toys',
    discount: 'Up to 80% Off',
  },
  {
    image: '/soft-toys.png',
    title: 'Soft Toys',
    discount: 'Up to 70% Off',
  },
  {
    image: '/action-toys.png',
    title: 'Best of Action Toys',
    discount: 'Up to 70% Off',
  },
];

const ProductContainer = () => {
  return (
    <div className="product-container">
      <h2>Beauty, Food, Toys & more</h2>
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

export default ProductContainer;
