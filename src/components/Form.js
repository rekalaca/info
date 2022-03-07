import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function App() {
    return (
        <>
            <Form>
                <h4>Regisztráció</h4>
                <Form.Group>
                    <Form.Label>Teljes név / cégnév:</Form.Label>
                    <Form.Control type="text"
                        placeholder="" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Felhasználónév:</Form.Label>
                    <Form.Control type="text"
                        placeholder="csupa kisbetű-ékezet nélkül-szóköz nélkül" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Jelszó:</Form.Label>
                    <Form.Control type="password"
                        placeholder="minimum 8, maximum 16 karakter(kis/nagybetű és szám)" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Jelszó mégegyszer:</Form.Label>
                    <Form.Control type="password"
                        placeholder="minimum 8, maximum 16 karakter(kis/nagybetű és szám)" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Születési dátum (magánszemély esetében):</Form.Label>
                    <Form.Control type="date"
                        placeholder="" />
                </Form.Group>
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

                <Button variant="primary" type="submit">
                    Regisztrálok !
                </Button>
            </Form>

        </>
    );
}