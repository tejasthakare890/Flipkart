import React from 'react';
import './Cart.css';

function Cart() {
  return (
      <div className="CART">

 <div className="content">

    <img className='Cart1' src='/Cart1.png' alt='Cart1' />
        <h5 id='A1'>Missing Cart items?</h5>
        <h8 id='A2'>Login to see the items you added previously</h8>
        <a href="/login" className='login1' > 
        <h7>

        Login
        </h7>
         </a>


        <div className="footer-cart">
                <div className="headings">

                <ul>
                    <li id='i1'> Policies: Returns Policy |</li>
                    <li id='i2'> Terms of use |</li>
                    <li id='i3'> Security |</li>
                    <li id='i4'> Privacy |</li>
                    <li id='i5'> Infringement |</li>

                    <li id='i6'> © 2007-2024 Flipkart.com </li>
                    <li id='i7'> Need help? Visit the Help Center or Contact Us</li>



                </ul>
                </div>


        </div>



<div>
   
      </div>

</div>
   
</div>



  );
}

export default Cart;
