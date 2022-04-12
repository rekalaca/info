import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
export default function Pc() {

    const [data, setData] = useState([]);
    const [vat, setVat] = useState([]);

    const fetchdata = async () => {
		const result = await axios.get("http://localhost:5555/productsPC")
        const vat = await axios.get("http://localhost:5555/vat")
		setData(result.data)
        setVat(vat.data);
	}
    useEffect(() => {
		fetchdata();
		
	},[]);
    console.log(data)
    console.log(vat)
    return (
        <div className='section'>
            <div className='container'>
                <div className="row">
                {data.map((elem,index)=>(
                    <div key={index} className='col-md-3 col-xs-6'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={`http://localhost:5555/${elem.picture}`} />
                        <Card.Body>
                            <Card.Title>{elem.name}</Card.Title>
                            <Card.Text>
                                {elem.description}
                            </Card.Text>
                            <Card.Text>
                                {elem.net_value} Ft
                            </Card.Text>
                            <Button className='gomb' variant="primary">Részletek</Button>
                        </Card.Body>
                    </Card>
                </div>
                ))}

                </div>
            </div>
        </div >
    )
}