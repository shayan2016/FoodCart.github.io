import { Outlet,  } from "react-router-dom";
import React from 'react'
import './navbar.css';
import logo from'./images/pizza.png';


// export default function Navbar() {
    const Navbar = () => {
  return (
      <>
       <nav id="navbar">
        <div id="logo">
             <img src={logo} alt='logo not found'/>            
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            {/* <li><a href=" #">Add restaurant</a></li> */}
            <li><a href="/cart"><i class="fa fa-shopping-cart"></i></a></li>
            {/* <li><a href="/cart">cart</a></li> */}




            <div class="top-right">
                <a href="/login">Login/Sign up</a>
                {/* <!-- <a href="#">Log in</a> --> */}
            </div>
        </ul>
    </nav>

    <Outlet />
      </>
  )
};
export default Navbar;
