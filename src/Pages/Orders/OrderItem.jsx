import React from 'react';
import './OrderItem.css';

function OrderItem({ order }) {
  return (
        <div className="item">
    <div className="order-item">
      <img src="./i.png" />
      <div>

        <div>{order.name}</div>
        <div>Color: {order.color}</div>
        <div>{order.price}</div>
        <div>{order.status} on {order.date}</div>
        <button id='OB'>Rate & Review Product</button>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;