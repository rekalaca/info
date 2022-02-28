import React from 'react';

import Slider from "react-slick";
import Sliderjs from './Slider';
import 'bootstrap/dist/css/bootstrap.css';
import {
 NavLink
} from 'reactstrap';

export default function Section2() {

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
                </div>
                <div className="row">
                    <Sliderjs />
                </div>
                    
            </div>

        </div>

    )
}