import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className='main'>
      <img className='Flipkart-logo' src='/Flipkart-logo.svg' alt='Flipkart Logo' />
      <input type="text" className="Search" placeholder="Search for products, brands and more" />
      <button className='searchlogo'>
        <img className='searchlogo1' src="/vector-1.svg" alt='Search' />
      </button>
      <div id="LOGINFUNCTIONALITY">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="loginbtn">
            <img className='login' src='/login.svg' alt='Login' />
            Account
          </Dropdown.Toggle>
          <Dropdown.Menu>

            <Dropdown.Item href="/Login">
              <img className='login' src='/login.svg' alt='Login' />
              Profile
            </Dropdown.Item>
            <Dropdown.Item href="/Order">
              <img className='order' src='/order.svg' alt='order' />
              Order
            </Dropdown.Item>
              <Dropdown.Item href="/Wishlist">
                <img className='Wishlist' src='/wishlist.svg' alt='wishlist' />
                Wishlist
              </Dropdown.Item>
            <Dropdown.Item href="/Giftcard">
              <img className='rewards' src='/rewards.svg' alt='rewards' />
              Gift Card
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="/cart">
          <button className='Cart'>
            <img src='/Cart.svg' alt='Cart' />
            Cart
          </button>
        </Link>
        <Link to="/Login">
        <button className='BecomeSeller'>
          <img src='/become seller.svg' alt='Become Seller' />
          BecomeSeller
        </button>
        </Link>

      </div>
    </div>
  );
}

export default NavBar;
