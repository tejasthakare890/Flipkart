import React from 'react';
import Filters from './Filters';
import SearchBar from './SearchBar';
import OrderList from './OrderList';

import './Order.css'

function OrdersPage() {
  return (
    <div className="orders-page">
      <Filters />
      <SearchBar />
      <OrderList />
    </div>
  );
}

export default OrdersPage;