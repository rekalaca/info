import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'

export default function Perifer() {

    //modal - kosárba rakom
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const path = 'http://localhost:5555';
    const [data, setData] = useState([]);
    const fetchdata = async () => {
        const result = await axios.get(`${path}/products/peripherals`)
        setData(result.data)
    }

    useEffect(() => {
        fetchdata();

    }, []);
    console.log(data)
    return (
        <div className='section'>
            <div className='container'>
                <div className="row">
                    {data.map((elem, index) => (
                        <div key={index} className='col-md-3 col-xs-6'>
                            <Card className='kartya'>
                                <Card.Img variant="top" src={`${path}/${elem.picture}`} />
                                <Card.Body>
                                    <Card.Title>{elem.name}</Card.Title>
                                    <Card.Text>
                                        {elem.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Text style={{
                                    backgroundColor: "#01FF70",
                                    borderStyle: "none",
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontWeight: "bold",
                                }}>
                                    {elem.net_value} Ft + 27% ÁFA
                                </Card.Text>
                                <Button class="btn btn-success" variant="primary" onClick={handleShow}>Kosárba rakom!</Button>
                            </Card>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Kosár tartalma:</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Ide jöhetne  kiválasztott termék...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Bezárás
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Tovább a fizetéshez
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}