import React from 'react';
import { Card, Button } from 'react-bootstrap';
import d1 from './img/DellPc/dell.jpg';
import lv151 from './img/LenovoV15/product01.png';
import lvide from './img/LenovoIdea/lenovide4.jpg';
import seri from './img/Serioux/serioux.png';

export default function Pc() {

    return (
        <div className='section'>
            <div className='container'>
                <div className="row">
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={d1} />
                            <Card.Body>
                                <Card.Title>DELL VOSTRO 3681</Card.Title>
                                <Card.Text>
                                    Intel® Core™ i3-10100 Processor (6M Cache, up to 4.30 GHz) - Microsoft Windows 10 Professional - 4GB DDR4 2666MHz RAM - 256GB M.2 PCIe SSD- Intel® UHD Graphics 630...
                                </Card.Text>
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={lv151} />
                            <Card.Body>
                                <Card.Title>LENOVO V15-IIL 82C5000QHV</Card.Title>
                                <Card.Text>
                                    Intel®Core™i7 - Windows 10 Pro - 15,6" FHD (1920 x 1080) - 16 GB DDR4 - NVIDIA®GeForce®MX110 2 GB VRAM -802.11 2x2 AC + Bluetooth® 5.0...
                                </Card.Text>
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={lvide} />
                            <Card.Body>
                                <Card.Title>LENOVO IDEAPAD 3 15IIL05</Card.Title>
                                <Card.Text>
                                    Intel® Core™ i3-1005G1 processzor - 1,2 GHz-Videókártya - 8 GB Merevlemez méret - 15,6 inch Kijelző felbontása 1920x1080 - WIN 10...
                                </Card.Text>
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={seri} />
                            <Card.Body>
                                <Card.Title>ASUS SRX-59490885 Gaming</Card.Title>
                                <Card.Text>
                                    AMD Ryzen 7 3700X (3,60-4,40 GHz/32 MB) - 16 GB DDR4 3000 MHz - 1TB HDD+256 GB SSD - nVidia GeForce GTX 1660 Ti (6 GB VRAM)
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