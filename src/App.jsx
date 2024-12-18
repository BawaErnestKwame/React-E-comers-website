import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop'; // Import the main shop page component
import ShopCategory from './Pages/ShopCategory'; // Import ShopCategory component
import Cart from './Pages/Cart'; // Import Cart component
import Footer from './Components/Footer/Footer';
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner}  category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner}  category="kid" />} />
          <Route path='/product'>
            <Route index element={<Product />} />
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
