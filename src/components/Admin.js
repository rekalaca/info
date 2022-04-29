import { useNavigate } from 'react-router-dom'


function Admin() {
    const navi = useNavigate();
    return (

        <div className="kozep adminbackg">
            <h1 className="h1error adminhead">Adminisztrátori felület</h1>
                <div className="row">
                    <div className="col-3">
                        <button type="button" class="btn btn-success" onClick={()=>navi('/admin/products')}>Termékek kezelése</button>
                    </div>
                    <div className="col-3">
                        <button type="button" class="btn btn-success" onClick={()=>navi('/admin/users')}>Felhasználók kezelése</button>
                    </div>
                    <div className="col-3">
                        <button type="button" class="btn btn-success">Számlázási adatok</button>
                    </div>
                    <div className="col-3">
                        <button type="button" class="btn btn-success">Beszállítók</button>
                    </div>
            <div className="container">    
                <div id="adatotkiir"></div>
                {/* <div className="row menusk alsohezag">
                    <div className="col-5 upload">
                        <h5 className="adminh5">Számlázási adatok:</h5>
                        <input class="form-control form-control-sm bev" type="number" placeholder="User ID" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Felhasználónév" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Név" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Email cím" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Adószám" aria-label=".form-control-sm example" />
                        <button type="button" class="btn btn-info szunet">Lekérdezés</button>
                    </div>
                    <div className="col">
                        
                    </div>
                    <div className="col-5 upload">
                        <h5 className="adminh5">Beszállítók:</h5>
                        <input class="form-control form-control-sm bev" type="number" placeholder="User ID" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Cégnév" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Cégjegyzékszám" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Adószám" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Cím" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Bankszámlaszám" aria-label=".form-control-sm example" />
                        <input class="form-control form-control-sm bev" type="text" placeholder="Email cím" aria-label=".form-control-sm example" />
                        <button type="button" class="btn btn-success szunet">Regisztrálom</button>
                        <button type="button" class="btn btn-danger szunet">Törlöm</button>
                        <button type="button" class="btn btn-warning szunet">Módosítom</button>
                        <button type="button" class="btn btn-info szunet">Lekérdezés</button>
                    </div>
                </div> */}
            </div>
        </div>
        </div>




    )
};

export default Admin;