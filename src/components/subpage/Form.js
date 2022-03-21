import React from 'react';
import { useState } from "react";
import Adat from "./regist.json";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';

export default function App() {

    const [adat, setAdat] = useState({});
    const [name, setName] = useState('');
    const [goodname, setgoodName] = useState(true);
    const [login, setLogin] = useState('');
    const [goodlogin, setgoodLogin] = useState(true);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [goodpassword, setgoodPassword] = useState(true);
    const [birth, setBirth] = useState('');

    const send = () => {
        setAdat(Adat.push({ name: name, login:login, password:password, birth:birth }));
        console.log(Adat);  
    }


    function vizsgal() {

        if (name.length >= 3 && name.match(" ")) setgoodName(true)
        else setgoodName(false);

        if (login.length > 6 && login.length < 20 && !login.match(" ") && login == login.toLowerCase()) setgoodLogin(true)
        else setgoodLogin(false);

        if (password.length > 7 && password.length < 17 && password == password2) setgoodPassword(true)
        else setgoodPassword(false);

        return send();        



    }

    return (
        <>
            <h4>Regisztráció</h4>

            <div className="col-md-6">
                <label for="formGroupExampleInput" class="form-label">Név</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="név vagy cégnév" onChange={(e) => setName(e.target.value)} /><label className='hibauzi'>{goodname ? '' : 'Hibás név formátum!'}</label>
            </div>
            <div className="col-md-6">
                <label for="formGroupExampleInput" class="form-label">Felhasználónév</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="csupa kisbetű-ékezet nélkül-szóköz nélkül" onChange={(e) => setLogin(e.target.value)} /><label className='hibauzi'>{goodlogin ? '' : 'Hibás felhasználónév formátum! (csak kisbetű, minimum 6, maximum 20 karakter, szóköz nélkül)'}</label>
            </div>
            <div className="col-md-6">
                <label for="inputPassword1" className="form-label">Jelszó</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="minimum 8, maximum 16 karakter(kis/nagybetű és szám)" onChange={(e) => setPassword(e.target.value)}/><label className='hibauzi'>{goodpassword ? '' : 'Hibás jelszó formátum, vagy nem egyezik a két jelszó!'}</label>
            </div>
            <div className="col-md-6">
                <label for="inputPassword2" className="form-label">Jelszó mégegyszer</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="minimum 8, maximum 16 karakter(kis/nagybetű és szám)" onChange={(e) => setPassword2(e.target.value)}/><label className='hibauzi'>{goodpassword ? '' : 'Hibás jelszó formátum, vagy nem egyezik a két jelszó!'}</label>
            </div>
            <div className="col-md-6">
                <label for="date" className="form-label">Születési dátum (magánszemély esetében):</label>
                <input type="date" className="form-control" id="date" placeholder="" onChange={(e) => setBirth(e.target.value)}/>
            </div>


            <Form>                
                
                <Form.Group>
                    <Form.Label>Email cím:</Form.Label>
                    <Form.Control type="email"
                        placeholder="" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Telefonszám:</Form.Label>
                    <Form.Control type="number"
                        placeholder="pl:301234567" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Adószám (cég esetében):</Form.Label>
                    <Form.Control type="number"
                        placeholder="" />
                </Form.Group>
                <h4>Számlázási cím:</h4>
                <Form.Group>
                    <Form.Label>Irányítószám:</Form.Label>
                    <Form.Control type="number"
                        placeholder="" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Város:</Form.Label>
                    <Form.Control type="text"
                        placeholder="" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Utca:</Form.Label>
                    <Form.Control type="text"
                        placeholder="" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Házszám:</Form.Label>
                    <Form.Control type="number"
                        placeholder="" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>További cím adat:</Form.Label>
                    <Form.Control type="text"
                        placeholder="épület, házbetű, emelet, ajtó" />
                </Form.Group>

                <div className="shiping-details">
                    <div className="input-checkbox">
                        <input type="checkbox" id="shiping-address" />
                        <label for="shiping-address">
                            <span></span>
                            A szállítást más címre kérem!
                        </label>
                        <div className="caption">
                            <h4>Szállítási cím:</h4>
                            <Form.Group>
                                <Form.Label>Irányítószám:</Form.Label>
                                <Form.Control type="number"
                                    placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Város:</Form.Label>
                                <Form.Control type="text"
                                    placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Utca:</Form.Label>
                                <Form.Control type="text"
                                    placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Házszám:</Form.Label>
                                <Form.Control type="number"
                                    placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>További cím adat:</Form.Label>
                                <Form.Control type="text"
                                    placeholder="épület, házbetű, emelet, ajtó" />
                            </Form.Group>
                        </div>
                    </div>
                </div>


            </Form>
            <button class="btn btn-primary gomb" onClick={() => vizsgal()}>Regisztrálok!</button>

        </>
    );
}