import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop'; // Import the main shop page component
import ShopCategory from './Pages/ShopCategory'; // Import ShopCategory component
import Cart from './Pages/Cart'; // Import Cart component
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category="men" />} />
          <Route path='/women' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
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
