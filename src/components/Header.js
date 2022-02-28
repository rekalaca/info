import React from 'react';
import p1 from '../img/product01.png'; import logo from '../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

export default function Header() {
    return (
        <header>

            <div id="header">
                <Container>
                    <Row>
                        <Col sm={9}>
                            <ul className="header-links pull-left">
                                <li><a href="tel:+36304442569"><i className="fa fa-phone"></i> +36-30-123-45-67</a></li>
                                <li><a href="mailto: rekalaca@rekalaca.com"><i className="fas fa-at"></i>info@infotech.com</a></li>
                                <li><a href="#"><i className="fa fa-map-marker"></i> 4400 Nyíregyháza Info utca 1.</a></li>
                            </ul>
                        </Col>
                        <Col sm={3}>

                            <ul className="header-links pull-right">
                                <li><a href="#"><i className="fa fa-credit-card"></i> HUF</a></li>
                                <li><a href="#"><i className="fa fa-user"></i> Felhasználói fiókom</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>    

                <Container>
                    <Row>   
                        <Col sm={3}>
                            <div className="header-logo">
                                    <img src={logo} alt="" />
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="header-search">
                                <form>
                                    <select className="input-select">
                                        <option value="0">Kategóriák</option>
                                        <option value="1">Routerek</option>
                                        <option value="1">Laptopok</option>
                                        <option value="1">Kiegészítők</option>
                                    </select>
                                    <input className="input" placeholder="Keresett eszköz" />
                                    <button className="search-btn">Keresés</button>
                                </form>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="header-ctn">
                                <div className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        <i className="fa fa-shopping-basket"></i>
                                        <span>Kosarad</span>
                                        <div className="qty">2</div>
                                    </a>
                                    <div className="cart-dropdown">
                                        <div className="cart-list">
                                            <div className="product-widget">
                                                <div className="product-img">
                                                    <img src={p1} alt="" />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-name"><a href="#">LENOVO V15-IIL (82C5000QHV)</a></h3>
                                                    <h4 className="product-price"><span className="qty">1x</span>279.000 Ft</h4>
                                                </div>
                                                <button className="delete"><i className="fa fa-close"></i></button>
                                            </div>

                                            <div className="product-widget">
                                                <div className="product-img">
                                                    <img src="./img/product02.png" alt="" />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-name"><a href="#">TP-Link AX1500 Next-Gen</a></h3>
                                                    <h4 className="product-price"><span className="qty">1x</span>8.990 Ft</h4>
                                                </div>
                                                <button className="delete"><i className="fa fa-close"></i></button>
                                            </div>
                                        </div>
                                        <div className="cart-summary">
                                            <small>2 db termék kiválasztva</small>
                                            <h5>Összesen: 287.990 Ft</h5>
                                        </div>
                                        <div className="cart-btns">
                                            <a href="#">Kosár tartalma</a>
                                            <a href="#">Megrendelem!  <i className="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="menu-toggle">
                                    <a href="#">
                                        <i className="fa fa-bars"></i>
                                        <span>Menu</span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

        </header>
    )
}