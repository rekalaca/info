import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Cimlap from './components/Cimlap';
import Footer from './components/Footer';
import './css/style.css';
import Rolunk from './components/Rolunk';
import Asd from './components/Asd';

const App = () => (
<div>
  
<BrowserRouter>
<Header/>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Cimlap />} />
          <Route path="rolunk" element={<Rolunk/>} />
          <Route path="asd" element={<Asd/>} />
        </Route>
      </Routes>
    </BrowserRouter>
<Footer />
</div>
);

export default App;