import React from "react";
import { BrowserRouter, Routes, Route, Router, Switch } from "react-router-dom";
import Header from "./components/subpage/Header";
import Navigation from "./components/subpage/Navigation";
import Cimlap from "./components/Cimlap";
import Regist from "./components/Regist";
import Footer from "./components/subpage/Footer";
import Aszf from "./components/subpage/Aszf";
import Pc from "./components/products/Pc/Pc";
import Routers from "./components/products/Routers/Routers";
import Perifer from "./components/products/Perifer/Perifer";
import Cable from "./components/products/Cable/Cable";
import Forum from "./components/Forum";
import Szolgaltatas from "./components/Szolgaltatas";
import SearchResult from "./components/subpage/SearchResult";
import Error from "./components/Error";
import Admin from "./components/Admin";
import AdminProducts from "./components/subpage/AdminProducts.js";
import AdminUsers from "./components/subpage/AdminUsers";
import Adatvedelmi from "./components/subpage/Adatvedelmi";
import NewUsers from "./components/subpage/NewUsers";
import Garancia from "./components/subpage/Garancia";
import GoodRegist from "./components/subpage/GoodRegist";
import Rolunk from "./components/Rolunk";
import Kiszall from "./components/subpage/Kiszall";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

function App(){
  
  return(
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Cimlap />} />
          {localStorage.getItem('isAdmin') == 1 && (
            <>
              <Route path="adminproducts" element={<AdminProducts />} />
              <Route path="admin" element={<Admin />} />
              <Route path="adminusers" element={<AdminUsers />} />
            </>
          )}
          <Route path="newusers" element={<NewUsers />} />
          <Route path="rolunk" element={<Rolunk />} />
          <Route path="kiszall" element={<Kiszall />} />
          <Route path="regist" element={<Regist />} />
          <Route path="aszf" element={<Aszf />} />
          <Route path="adatvedelmi" element={<Adatvedelmi />} />
          <Route path="pc" element={<Pc />} />
          <Route path="routers" element={<Routers />} />
          <Route path="perifer" element={<Perifer />} />
          <Route path="search" element={<SearchResult  />} />
          <Route path="cable" element={<Cable />} />
          <Route path="garancia" element={<Garancia />} />
          <Route path="forum" element={<Forum />} />
          <Route path="szolgaltatas" element={<Szolgaltatas />} />
          <Route path="goodregist" element={<GoodRegist />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )

};

export default App;
