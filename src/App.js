import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Cimlap from './components/Cimlap';
import Regist from './components/Regist';
import Footer from './components/Footer';
import Aszf from './components/Aszf';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Rolunk from './components/Rolunk';

const App = () => (
<div>
  
<BrowserRouter>
<Header/>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Cimlap />} />
          <Route path="rolunk" element={<Rolunk/>} />
          <Route path="regist" element={<Regist/>} />
          <Route path="aszf" element={<Aszf/>} />
        </Route>
      </Routes>
    </BrowserRouter>
<Footer />
</div>
);

export default App;