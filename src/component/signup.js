import React from 'react'
import './signup.css';
import Bgsignup from './images/signupbg.jpg';



// export default function signin() {
    const signup = () => {
  return (
    <>
    <div class="bg2">
      <img class="bg" src={Bgsignup} alt='logo not found' />;
    </div>
    <div class="container2">
      <h1 class="heading2">Signup to Food Cart</h1>
      <div class="detail-box2">
      <i class="fa fa-user"></i>
        <input type="Name" class="email" id="Name" placeholder="Enter your Name" />


      </div>
      <div class="detail-box2">
        <i class="fa fa-envelope"></i>
        <input type="email" class="email" id="email" placeholder="Enter your Email" />

      </div>
      <div class="detail-box2">

        <i class="fa fa-key"></i>
        <input type="password" class="password" id="password" placeholder="Create your Password" />

      </div>
      <div>
      <button class="submit-btn2">SignUp</button>
      <a href="/Login" class="submit-btn2" style={{border: '0px'}} >Login?</a>

      </div>
    </div>
  </>
  )
};
export default signup;

