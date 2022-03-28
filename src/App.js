import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/subpage/Header';
import Navigation from './components/subpage/Navigation';
import Cimlap from './components/Cimlap';
import Regist from './components/Regist';
import Footer from './components/subpage/Footer';
import Aszf from './components/subpage/Aszf';
import Pc from './components/products/Pc/Pc';
import Routers from './components/products/Routers/Routers';
import Perifer from './components/products/Perifer/Perifer';
import Cable from './components/products/Cable/Cable';
import Forum from './components/Forum';
import Szolgaltatas from './components/Szolgaltatas';
import Error from './components/Error';
import GoodRegist from './components/subpage/GoodRegist';
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
          <Route path="pc" element={<Pc/>} />
          <Route path="routers" element={<Routers/>} />
          <Route path="perifer" element={<Perifer/>} />
          <Route path="cable" element={<Cable/>} />
          <Route path="forum" element={<Forum/>} />
          <Route path="szolgaltatas" element={<Szolgaltatas/>} />
          <Route path="goodregist" element={<GoodRegist/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
<Footer />
</div>
);

export default App;