import React from 'react';
import logo from './img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';


export default function Header() {
    return (
        <div id='top-header'>
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
                            <li><a href="#"><i className="fa fa-user"></i>Felhasználói fiókom</a></li>
                            <li><a href="#">< i className="fa fa-shopping-basket"></i>Kosarad</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={3}>
                        <div className="col-lg-3 col-md-3 col-xs-1 fejlogo">
                            <img src={logo} alt="" />
                        </div>
                    </Col>
                    <Col sm={9}>
                        <div className="search">
                            <div className="row height d-flex justify-content-center align-items-center">
                                <div className="col-lg-9 col-md-9 col-xs-3">
                                    <div className="search"> <i className="fa fa-search"></i> <input type="text" className="form-control" placeholder="Mit szeretnél megkeresni?" /> <button className="btn btn-primary">Keresés</button> </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}