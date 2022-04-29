import { useNavigate } from 'react-router-dom'


function Admin() {
    const navi = useNavigate();
    return (

        <div className="kozep adminbackg">
            <h1 className="h1error adminhead">Adminisztrátori felület</h1>
                <div className="row">
                    <div className="col-6">
                        <button type="button" class="btn btn-success" onClick={()=>navi('/admin/products')}>Termékek kezelése</button>
                    </div>
                    <div className="col-6">
                        <button type="button" class="btn btn-success" onClick={()=>navi('/admin/users')}>Felhasználók kezelése</button>
                    </div>
                </div>
        </div>
    )
};

export default Admin;