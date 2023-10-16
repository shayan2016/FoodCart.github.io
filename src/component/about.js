import React from 'react'
import './about.css';

// export default function about() {
    const About = () => {
  return (
    // <!-- -------About 0 start here---------->
<>
    <div class="about-bg0">
        <div class="heading-site0">

            <h2>ABOUT US </h2>
        </div>
    </div>
    {/* // <!-- -------About 1 start here----------> */}

    <section class="about-bg1">
        <div class="content-site1">
            <p>For us, it's not just about bringing you good food from your favourite restaurants. It's about making a
                connection, which is why we sit down with the chefs,</p>
            <p> dreaming up menus that will arrive fresh and full of flavour Try us!</p>
        </div>

    </section>
    {/* // <!-- -------About 2 start here----------> */}
    <section class="about-bg2">
        <div class="heading-site2">
            <h2>HOW IT WORKS</h2>
            <ul class="content-site2">
                <li><i class="fa fa-shopping-cart"><span>_</span>ORDER</i></li>
                <li><i class="fa fa-bed"></i><span>_</span>RELAX</li>
                <li><i class="fa fa-cutlery"></i><span>_</span>ENJOY</li>
            </ul>
        </div>
    </section>
    {/* // <!-- -------About 3 start here----------> */}
    <section class="about-bg3">
        <div class="heading-site3">
            <h2>OUR MISSION</h2>
            <div class="content-site3">
                <p class="para3">"Bringing good food into your everyday. That's our mission.</p>
                <p class="para3">That means we don't just deliver--we bring it, always going the extra mile to make your
                    experience memorable.</p>
                <p class="para3">And it means this is delicious food you can enjoy everyday: from vibrant salads for
                    healthy office lunches, to indulgent family-sized pizzas, to fresh sushi for a romantic night in.
                    Whatever you crave, we can help."</p>
            </div>
        </div>

    </section>
     {/* -------About 4 start here (Footer)---------- */}
    <footer>
        <p>Follow Food Cart on</p>
        <div class="social">
            {/* <a href="https://www.facebook.com/login/" target="_blank"><i class="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank"><i class=" fa fa-instagram"></i></a>
            <a href="https://accounts.snapchat.com/accounts/login?client_id=geo" target="_blank"><i class="fa fa-snapchat-ghost"></i></a> */}

            <a href="#" ><i class="fa fa-facebook"></i></a>
            <a href="#" ><i class=" fa fa-instagram"></i></a>
            <a href=" #" ><i class="fa fa-snapchat-ghost"></i></a>
        </div>
        <p class="end">CopyRight By Food Cart</p>
    </footer>
    
    </>

  )
};
export default About;
