import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function AdminUsers() {
    const path = 'http://localhost:5555';
    const [data, setData] = useState([]);
    const [delStatus,setDelStatus] = useState(false);
    const [changeStatus,setChangeStatus] = useState(false);
    
    const deleteUser = async (login) => {
        console.log(login)
        const result = await axios.delete(`${path}/user`,{data: {login}},{headers: {
                "Content-Type": "application/json"}
            })

         console.log(result.data.status)
        if(result.data.status === "ok"){
            setDelStatus(true)
        }
    }

    const fetchdata = async () => {
        const result = await axios.get(`${path}/users`)
        setData(result.data)
        setDelStatus(false)
    }    
    console.log(data)
    useEffect(() => {
        fetchdata();
        
    }, [delStatus,changeStatus]);
  
    

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
                            <td><button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteUser(elem.login)}>Törlés</button></td>
                            <td><button type="button" className="btn btn-warning btn-sm" >Módosítás</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>



    )
};
