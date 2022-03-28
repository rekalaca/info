import React from 'react';
import { useState } from "react";
import reg from './img/website.png';
import 'bootstrap/dist/css/bootstrap.css';

function GoodRegist() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="kozep back">
            <p className='display-6 kozep infogreen'>SIKERES REGSZTRÁCIÓ !</p>
            <img className='' src={reg} alt="" />
            <p className='h4 infogreen'>Jelentkezz be!</p>
            <div className="col-md-4 menusk">
                <label for="formGroupExampleInput" class="form-label">Felhasználónév:</label>
                <input type="text" className="form-control" id="login" placeholder="" onChange={(e) => setLogin(e.target.value)} />
            </div>
            <br></br>
            <div className="col-md-4 menusk">
                <label for="inputPassword" className="form-label">Jelszó:</label>
                <input type="password" className="form-control" id="password" placeholder="" onChange={(e) => setPassword(e.target.value)} />
                <br></br>
                <a href=""><h1 class="h6">Elfelejtetted a jelszavad?</h1></a>
            </div>
            
              
            <br></br>
            <div className='kozep'><button class="btn btn-primary gomb">Bejelentkezés</button></div>

        </div>

    )
};

export default GoodRegist;