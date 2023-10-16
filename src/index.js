import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
// import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';
import Login from './component/login';
import Home from './component/home'
import About from './component/about';
import Signup from './component/signup';
import Cart from './component/Cart';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          {/* <Route path="navbar" element={<Navbar />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />



          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





















// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <Navbar/>
//    <Home/>
//    <About/>
//    <Login/>
  
//   </React.StrictMode>
// );


// reportWebVitals();
