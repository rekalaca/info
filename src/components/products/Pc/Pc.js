import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
export default function Pc() {
    const path = 'http://localhost:5555';
    const [data, setData] = useState([]);
    const [vat, setVat] = useState([]);

    const fetchdata = async () => {
        const result = await axios.get(`${path}/products/pc`)
       // const vat = await axios.get("http://localhost:5555/vat")
        setData(result.data)
        setVat(vat.data);
    }
    useEffect(() => {
        fetchdata();

    }, []);
    console.log(data)
    console.log(vat)
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
                                <Button className='gomb' variant="primary">Részletek</Button>
                            </Card>

                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}