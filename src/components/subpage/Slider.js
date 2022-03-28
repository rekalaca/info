import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import p1 from './img/product01.png';
import p2 from './img/product02.png';
import p3 from './img/product03.png';
import p4 from './img/product04.png';
import p5 from './img/product05.png';
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

    const [data, setData] = useState([]);
    const fetchdata = async () => {
		const result = await axios.get("http://localhost:5555/products")
		setData(result.data)
	}

    useEffect(() => {
		fetchdata();
		
	},[]);
    console.log(data)


    return (
        <div className="section">
            <div className="container">

                <div className="row">

                    <div className="col-md-12">

                            <div className="products-tabs">
                                <Slider {...settings} >
                                    {data.map((elem,index)=>(
                                        <div className="product" key={index}>
                                        <div className="product-img">
                                            <img src={p1} alt="" />
                                            <div className="product-label">
                                                <span className="sale">%</span>
                                                <span className="new">ÚJ!</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Laptop</p>
                                            <h3 className="product-name"><a href="#">{elem.name}</a></h3>
                                            <h4 className="product-price">279.000 Ft <del className="product-old-price">{elem.net_value} Ft</del></h4>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn">kosárba rakom</button>
                                        </div>
                                    </div>
                                    ))}
                                </Slider>
                            </div>
                    </div>

                </div>

            </div>

        </div>

    )
}