import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pcs2 from './img/pcs2.jpg';
import routers from './img/routers.jpg';
import printers2 from './img/printers2.jpg';
import cables from './img/cables.jpg';

export default function ControlledCarousel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <a href="/pc"><img
                    className="d-block w-100 carousel"
                    src={pcs2}
                    alt="PC/Laptop"
                /></a>
                <Carousel.Caption>
                    <h3 className='caropc'>Asztali<br></br> számítógépek <br></br> Laptopok</h3>
                    <p className="caropc">Lenovo / Dell / Asus</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <a href="/routers"><img
                    className="d-block w-100 carousel"
                    src={routers}
                    alt="Routers"
                /></a>
                <Carousel.Caption>
                    <h3 className='caropc'>WiFi routerek</h3>
                    <p className='caropc'>Internetmegosztás<br></br> vezetéken vagy <br></br>vezeték nélkül…</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <a href="/perifer"><img
                    className="d-block w-100 carousel"
                    src={printers2}
                    alt="Perifériák"
                /></a>
                <Carousel.Caption>
                    <h3 className='print'>Nyomtatók</h3>
                    <p>
                        Multifunkciós nyomtatók... <br></br>Nyomtat, másol, szkennel...
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <a href="/cable"><img
                    className="d-block w-100 carousel"
                    src={cables}
                    alt="Kábelek"
                /></a>
                <Carousel.Caption>
                    <h3 className='cabl'>Kábelek</h3>
                    <p className='cabl'>
                        Lan kábelek<br></br> USB és HDMI kábelek<br></br> széles választéka
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

