import React from 'react';
import p1 from '../img/LenovoV15/product01.png';
import p2 from '../img/product02.png';
import p3 from '../img/product03.png';
import p4 from '../img/product04.png';
import p5 from '../img/product05.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Sliderjs() {
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
                breakpoint: 768,
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
                                            <h3 className="product-name"><a href="#">LENOVO V15-IIL (82C5000QHV) Laptop</a></h3>
                                            <h4 className="product-price">279.000 Ft <del className="product-old-price">299.000 Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn">kosárba rakom</button>
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
                                            <h3 className="product-name"><a href="#">TP-Link AX1500 Next-Gen WiFi router</a></h3>
                                            <h4 className="product-price">8.990 Ft <del className="product-old-price">9.990 Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn">kosárba rakom</button>
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
                                            <h3 className="product-name"><a href="#">LENOVO IDEAPAD 3 15IIL05 Laptop + Windows 10</a></h3>
                                            <h4 className="product-price">179.000 Ft <del className="product-old-price">199.000 Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn">kosárba rakom</button>
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
                                            <h3 className="product-name"><a href="#">HP DESKJET 2320 ALL-IN-ONE nyomtató</a></h3>
                                            <h4 className="product-price">14.990 Ft <del className="product-old-price">17.990 Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn">kosárba rakom</button>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product-img">
                                            <img src={p5} alt="" />
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Kábel</p>
                                            <h3 className="product-name"><a href="#">ROLINE UTP CAT6 PATCH KÁBEL 1 méteres</a></h3>
                                            <h4 className="product-price">790 Ft <del className="product-old-price">990 Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn">kosárba rakom</button>
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