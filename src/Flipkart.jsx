import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Scroll from './components/Scroll';
import ProductContainer from './components/ProductContainer';
import ProductContainer1 from './components/PorductContainer1';
import Text from './components/Text'

import FooterComponent from './components/FooterComponent';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Order from './Pages/Orders/Order'
import Wishlist from './Pages/Wishlist/Wishlist';
import Giftcard from './Pages/Giftcards/Giftcard';



function Flipkart() {
    return (
      <Router>
        <div className="Flipkart">
          <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Scroll />
                <ProductContainer />
                <ProductContainer1 />
                <Text/>
                <FooterComponent/>
              </>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Giftcard" element={<Giftcard />} />
  
  
  
  
  
  
          </Routes>
        </div>
      </Router>
    );
  }


  export default Flipkart;