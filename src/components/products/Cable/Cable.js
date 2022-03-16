import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ep1 from './img/utpszurke.png';
import c2 from './img/utp10m1.jpg';
import c3 from './img/hdmi1.jpg';
import c4 from './img/usb1.jpg';

export default function Cable() {

    return (

        <div className='section'>
            <div className='container'>
                <div className="row">
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={ep1} />
                            <Card.Body>
                                <Card.Title>ROLINE UTP CAT6 PATCH KÁBEL 1 méteres</Card.Title>
                                <Card.Text>
                                    Típus: UTP Patch kábel
                                    Hossz: 1 méter
                                    Szabvány: Cat6
                                    Csatlakozók: RJ45
                                    Szín: szürke
                                </Card.Text>
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={c2} />
                            <Card.Body>
                                <Card.Title>UTP Cat6 patch kábel 10 m DK-1617</Card.Title>
                                <Card.Text>
                                    Típus: UTP Patch kábel
                                    Hossz: 10 méter
                                    Szabvány: Cat6
                                    Csatlakozók: RJ45
                                    Szín: szürke
                                </Card.Text>
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={c3} />
                            <Card.Body>
                                <Card.Title>HDMI kábel 3m AK-330114-030-S</Card.Title>
                                <Card.Text>
                                    HDMI kábel 
                                    TV-hez, Monitorhoz, Számítógéphez használható
                                    1080P 60Hz  , Full HD, 3D
                                </Card.Text>
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={c4} />
                            <Card.Body>
                                <Card.Title>Goobay 93999 USB 3.0 hosszabbító kábel 3m</Card.Title>
                                <Card.Text>
                                Alap szín:Fekete, Csatlakozó 1:USB 3.0 apa, Csatlakozó 2:USB 3.0 anya
                                </Card.Text>
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    )
}