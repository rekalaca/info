import React from 'react';
import { Card, Button } from 'react-bootstrap';
import tpax10 from '../img/product02.png';
import as55 from '../img/AsusRT55/asusrt01.jpg';
import tpmr01 from '../img/TpMR100/tl-mr100.jpg';
import ten01 from '../img/Tenda/tenda01.jpg';


export default function Routers() {

    return (
        <div className='section'>
            <div className='container'>
                <div className="row">
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={tpax10} />
                            <Card.Body>
                                <Card.Title>TP-Link Archer AX10 AX1500</Card.Title>
                                <Card.Text>
                                    Adatátviteli sebesség: 1201 + 300 Mbps
                                    Szabvány: IEEE 802.11ax/a/n/b/g/ac
                                    Titkosítás: WEP, WPA/WPA2, WPA/WPA2-PSK
                                </Card.Text>
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={as55} />
                            <Card.Body>
                                <Card.Title>Asus RT-AX55 AX1800 Mbps Dual-band</Card.Title>
                                <Card.Text>
                                    Kétsávos WiFi 6 (802.11ax)
                                    Adatátviteli sebesség: 1201+574 Mbps
                                    Szabvány: 802.11 a/b/g/n/ac/ax
                                    Titkosítás: WPA, WPA2 , WPA3, WPS
                                </Card.Text>
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={tpmr01} />
                            <Card.Body>
                                <Card.Title>TP-Link TL-MR100 4G Modem + Wireless Router</Card.Title>
                                <Card.Text>
                                    Adatátviteli sebesség: 300 Mbps
                                    Szabvány: IEEE 802.11b/g/n
                                    Titkosítás: WEP, WPA/WPA2, WPA/WPA2-PSK
                                    Vezetékes hálózati sebesség 10/100 Mbps
                                </Card.Text>
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={ten01} />
                            <Card.Body>
                                <Card.Title>Tenda AC6 1200Mbps kétsávos wifi router</Card.Title>
                                <Card.Text>
                                    Adatátvitel: akár 1167Mbps
                                    Szabványok: IEEE 802.11ac/a/n 5GHz, IEEE 802.11b/g/n 2.4GHz
                                    Titkosítás: WPA-PSK/WPA2-PSK, WPA/WPA2
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