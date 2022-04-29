import { useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import users from '../img/ui.jpg';
import prod from '../img/prod.jpg';


function Admin() {
    const navi = useNavigate();
    return (

        <div className="kozep menusk adminbackg">
            <h1 className="h1error adminhead">Adminisztrátori felület</h1>
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={prod} />
                            <Card.Body>
                                <Button class="btn btn-success" onClick={() => navi('/admin/products')}>Termékek kezelése</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={users} />
                            <Card.Body>
                                <Button class="btn btn-success" onClick={() => navi('/admin/users')}>Felhasználók kezelése</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Admin;