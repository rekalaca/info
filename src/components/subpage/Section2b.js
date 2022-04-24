import React from 'react';
import Slider from "react-slick";
import Sliderjs from './Slider';
import ControlledCarousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav} from 'reactstrap';

export default function Section2() {

    return (
        <div className="container">
            <div className="row"  >
                <Nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <p className="news">Új termékek!</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 section-tab-nav tab-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/pc">PC/Laptop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/routers">WiFi Router</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/perifer">Periféria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/cable">Kábel</a>
                            </li>
                        </ul>
                    </div>
                </Nav>
            </div>
            <div className="row slidpage">
                <ControlledCarousel />
            </div>

        </div>

    )
}