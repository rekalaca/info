
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import logo from './img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import bl from './img/logo.png';
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Modal
} from 'reactstrap';


export default function Header() {
    const navi = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(false);
    const [kosar, setKosar] = useState([])
    const [delStatus, setDelStatus] = useState(false)
    const [cartCounter, setCartCounter] = useState(0);
    const [osszeg, setOsszeg] = useState(0);
    const path = 'http://localhost:5555';
    const loginRequest = async (e) => {
        e.preventDefault();
        await axios.post(`${path}/login`, { login: login, password: password }).then(res => {
            if (res.data.id) {
                console.log(res.data)
                localStorage.setItem('id', res.data.id)
                localStorage.setItem('login', login);
                localStorage.setItem('isAdmin', res.data.isAdmin)
                setStatus(true);
                window.location.reload();
                //navi('/')
            }
            else {
                setStatus(false);
            }
        })
    }

    const cartRequest = async () => {
        await axios.post(`${path}/cart`, { id: localStorage.getItem('id') }).then(res => {
            if (res.data) {
                setKosar(res.data)
                console.log(kosar.length)
                setCartCounter(kosar.length)
                console.log()
            }
        })
    }

    const handleDelete = async (productID) => {
        const result = await axios.delete(`${path}/cart`, { data: { userID, productID } }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (result.data.status === "ok") {
            setDelStatus(true)
        }

    }




    const userID = localStorage.getItem('id')
    const loginName = localStorage.getItem('login')


    function removeLocals() {
        localStorage.removeItem('id')
        localStorage.removeItem('login')
        localStorage.removeItem('isAdmin')
        setStatus(false)
    }
    useEffect(() => {
        let sum = 0;
        for(let i=0;i<kosar.length;i++){
            sum += kosar[i].net_value;
            
        }
        setOsszeg(sum)
        if (userID) {
            setStatus(true)
        } else {
            setStatus(false)
        }
        cartRequest();
    }, [userID, delStatus,cartCounter])
    return (
        <div id='top-header'>
            <Container>
                <Row>
                    <Col sm={8}>
                        <ul className="header-links pull-left">
                            <li><a href="tel:+36304442569"><i className="fa fa-phone"></i> +36-30-123-45-67</a></li>
                            <li><a href="mailto: rekalaca@rekalaca.com"><i className="fas fa-at"></i>info@infotech.com</a></li>
                            <li><a href="#"><i className="fa fa-map-marker"></i> 4400 Nyíregyháza Info utca 1.</a></li>
                        </ul>
                    </Col>
                    <Col sm={4}>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="wrapper">
                                        <div className="logo"> <img src={bl} alt="logo" /> </div>
                                        <div className="text-center mt-4 name"> Info - Tech </div>
                                        <form className="p-3 mt-3" onSubmit={loginRequest}>
                                            <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="text" name="userName" id="userName" placeholder="felhasználónév" onChange={e => setLogin(e.target.value)} /> </div>
                                            <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> <input type="password" name="password" id="pwd" placeholder="jelszó" onChange={e => setPassword(e.target.value)} /> </div>
                                            <button className="btn mt-3" data-dismiss="modal" type="submit" >Bejelentkezés</button>
                                        </form>
                                        <div className="text-center fs-6"><a href="/regist">Regisztráljon!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {status ? <h3>{loginName}</h3> : ''}
                        {status ? <button type="button" className="btn btn-primary btn-sm gomb" onClick={removeLocals}>Kijelentkezés</button> : <button type="button" className="btn btn-primary btn-sm gomb" data-bs-toggle="modal" data-bs-target="#exampleModal">Fiókom / Bejelentkezés</button>}


                        <button type="button" className="btn btn-primary btn-sm gomb" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Kosár</button>

                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 className='kh'>A kosár tartalma:</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">

                                <div className="cart-list">
                                    {kosar.map((elem,index)=>(
                                    <div className="product-widget" key={index}>
                                        <div className="product-img">
                                            <img src={`${path}/${elem.picture}`} alt="" />
                                        </div>
                                        <div className="product-body">
                                            <h3 className="product-name"><a href="#">{elem.name}</a></h3>
                                            <h4 className="product-price"><span className="qty">1x</span>{elem.net_value}</h4>
                                        </div>
                                        <button className="delete" onClick={()=>handleDelete(elem.productID)}><i className="fa fa-close"></i></button>
                                    </div>
                                ))}
                                </div>
                                <div className="cart-summary">
                                    <small>{cartCounter} db termék kiválasztva</small>
                                    <h5>{osszeg} Ft</h5>
                                </div>
                                <div className="cart-btns">
                                    <a href="#"><button type="button" className="btn btn-success gomb">Megrendelem!</button></a>
                                </div>

                            </div>
                        </div>
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
                                    <div className="search"> <i className="fa fa-search"></i> <input type="search" className="form-control" placeholder="Mit szeretnél megkeresni?" defaultValue={()=>localStorage.getItem('term')} onChange={(e)=>localStorage.setItem('term',e.target.value)}/><button onClick={()=>navi('/search')} >Keresés</button> </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}