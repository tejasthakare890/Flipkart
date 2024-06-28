import React from 'react';
import OrderItem from './OrderItem';

function OrderList() {
  // Dummy data for example
  const orders = [
    {
      id: 1,
      name: 'Xclusive Plus GS82',
      status: 'Delivered',
      date: 'Jul 06, 2022',
      color: 'Assorted',
      price: '$38'
    }
  ];

  return (
    <div className="order-list">
      {orders.map(order => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderList;