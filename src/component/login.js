import React from 'react'
import './login.css';
import Bglogin from './images/loginbg.jpg';
 


// export default function login() {
const Login = () => {

  return (
    <>
      <div class="bg1">
        <img class="bg" src={Bglogin} alt='logo not found' />;
      </div>

      <div class="container">
        <h1 class="heading">Login to Food Cart</h1>
        <div class="detail-box">
          <i class="fa fa-envelope"></i>
          <input type="email" class="email" id="email" placeholder="Enter your Email" />

        </div>


        <div class="detail-box">

          <i class="fa fa-key"></i>
          <input type="password" class="password" id="password" placeholder="Enter your Password" />

        </div>

        
        <div>
          <button class="submit-btn"  >LogIn</button>
          <a href="/Signup" class="submit-btn"   >Sign up?</a>
        </div>
      </div>
    </>
  )
};
export default Login;
