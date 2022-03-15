import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Cimlap from './components/Cimlap';
import Regist from './components/Regist';
import Footer from './components/Footer';
import Aszf from './components/subpage/Aszf';
import Pc from './components/Pc';
import Routers from './components/Routers';
import Perifer from './components/Perifer';
import Cable from './components/Cable';
import Forum from './components/Forum';
import Szolgaltatas from './components/Szolgaltatas';
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
        </Route>
      </Routes>
    </BrowserRouter>
<Footer />
</div>
);

export default App;