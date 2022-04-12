import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
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

    function truncateString(str) {
        if (str.length > 30) {
          return str.slice(0, 30) + "...";
        } else {
          return str;
        }
      }
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
                                            <img src={`http://localhost:5555/${elem.picture}`}  alt="" />
                                            <div className="product-label">
                                                <span className="sale">%</span>
                                                <span className="new">ÚJ!</span>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category" alt={elem.description}>{truncateString(elem.description)}</p>
                                            <h3 className="product-name"><a href="#">{elem.name}</a></h3>
                                            <h4 className="product-price">{Math.round(elem.net_value)} Ft <del className="product-old-price">{Math.round(elem.net_value+(elem.net_value/100*5))} Ft</del></h4>
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