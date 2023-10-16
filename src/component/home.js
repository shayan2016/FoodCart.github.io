import React from 'react'
import './home.css';

import Vp1 from'./images/menu-img/vp1.png';
import Vp2 from'./images/menu-img/vp2.png';
import Vp3 from'./images/menu-img/vp3.png';
import Vp4 from'./images/menu-img/vp4.png';
import Vp5 from'./images/menu-img/vp5.png';
import Vp6 from'./images/menu-img/vp6.png';
import Vp7 from'./images/menu-img/vp7.png';
import Vp8 from'./images/menu-img/vp8.png';

import Cp1 from'./images/menu-img/cp1.png';
import Cp2 from'./images/menu-img/cp2.png';
import Cp3 from'./images/menu-img/cp3.png';
import Cp4 from'./images/menu-img/cp4.png';
import Cp5 from'./images/menu-img/cp5.png';
import Cp6 from'./images/menu-img/cp6.png';

import O1 from'./images/menu-img/o1.png';
import O2 from'./images/menu-img/o2.jpg';
import O3 from'./images/menu-img/o3.jpg';
import O4 from'./images/menu-img/o4.jpg';
import O5 from'./images/menu-img/o5.png';
import O6 from'./images/menu-img/o6.png';

import B1 from'./images/menu-img/b1.png';
import B2 from'./images/menu-img/b2.png';
import B3 from'./images/menu-img/b3.png';
import B4 from'./images/menu-img/b4.png';



 



// export default function home() {
const Home = () => {
return (
<>
  {/* -- ------home------ -- */}
  <div class="home" id="home">
    <div class="home-text">
      <h1>Food Cart </h1>
      <p>Tasty Pizzas availabe in best price </p>
      <a href="/about" class="btn">View Pizzas</a>
    </div>
  </div>

  {/* ------menu section------ */}

  {/* -----------veg pizza section---------- */}

    <section class="Vp1">
      <h1 class="heading1"> Veg Pizzas</h1>

      <div class="wrapper">



           <div class="name0">
          <img class="img" src={Vp1} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">DELUXE VEGGIE</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={Vp2} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">PEPPY PANEER</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={Vp3} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">INDI TANDOORI PANEER</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>





           <div class="name0">
          <img class="img" src={Vp4} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">FRESH VEGGIE</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>




           <div class="name0">
          <img class="img" src={Vp5} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">VEGGIE PARADISE</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>




           <div class="name0">
          <img class="img" src={Vp6} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">MEXICAN GREEN WAVE</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={Vp7} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">PEPPER BARBECUE & ONION</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>




           <div class="name0">
          <img class="img" src={Vp8} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">MARGHERITA</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>




        </div>
      

    </section>

  {/* ----------- non veg pizza section---------- */}


    <section class="Vp1">
      <h1 class="heading1">NON veg Pizzas</h1>

      <div class="wrapper">



           <div class="name0">
          <img class="img" src={Cp1} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">CHICKEN FIESTA</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={Cp2} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">INDI CHICKEN TIKKA</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={Cp3} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">CHICKEN PEPPERONI</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={Cp4} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">CHICKEN DOMINATOR</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={Cp5} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">NON VEG SUPREME</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={Cp6} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">CHICKEN SAUSAGE</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           
 

       </div>
      

    </section>



  {/* -----------other section---------- */}
  <section class="Vp1">
      <h1 class="heading1">Other Section</h1>

      <div class="wrapper">



           <div class="name0">
          <img class="img" src={O1} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">CRINKLE FRIES</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={O2} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">TACO MEXICANA NON VEG</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={O3} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">CHICKEN PARCEL
</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={O4} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">TACO MEXICANA VEG</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={O5} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">POTATO CHEESE SHOTS</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={O6} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">BROWNIE FANTASY</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>







           
 

       </div>
      

    </section>


  {/* -----------bevrages section---------- */}
  <section class="Vp1">
      <h1 class="heading1">Bevrages </h1>

      <div class="wrapper">



           <div class="name0">
          <img class="img" src={B1} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">7UP (500ML)</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={B2} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">PEPSI BLACK CAN</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={B3} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">PEPSI (500ML)</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           <div class="name0">
          <img class="img" src={B4} alt='logo not found' />
                <div class="name5">
                     <h2 class="name1">MIRINDA (500ML)
</h2>
                    <span class="name2">small</span>
                    
                       <div class="name3">
                           <span class="name4">₹250</span>
                           <button class="add-cart">+ ADD</button>
                     </div>
                 </div>
           </div>



           
 

       </div>
      

    </section>
    {/* ------------footer section --------------- */}
  
    <footer  style={{background: "#94b5b5"}}>
        <p >Follow Food Cart on</p>
        <div   class="social">
            {/* <a href="https://www.facebook.com/login/" target="_blank"><i class="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank"><i class=" fa fa-instagram"></i></a>
            <a href="https://accounts.snapchat.com/accounts/login?client_id=geo" target="_blank"><i class="fa fa-snapchat-ghost"></i></a> */}

            <a href="" ><i class="fa fa-facebook"></i></a>
            <a href="" ><i class=" fa fa-instagram"></i></a>
            <a href="" ><i class="fa fa-snapchat-ghost"></i></a>
        </div>
        <p class="end">CopyRight By Food Cart</p>
    </footer>



</>
)
};
export default Home;