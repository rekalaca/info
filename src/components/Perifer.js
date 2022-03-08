import React from 'react';
import { Card, Button } from 'react-bootstrap';
import hpdesk1 from '../img/HPD2320/hpdesk01.jpg';
import pixma1 from '../img/Canon/pixma01.png';
import hpnk1 from '../img/HPnk/hpnk01.jpg';
import ep1 from '../img/Epson/ep01.jpg';

export default function Perifer() {

    return(

        <div className='section'>
            <div className='container'>
                <div className="row">
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={hpdesk1} />
                            <Card.Body>
                                <Card.Title>HP Deskjet 2320 All-in-One Tintasugaras Nyomtató</Card.Title>
                                <Card.Text>
                                    Többfunkciós nyomtató - Tintasugaras - Színes - Otthon / Otthoni iroda - Nyomtatás - Szkennelés - Másolás - Fehér színben
                                </Card.Text>
                                <Button variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={pixma1} />
                            <Card.Body>
                                <Card.Title>Canon PIXMA TS3450 multifunkciós tintasugaras</Card.Title>
                                <Card.Text>
                                Fényképnyomtató - Többfunkciós nyomtató - Tintasugaras - Monokróm, Színes - Otthon / Otthoni iroda - Nyomtatás - Szkennelés
                                </Card.Text>
                                <Button variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={hpnk1} />
                            <Card.Body>
                                <Card.Title>HP Deskjet Ink Advantage 3788 Multifunkciós</Card.Title>
                                <Card.Text>
                                Többfunkciós nyomtató - Tintasugaras - Színes - Otthon / Otthoni iroda - Nyomtatás - Szkennelés - Másolás - Fax - USB/WiFi
                                </Card.Text>
                                <Button variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={ep1} />
                            <Card.Body>
                                <Card.Title>Epson L3210 multifunkciós tintatartályos nyomtató</Card.Title>
                                <Card.Text>
                                Többfunkciós nyomtató - Tintasugaras - Színes - Otthon / Otthoni iroda - Nyomtatás - Szkennelés - Másolás - Fekete színben
                                </Card.Text>
                                <Button variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    )
}