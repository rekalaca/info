import React from 'react';
import sh1 from '../img/shop01.png'
import sh2 from '../img/shop02.png'
import sh3 from '../img/shop03.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

export default function Section(){
    return(
        <div class="section">

        <Container>

            <div class="row">

                <div class="col-md-4 col-xs-6">
                    <div class="shop">
                        <div class="shop-img">
                            <img src={sh1} alt=""/>
                        </div>
                        <div class="shop-body">
                            <h3>PC és <br></br>Laptop</h3>
                            <a href="pclapt.html" class="cta-btn">Vedd meg most! <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4 col-xs-6">
                    <div class="shop">
                        <div class="shop-img">
                            <img src={sh2} alt=""/>
                        </div>
                        <div class="shop-body">
                            <h3>WiFi<br></br>Router</h3>
                            <a href="#" class="cta-btn">Vedd meg most! <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-xs-6">
                    <div class="shop">
                        <div class="shop-img">
                            <img src={sh3} alt=""/>
                        </div>
                        <div class="shop-body">
                            <h3>Periféria és<br></br>Kábel</h3>
                            <a href="#" class="cta-btn">Vedd meg most! <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>

            </div>

        </Container>

    </div>
    )
}