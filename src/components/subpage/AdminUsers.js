import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function AdminUsers() {
    const path = 'http://localhost:5555';
    const [data, setData] = useState([]);
    const [vat, setVat] = useState([]);

    const fetchdata = async () => {
        const result = await axios.get(`${path}/users`)
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

        <div className="table-responsive kartya">
            <a href="/admin"><button type="button" class="btn btn-success szunet">Vissza az Admin felületre</button></a>
            <br></br>
            <h1 className='h1users'>Felhasználói lista</h1>

            <table className="table table-striped">
                <thead>
                    <tr className="align-bottom">
                        <th scope="col">Azonosító</th>
                        <th scope="col">Felhasználónév</th>
                        <th scope="col">Név</th>
                        <th scope="col">Telefonszám</th>
                        <th scope="col">Születési dátum</th>
                        <th scope="col">Email cím</th>
                        <th scope="col">Számlázási cím</th>
                        <th scope="col">Szállítási cím</th>
                        <th scope="col">Adószám</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((elem, index) => (
                        <tr key={index} className='table-active'>
                            <td>{elem.userID}</td>
                            <td>{elem.login}</td>
                            <td>{elem.name}</td>
                            <td>{elem.phone}</td>
                            <td>{elem.birth}</td>
                            <td>{elem.email}</td>
                            <td>{elem.billing_address}</td>
                            <td>{elem.shipping_address}</td>
                            <td>{elem.tax_reg}</td>
                            <td><a href=""><button type="button" className="btn btn-danger btn-sm">Törlés</button></a></td>
                            <td><a href=""><button type="button" className="btn btn-warning btn-sm">Módosítás</button></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>



    )
};
