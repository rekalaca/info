import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Outlet, Link } from "react-router-dom";

export default function Navigation() {
    return (

        <>
            <Navbar bg="dark" variant="light">
                <Container>
                    <Nav>
                        
                        <ul className="section-tab-nav tab-nav">
                            <li><NavLink href="/">Címlap</NavLink></li>
                            <li><NavLink href="/rolunk">Rólunk</NavLink></li>
                            <li><NavLink href="/asd">Regisztráció</NavLink></li>
                            <li><NavLink href="/">Szolgáltatásaink</NavLink></li>
                            <li><NavLink href="/">PC/Laptop</NavLink></li>
                            <li><NavLink href="/">WiFi Router</NavLink></li>
                            <li><NavLink href="/">Periféria</NavLink></li>
                            <li><NavLink href="/">Fórum</NavLink></li>
                            <li><NavLink href="/">Vásárlási információk</NavLink></li>
                        </ul>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}