import React from 'react';
import { Card, Button } from 'react-bootstrap';
import bl from '../img/biglogo.png';

export default function Pc() {

    return (
        <div className='section'>
            <div className='container'>
                <div className="row">
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={bl} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={bl} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={bl} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>                        
                    </div>
                    <div className='col-md-3 col-xs-6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={bl} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>                        
                    </div>
                </div>
            </div>
        </div >





    )
}