import React from 'react';

export default function Szolgaltatas() {

    return (

        <div id='szolgi'>
            <h3>A helyszíni szolgáltatási díjak</h3>
            <table className='table table-striped'>
                <tbody>
                    <tr>
                        <th>Helyszíni hibaelhárítási szolgáltatások</th><th>Nettó ár:</th><th>Bruttó ár(27% áfával):</th>
                    </tr>
                    <tr>
                        <td>30 perc helyszíni munkavégzés kiszállással együtt (Szabolcs megye egész területén)</td>
                        <td>6457 Forint</td>
                        <td>8200 Forint</td>
                    </tr>
                    <tr>
                        <td>30 perc helyszíni munkavégzés sürgősségi kiszállással (3 órán belül) együtt (Szabolcs megye egész területén)</td>
                        <td>9441 Forint</td>
                        <td>11900 Forint</td>
                    </tr>
                    <tr>
                        <td>Minden további megkezdett 30 perc munkaidő</td>
                        <td>2598 Forint</td>
                        <td>3300 Forint</td>
                    </tr>
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