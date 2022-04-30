import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toast, ToastContainer } from 'react-bootstrap';


export default function AdminUsers() {
    const path = 'http://localhost:5555';
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState({});

    const [delStatus, setDelStatus] = useState(false);
    const [changeStatus, setChangeStatus] = useState(false);
    const [show, setShow] = useState(false);
    const [message,setMessage] = useState({});

    const toggleShow = () => setShow(!show);

    const deleteUser = async (login) => {
        console.log(login)
        const result = await axios.delete(`${path}/user`, { data: { login } }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log(result.data.status)
        if (result.data.status === "ok") {
            setMessage({headerTitle: "Művelet", body: "Sikeres törlés!"})
            setShow(true)
            setDelStatus(true)
        }
    }

    const fetchdata = async () => {
        const result = await axios.get(`${path}/users`)
        setData(result.data)
        setDelStatus(false)
        console.log(result.data)
    }

    useEffect(() => {
        setChangeStatus(false)
        fetchdata();
    }, []);


    const handleUpdate = async (id, index) => {
        if (updateData[index]) {
            axios.patch(`${path}/user`, { id, updateData: updateData[index] }).then(res => {
                if (res.data.status === 'ok') {
                    let vmi = updateData;
                    delete updateData[index];
                    setUpdateData(vmi)
                    setMessage({headerTitle: "Művelet", body: "Sikeres módosítás!"})
                    setShow(true)
                    setChangeStatus(true)
                }
            })
        }
    }
    const handleChange = async (e, index) => {
        const { name, value } = e.target;

        setUpdateData({
            ...updateData,
            [index]: {
                ...updateData[index], [name]: value
            }

        })

    }
    console.log(updateData)
    return (
        <>
        <div className="table-responsive-sm kartya">
            <a href="/admin"><button type="button" class="btn btn-success szunet">Vissza az Admin felületre</button></a>
            <br></br>
            <h1 className='h1users'>Felhasználói lista</h1>
            <div className='adminszel'>
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
                <tbody className=''>
                    {data.map((elem, index) => (
                        <tr key={index} className='table-active'>
                            <td>{elem.userID}</td>
                            <td>{elem.login}</td>
                            <td><input type="text" name="name" defaultValue={elem.name} onChange={(e) => handleChange(e, index)} /></td>
                            <td><input type="text" name="phone" defaultValue={elem.phone} onChange={(e) => handleChange(e, index)} /></td>
                            <td><input type="date" name="birth" defaultValue={elem.birth.slice(0, 10)} onChange={(e) => handleChange(e, index)} /></td>
                            <td><input type="text" name="email" defaultValue={elem.email} onChange={(e) => handleChange(e, index)} /></td>
                            <td><input type="text" name="billing_address" defaultValue={elem.billing_address} onChange={(e) => handleChange(e, index)} /></td>
                            <td><input type="text" name="shipping_address" defaultValue={elem.shipping_address} onChange={(e) => handleChange(e, index)} /></td>
                            <td><input type="text" name="tax_reg" defaultValue={elem.tax_reg} onChange={(e) => handleChange(e, index)} /></td>
                            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => deleteUser(elem.login)}>Törlés</button></td>
                            <td><button type="button" className="btn btn-warning btn-sm" onClick={() => handleUpdate(elem.userID, index)}>Módosítás</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>


        </div>
        <ToastContainer className="p-3" position='top-end'>
          <Toast bg="light" show={show} onClose={toggleShow} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{message.headerTitle}</strong>
          </Toast.Header>
          <Toast.Body>{message.body}</Toast.Body>
        </Toast>
        </ToastContainer>
        </>
    )
    
};
