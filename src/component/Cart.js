import React from 'react'
import './cart.css';
import emptycartbg from'./images/emptycart.png';
import Vp1 from'./images/menu-img/vp1.png';

const Cart = () => {
return ( 
<>

<section class="cart">
      <div class="order-container">
            <div class="heading">
                  <h1 ><i class="fa fa-shopping-cart"></i>Order summary</h1>
            </div>

            <div class="pizza-list">
                  <div class="item">
                        <img class="Vp1" src={Vp1} alt='logo not found' />
                              <div class="order-name">
                                    <h1>DELUXE VEGGIE</h1>
                                    <span>Medium</span>
                              </div>                        
                        <span class="quantity">1 Pcs</span>
                        <span class="price">₹300</span>
                  </div>
            </div>

            <hr/>
            <div class="total">
                  <div >
                        <span class="total-am"> Total Amount:</span>
                        <span class="amount">₹300</span>
                  </div>

                  <div>
                        <form action="" class="contain1">
                              <input class="placeholder" type="text" placeholder="Phone Number"/>
                             <div>
                                    <input class="placeholder" type="text" placeholder="Address"/>
                             </div>
                        </form>
                  <div class="hey">
                              <button class="button1" type="submit"> Order Now</button>
                              {/* <a href="/login" class="button1">Login to continue</a> */}
                        </div>
                  </div>
            </div>
      </div>








    {/* <div class="empty-cart">
         <div class="c1">
                      <h1 class="c2">Cart Empty 😕</h1>
                      <p  style={{color: '#a5a8a6'}}> You probably haven't order a pizza yet.<br/>
                        To order a pizza, go to the main page. </p>
                    
                        <img class="emptycartbg" src={emptycartbg} alt='logo not found' />
                        
                        <a href="/" class="button">Go back</a>
                        
            </div>
      </div> */}
</section>

</>
)
};
export default Cart;