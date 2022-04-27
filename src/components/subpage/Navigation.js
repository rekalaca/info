import { Outlet, Link } from "react-router-dom";
import { Nav } from 'reactstrap';


export default function Navigation() {
    return (
     
        <div className='container'>
            <Nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 section-tab-nav tab-nav menusk">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Főoldal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/rolunk">Rólunk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/regist">Regisztráció</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/szolgaltatas">Szolgáltatásaink</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/pc">PC/Laptop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/routers">WiFi Router</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/perifer">Periféria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/cable">Kábel</a>
                            </li>
                            {}
                        </ul>

                    </div>
                </div>
            </Nav>
            <Outlet />
        </div>
       
    )
}