import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Szolgaltatas() {
    const path = 'http://localhost:5555';
    const [data, setData] = useState([]);
    const fetchdata = async () => {
        const result = await axios.get(`${path}/services`);
        setData(result.data)
    }

    useEffect(() => {
        fetchdata();

    }, []);
    console.log(data)

    return (

        <div id='szolgi'>
            <h3>A helyszíni szolgáltatási díjak</h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Helyszíni hibaelhárítási szolgáltatások</th><th>Nettó ár:</th><th>Bruttó ár(27% áfával):</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(elem=>(
                        <tr key={elem.serviceID}>
                            <th>{elem.description}</th><th>{elem.net_value} Ft</th><th>+ 27 % ÁFA</th><th><button type="button" class="btn btn-success btn-sm">Megrendelem</button></th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br></br>
            <h3>A leggyakoribb események kategóriánként</h3>
            <table className='table table-striped'>
                <tbody>
                    <tr>
                        <th>Kategória</th><th>Helyszíni hibaelhárítási szolgáltatások</th>
                    </tr>
                    <tr>
                        <td>30 percen belül elvégezhető munkák</td>
                        <td>PC-diagnózis, hibabehatárolás javítási ajánlattal, e-mail beállítás, internetkapcsolat beállítása, perifériaillesztés, hardverelemek cseréje (tápegység, memória stb.), protokollhibák elhárítása, egyszerűbb router konfigurálás, wifi csatlakoztatás</td>
                    </tr>
                    <tr>
                        <td>60 percen belül elvégezhető munkák</td>
                        <td>Összetettebb routerkonfigurálás, PC illesztése meglévő hálózatba (1 gép esetén), egyszerűbb Operációs rendszer telepítése</td>
                    </tr>
                    <tr>
                        <td>120 percen belül elvégezhető munkák</td>
                        <td>Operációs rendszer telepítése, irodaszoftverek telepítése, PC illesztése meglévő hálózatba (max. 3 gép esetén), PC-nagytakarítás (vírusirtás, kémprogram eltávolítása, koszmentesítés)</td>
                    </tr>
                    <tr>
                        <td>180 percen belül elvégezhető munkák</td>
                        <td>Operációs rendszer telepítése (meglévő gép esetén a gép eredeti/korábbi adatainak visszaállí-tásával, installációs lemezzel rendelkező szoftverek visszatelepítésével)</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}