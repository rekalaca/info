import React from 'react';
import p1 from '../img/product01.png';
import p2 from '../img/product02.png';
import p3 from '../img/product03.png';
import p4 from '../img/product04.png';
import p5 from '../img/product05.png';
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

export default function Section2() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="section">
            <div className="container">

                <div className="row">


                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="title">ÚJ termékek!</h3>
                            <div className="section-nav">
                                <ul className="section-tab-nav tab-nav">
                                    <li><NavLink href="/">PC & Laptop</NavLink></li>
                                    <li><NavLink href="/">WiFi router</NavLink></li>
                                    <li><NavLink href="/">PC Periféria</NavLink></li>
                                    <li><NavLink href="/">Kábel</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-12">
                        <div className="row">
                            <div className="products-tabs">
                                <Slider {...settings} >

                                    <div className="product">
                                        <div className="product-img">
                                            <img src={p1} alt="" />
                                            <div className="product-label">
                                                <span className="sale">%</span>
                                                <span className="new">ÚJ!</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Laptop</p>
                                            <h3 className="product-name"><a href="#">LENOVO V15-IIL (82C5000QHV)</a></h3>
                                            <h4 className="product-price">279.000 Ft <del className="product-old-price">299.000 Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> kosárba rakom</button>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product-img">
                                            <img src={p2} alt="" />
                                            <div className="product-label">
                                                <span className="new">ÚJ!</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">WiFi router</p>
                                            <h3 className="product-name"><a href="#">TP-Link AX1500 Next-Gen</a></h3>
                                            <h4 className="product-price">8.990 Ft <del className="product-old-price">9.990 Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> kosárba rakom</button>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product-img">
                                            <img src={p3} alt="" />
                                            <div className="product-label">
                                                <span className="new">ÚJ!</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Laptop</p>
                                            <h3 className="product-name"><a href="#">LENOVO IDEAPAD 3 15IIL05</a></h3>
                                            <h4 className="product-price">179.000 Ft <del className="product-old-price">199.000 Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> kosárba rakom</button>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product-img">
                                            <img src={p4} alt="" />
                                            <div className="product-label">
                                                <span className="new">ÚJ!</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Periféria</p>
                                            <h3 className="product-name"><a href="#">HP DESKJET 2320 ALL-IN-ONE</a></h3>
                                            <h4 className="product-price">14.990 Ft <del className="product-old-price">17.990 Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> kosárba rakom</button>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product-img">
                                            <img src={p5} alt="" />
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Kábel</p>
                                            <h3 className="product-name"><a href="#">ROLINE UTP CAT6 PATCH KÁBEL 1M</a></h3>
                                            <h4 className="product-price">790 Ft <del className="product-old-price">990 Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> kosárba rakom</button>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}